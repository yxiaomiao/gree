"use strict";!function(i){i("#shop_car").hover(function(){i("#mini_cart").css("display","block")},function(){i("#mini_cart").css("display","none")})}(jQuery),function(i){i(window).on("scroll",function(){150<i(window).scrollTop()?i("#header").eq(0).addClass("active"):i("#header").eq(0).removeClass("active")})}(jQuery),function(u){u.fn.extend({lunbo:function(){var i=u("#b03"),t=u("#b03 ul"),n=u("#b03 ol li"),s=u("#b03 ul li"),e=s.get(0).offsetWidth,o=u("#right"),l=null,c=0,a=!0,r=s.eq(0).clone(!0);function f(i){n.eq(i).addClass("active").siblings().removeClass("active"),t.stop(!0).animate({left:-e*i},function(){i==n.length?(t.css({left:0}),c=0):t.animate({left:-e*i}),a=!0})}t.append(r),t.css({}),n.on("click",function(){f(u(this).index())}),o.on("click",function(){a&&(a=!1,f(++c),c==n.length&&n.eq(0).addClass("active").siblings().removeClass("active"))}),l=setInterval(function(){o.click()},3e3),i.hover(function(){clearInterval(l)},function(){l=setInterval(function(){o.click()},3e3)})}})}(jQuery),function(i){i(".Nav_classify ul li").hover(function(){i(this).addClass("mc_classify_list01").siblings().removeClass("mc_classify_list01"),i(".mc_classify_prompt").css("display","block")},function(){i(".mc_classify_prompt").css("display","none")}),i(".mc_classify_prompt").hover(function(){i(".mc_classify_prompt").css("display","block")},function(){i(".mc_classify_prompt").css("display","none"),i(this).siblings().removeClass("mc_classify_list01")})}(jQuery),function(i){i.fn.extend({zhezhao:function(){i(this).find(".FloorList ul li").hover(function(){i(this).animate({opacity:.7})},function(){i(this).animate({opacity:1})}),i(this).find(".Floor_left .catalogueList").hover(function(){i(this).animate({opacity:.7})},function(){i(this).animate({opacity:1})}),i(this).find(".mrjx div").hover(function(){i(this).animate({opacity:.7})},function(){i(this).animate({opacity:1})})}})}(jQuery),function(t){t.ajax({url:"http://10.31.158.60:8080/gree/gree/php/index.php",dataType:"json"}).done(function(i){var n="";t.each(i,function(i,t){n+='<li>\n            \x3c!--商品图片 --\x3e\n            <a class="cursor" href=\'http://10.31.158.60:8080/gree/gree/src/details.html?sid='+t.picid+"' title=\""+t.title+'" target="_blank">\n                \x3c!--转换--\x3e\n                                                        <img src="'+t.url+'" width="160" height="160" style="margin-left: 18px">\n                                                </a>\n            <a class="cursor" href=\'http://10.31.158.60:8080/gree/gree/src/details.html?sid='+t.picid+"' style='color: #666;font-size: 14px; line-height: 18px;width: 180px;display: block;overflow: hidden;margin-top: 5px; margin-left: 10px; height: 36px; word-break: break-all;'>\n               "+t.title+'智能垃圾桶 9L 环保自动开关桶盖 GA-0901 黄色 \n            </a>\n            <label style="color: #c00;font-size:16px;cursor:pointer;display:block;font:700 18px/24px Verdana,Arial;text-align:center;margin-top:5px;">\n                                                        '+t.price+"\n                                                </label>\n        </li>"}),t("#floorId189").html(n),t("#floorId189 li:first img").css({width:393,height:465})})}(jQuery),function(n){n(".FloorList-tit ul li").each(function(i,t){n(this).on("mousemove",function(){n(this).addClass("active floorProduction").css("background","rgb(216, 58, 73)").siblings().css("background","").removeClass(),n(this).parents(".Floor_right").find(".FloorList ul").eq(n(this).index()).show().siblings().hide()})})}(jQuery),function(e){e(window).on("scroll",function(){var s=e(window).scrollTop();1100<s&&s<4100?e("#leftBar").show():e("#leftBar").hide(),e("#floors>div").each(function(i,t){var n=e("#floors>div").eq(i).offset().top+100;if(s<=n)return e("#leftBar div").eq(i).addClass("current").siblings().removeClass("current"),!1})}),e("#leftBar div").on("click",function(){e(this).addClass("current").siblings().removeClass("current");var i=e("#floors>div").eq(e(this).index()).offset().top-130;e("html,body").animate({scrollTop:i})})}(jQuery);