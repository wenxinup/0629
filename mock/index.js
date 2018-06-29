var data = require('./index/home'); //data为home.json中的所有数据
var page1Data = require('./index/recommend1'); //pageData为recommend1中的所有数据
var page2Data = require('./index/recommend2'); //pageData为recommend2中的所有数据
var page3Data = require('./index/recommend3'); //pageData为recommend3中的所有数据
var searchKey = require('./search/searchKey');
var searchData = require('./search/search');
var detailData = require('./detail/352876');   //它为352876中的所有数据
var menuData = require('./read/chapter-list'); //它为chapter-list.json中的所有数据
var readData1 = require('./read/data1');  //它为data1.json中的所有数据
var readData2 = require('./read/data2');  //它为data2.json中的所有数据
var readData3 = require('./read/data3');  //它为data3.json中的所有数据
var readData4 = require('./read/data4');  //它为data4.json中的所有数据

//console.log(data)
var bannerData = {
    '/api/index':data,
    '/api/loadmore?pageNum=1&limit=20':page1Data,
    '/api/loadmore?pageNum=2&limit=20':page2Data,
    '/api/loadmore?pageNum=3&limit=20':page3Data,
    '/api/list':page2Data,
    '/api/searchKey':searchKey,
    '/api/detail?id=352876':detailData,
    '/api/menu?id=352876':menuData,
    '/api/read?chapter=1':readData1,
    '/api/read?chapter=2':readData2,
    '/api/read?chapter=3':readData3,
    '/api/read?chapter=4':readData4
}
module.exports = function(url){
    //console.log(url,searchData)
    if(/\/api\/ao/.test(url)){
        var wen = url.split('?')[1]
        var val = decodeURIComponent(wen.split('=')[1])
        //console.log(val)
        var reg = new RegExp(val,'g')
        var obj = {
            msg:'暂无数据',
            cont:[]
        }
        var newArr = searchData.items.filter(function(v,i){
            v.author = v.role[0][1]
            return reg.test(v.title)||reg.test(v.intro)||reg.test(v.role[0][1])
        })
        if(newArr.length){
            obj.msg = 'success';
            obj.cont = newArr
        }
        return obj;
    }
    return bannerData[url]
}