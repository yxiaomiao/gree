"use strict";!function(e){var p=e("#loginname_id"),i=e("#loginpwd_id");e("#btn_submit").on("click",function(){var o=p.prop("value"),n=i.prop("value");e.ajax({type:"post",data:{tel:o,pass:n},url:"http://10.31.158.60:8080/gree/gree/php/login.php"}).done(function(n){1==n?(e.cookie("tel",o,{expires:7}),location.href="index.html"):0==n?(e("#loginname_span").html("输入的用户名有误"),e("#loginname_span").css("color","red")):(e("#loginpwd_span").html("输入的密码有误"),e("#loginpwd_span").css("color","red"))})})}(jQuery);