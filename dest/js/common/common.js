"use strict";define(["jquery","handlebars"],function(a,s){return function(e,r,t,n){var i=s.compile(e);s.registerHelper("finish",function(e){return e?"已完结":"连载中"}),s.registerHelper("upDatetime",function(e){var r=new Date(e);return r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate()+" "+r.getHours()+":0"+r.getMinutes()}),s.registerHelper("price",function(e){if(!e)return"免费"});var u=i(r);n?a(t).append(u):a(t).html(u)}});