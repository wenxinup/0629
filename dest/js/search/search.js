"use strict";define(["jquery","common","lazyload","text!template/search1.html"],function(e,n,t,a){e.getJSON("/api/searchKey").done(function(t){n(e(".text").html(),t,".search_content")}),e(".sou").on("click",function(){var t=e(".book_content").val();""!=t?e.ajax({url:"/api/ao",data:{value:t},dataType:"json",success:function(t){0!==t.cont.length?n(a,t,".search_content"):e(".search_content").html(t.msg),e("img.ao").lazyload({effect:"fadeIn",container:e(".search_content")})}}):alert("搜索内容不能为空!")})});