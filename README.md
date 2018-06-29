# 0629
书城项目温欣
项目介绍

读书在小米 创作无极限 —— 这个口号一直是起点众多玄幻、魔幻、武侠、军文小说作者的创作目标，严谨的写作态度，锲而不舍的求新求变，与书友的直接沟通交流修改，从而在小米书城拥有国内很多具有一流水平的原创作品，使书友得以在第一时间阅读到作者连载的好书佳作。

技术栈

gulp + require + handlebars + ES6/7 + ajax + sass + flex + canvas + 懒加载

项目运行

    git clone git@github.com:typeofYh/6bookcity.git
    npm install --save-dev
    gulp dev
目录结构

book-city
    |——mock
    |    |——login
    |    |    |---login.json    //存储的时登陆页及注册页用户的相关数据
    |    |——index
    |    |    |---home.json    //首页数据
    |    |    |---recommend1.json    //加载更多第一页数据
    |    |    |---recommend2.json    //加载更多第二页数据
    |    |    |---recommend3.json    //加载更多第三页数据
    |    |——search
    |    |    |---search.json    //搜索结果
    |    |    |---searchKey.json    //搜索关键字
    |    |——detail
    |    |    |---352876.json    //详情页数据
    |    |——read
    |    |    |---chapter-list.json    //目录页数据
    |    |    |---data1.json    //第一章的jsonp地址
    |    |    |---data2.json    //第二章的jsonp地址
    |    |    |---data3.json    //第三章的jsonp地址
    |    |    |---data4.json    //第四章的jsonp地址
    |    |-index.js            //数据主接口
    |——dest
    |    |——page
    |    |    |——search.html //搜索页
    |    |    |——read.html //文章阅读页
    |    |    |——detail.html //详情页
    |    |    |——menu.html //目录页
    |    |    |——login.html //登录页
    |    |——js
    |    |    |——common
    |    |    |    |-common.js   //handlebars模板编译公共方法
    |    |    |    |-getUrl.js  //获取地址栏参数
    |    |    |——index
    |    |    |    |-index.js   //首页
    |    |    |——search
    |    |    |    |-search.js   //搜索页
    |    |    |——read
    |    |    |    |-read.js   //文章阅读页
    |    |    |——detail
    |    |    |    |-detail.js   //详情页
    |    |    |——menu
    |    |    |    |-menu.js   //目录页
    |    |    |——login
    |    |    |    |-login.js   //登录页
    |    |    |——lib   //引入要用的相关js文件
    |    |    |    |-require.js
    |    |    |    |-handlebars.js
    |    |    |    |-jquery.js
    |    |    |    |-jquery.lazyload.js  //图片懒加载js文件
    |    |    |    |-jquery.base64.js //解码js文件
    |    |    |    |-require.text.js
    |    |    |——main.js      //require配置入口文件
    |    |——css
    |    |    |-detail.css
    |    |    |-login.css
    |    |    |-menu.css
    |    |    |-read.css
    |    |    |-search.css
    |    |    |-style.css
    |    |    |-swiper-4.2.2.min.css
    |    |——template
    |    |    |-index.html      //首页模板
    |    |    |-free.html //限时免费
    |    |    |-girl.html //女生最爱男生最爱加载更多
    |    |    |-introduce.html //重磅推荐模板
    |    |    |-detail.html //详情页模板
    |    |    |-menu.html //目录页模板
    |    |    |-search1.html //搜索页模板
    |    |    |-second.html //上拉加载第二页模板
    |    |    |-thound.html //上拉加载第三页模板
    |    |    |-title.html //精选专题模板
    |    |    |-week.html //本周最火模板
    |    |-index.html           //首页内容
    |-gulpfile.js    //用来起服务，压缩css,压缩js,压缩html,编译scss
作品部分页面截图
![image](src/img/1.png)
![image](src/img/2.png)
![image](src/img/3.png)
![image](src/img/4.png)
![image](src/img/5.png)
![image](src/img/6.png)
![image](src/img/7.png)
