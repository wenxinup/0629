"use strict";define(["jquery","base64","common","getUrl"],function(t,n,c,e){var o=window.localStorage,r=o.getItem("fontSize")||14;console.log(r),t("p").css("fontSize",r);var i=e("chapternum");t(".chaptersum").html(i);var a=e("chapter")||1;function s(){t.ajax({url:"/api/read",data:{chapter:a},dataType:"json",success:function(n){t(".num").html(a),function(n,t){window.duokan_fiction_chapter=function(n){t(n),document.head.removeChild(c)};var c=document.createElement("script");c.src=n,document.head.appendChild(c)}(n.jsonp,function(n){console.log(JSON.parse(t.base64().decode(n)));n=JSON.parse(t.base64().decode(n));c(t(".text").html(),n,t(".content"))})}})}s(),t(".next").on("click",function(){return a=i<++a?chapter:a,0,s(),!1}),t(".prev").on("click",function(){return a=--a<=0?1:a,0,s(),!1}),t(".menu").on("click",function(){return window.location.href="../page/menu.html?id="+e("id")+"&active="+a,!1}),t(".content").on("click",function(){t(".mark").toggle()}),t(".mark").on("click",function(){t(".mark").toggle()}),t(".size").on("click",function(){return t(".apple").toggle(),!1}),t(".apple_top>button").on("click",function(){return r=parseInt(JSON.stringify(t("p").css("fontSize")).substr(1,2)),"大"===t(this).html()?t("p").css("fontSize",++r):t("p").css("fontSize",--r),o.setItem("fontSize",r),!1}),t(".apple_bottom>span>p").on("click",function(){var n=t(this).css("background");return console.log(n),t(".content").css("background",n),!1}),t(".content").css("background","rgba(0,0,0,0.9)"),t(".night").on("click",function(){return"夜间"==t(".wen").html()?(t(".content").css("background","pink"),t(".pic1").attr("src","../img/ao5.png"),t(".wen").html("白天")):(t(".pic1").attr("src","../img/ao3.png"),t(".wen").html("夜间"),t(".content").css("background","rgba(0,0,0,0.9)"),t("p").css("color","#555")),!1})});