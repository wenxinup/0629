"use strict";define(["jquery","common","text!template/menu.html","getUrl"],function(n,c,o,t){var a=t("id"),l=t("active");n.ajax({url:"/api/menu",dataType:"json",data:{id:a},success:function(t){var e,i;console.log(t),n.map(t.item.toc,function(t,e){t.chapter_id==l?t.active=!0:t.active=!1}),c(o,t.item,n(".content")),e=n("li.active").position().top,n(".content").scrollTop(e),i=t.item.toc.length,n(".content").on("click","li",function(){window.location.href="../page/read.html?id="+a+"&chapternum="+i+"&chapter="+n(this).index()})}})});