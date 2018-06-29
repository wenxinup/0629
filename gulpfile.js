var gulp = require('gulp');
var css = require('gulp-sass'); //引入编译scss的插件
var url = require('url');
var path = require('path');
var fs = require('fs');
var queryString = require('querystring')
var server = require('gulp-webserver'); //引入起服务的插件
var mock = require('./mock/index'); //它返回的是一个函数
var loginData = require('./mock/login/login').dataInfo //引入login.json中的数据
var cleanCss = require('gulp-clean-css'); //引入压缩css的插件
var uglify = require('gulp-uglify'); //引入压缩js的插件
var html = require('gulp-htmlmin'); //引入压缩html的插件
var autoprefixer = require('gulp-autoprefixer'); //引入添加css内核前缀的插件
var babel = require('gulp-babel');
var babelCore = require('babel-core');
var es5 = require('babel-preset-es2015'); //引入编译es6的三个插件
//创建任务编译scss
gulp.task('scss',function(){
    gulp.src('./src/scss/*.scss')
    .pipe(css())
    .pipe(autoprefixer({
        browsers:['last 2 versions']
    }))
    .pipe(gulp.dest('./src/css'))
})
//创建任务监听scss的变化
gulp.task('change',function(){
    gulp.watch('./src/scss/*.scss',['scss'])
})
//创建任务压缩css
gulp.task('mincss',function(){
    gulp.src('src/css/*.css')
    .pipe(cleanCss())
    .pipe(gulp.dest('./dest/css'))
})
//创建任务压缩js并将es5转成es6
gulp.task('minjs',function(){
    gulp.src('src/js/**/*.js')
    .pipe(babel({
        presets:'es2015'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dest/js'))
})
//创建任务压缩html
gulp.task('minhtml',function(){
    gulp.src('src/**/*.html')
    .pipe(html({
        collapseWhitespace:true,
        removeComments:false
    }))
    .pipe(gulp.dest('./dest'))
})
//创建任务起服务(测试环境)
gulp.task('server',function(){
    gulp.src('src')
    .pipe(server({
        port:6060,
        hostname:'localhost',
        open:true,
        livereload:true,
        middleware:function(req,res,next){
            if(req.url === '/favicon.ico'){
                return false
            }
            var pathname = url.parse(req.url,true).pathname;
            pathname = pathname === '/' ?'/index.html':pathname;
            if(/\/api\//.test(pathname)){
                //接受post方式传过来的数据通过req.ondata和onend方式获取
                if(pathname === '/api/login'||pathname === '/api/register'){
                     var arr = [];
                     req.on('data',function(chunk){
                         arr.push(chunk)
                     })
                     req.on('end',function(){
                         var data = Buffer.concat(arr).toString()
                         var newData = queryString.parse(data)
                         if(pathname === '/api/login'){
                             var result = loginData.some(function(v){
                                 //console.log(v)
                                 return v.user === newData.user&&v.pwd === newData.pwd
                             })
                             if(result){
                                 res.end(JSON.stringify({"code":1,"msg":"登陆成功"}))
                             }
                             else{
                                res.end(JSON.stringify({"code":0,"msg":"用户名或密码有误"}))
                             }
                         }
                         else{
                             //往login.json中添加
                             loginData.push(newData)
                             var obj = {
                                 dataInfo:loginData
                             }
                             fs.writeFileSync('./mock/login/login.json',JSON.stringify(obj))
                             res.end(JSON.stringify({"code":1,"msg":"注册成功"}))
                         }
                     })
                     return false  //防止它继续往下执行
                }
                res.end(JSON.stringify(mock(req.url)))
            } else {
                res.end(fs.readFileSync(path.join(__dirname,'src',pathname)))
            }

        }
    }))
})
//创建任务起服务(开发环境)
gulp.task('wserver',function(){
    gulp.src('dest')
    .pipe(server({
        port:6060,
        hostname:'localhost',
        open:true,
        livereload:true,
        middleware:function(req,res,next){
            if(req.url === '/favicon.ico'){
                return false
            }
            var pathname = url.parse(req.url,true).pathname;
            pathname = pathname === '/' ?'/index.html':pathname;
            if(/\/api\//.test(pathname)){
                //接受post方式传过来的数据通过req.ondata和onend方式获取
                if(pathname === '/api/login'||pathname === '/api/register'){
                     var arr = [];
                     req.on('data',function(chunk){
                         arr.push(chunk)
                     })
                     req.on('end',function(){
                         var data = Buffer.concat(arr).toString()
                         var newData = queryString.parse(data)
                         if(pathname === '/api/login'){
                             var result = loginData.some(function(v){
                                 //console.log(v)
                                 return v.user === newData.user&&v.pwd === newData.pwd
                             })
                             if(result){
                                 res.end(JSON.stringify({"code":1,"msg":"登陆成功"}))
                             }
                             else{
                                res.end(JSON.stringify({"code":0,"msg":"用户名或密码有误"}))
                             }
                         }
                         else{
                             //往login.json中添加
                             loginData.push(newData)
                             var obj = {
                                 dataInfo:loginData
                             }
                             fs.writeFileSync('./mock/login/login.json',JSON.stringify(obj))
                             res.end(JSON.stringify({"code":1,"msg":"注册成功"}))
                         }
                     })
                     return false  //防止它继续往下执行
                }
                res.end(JSON.stringify(mock(req.url)))
            } else {
                res.end(fs.readFileSync(path.join(__dirname,'dest',pathname)))
            }

        }
    }))
})

gulp.task('default',['scss','change','minhtml','minjs','mincss'])
gulp.task('dev',['wserver'])