"use strict";!function(a){var e=a("#tel"),t=a("#password"),l=a("#qrmm"),n=(a("#check"),a("#submit"),!0),p=!0,r=!0,s=null;e.on("blur",function(){if(""!=e.value){0==/^1[3|5|7|8|9]\d{9}$/.test(this.value)?(a(".telspan").html("你输入的手机号码格式有误"),a(".telspan").css("color","red"),n=!1):a.ajax({url:"http://10.31.158.60:8080/gree/gree/php/registor.php",dataType:"json",data:{tel:this.value}}).done(function(s){n=0==s?(a(".telspan").html(""),!0):(a(".telspan").html("手机号已存在"),a(".telspan").css("color","red"),!1)})}}),t.on("input",function(){if(6<=this.value.length&&this.value.length<=20){var s=0;switch(/\d+/.test(this.value)&&s++,/[a-z]+/.test(this.value)&&s++,/[A-Z]+/.test(this.value)&&s++,/[\W\_]+/.test(this.value)&&s++,s){case 1:a(".passspan").html("弱"),a(".passspan").css("color","red"),p=!1;break;case 2:case 3:a(".passspan").html("中"),a(".passspan").css("color","yellow"),p=!0;break;case 4:a(".passspan").html("强"),a(".passspan").css("color","green"),p=!0}}else a(".passspan").html("请输入6-20位的字符，由不同数字，字母，字符两种以上组合"),a(".passspan").css("color","orange"),p=!1}),t.on("blur",function(){""==this.value&&(a(".passspan").html("请输入6-20位的字符，由不同数字，字母，字符两种以上组合"),a(".passspan").css("color","orange"),p=!1),p?(a(".passspan").html("√"),a(".passspan").css("color","green"),s=this.value):(a(".passspan").html("请输入6-20位的字符，由不同数字，字母，字符两种以上组合"),a(".passspan").css("color","orange"),p=!1)}),l.on("blur",function(){s!=this.value?(a(".qrmmspan").html("两次输入密码不一致"),a(".qrmmspan").css("color","red")):a(".qrmmspan").html("")}),a("form").on("submit",function(){var s=a("#check").prop("checked");if(""==e.value&&(a(".telspan").html("请输入正确的手机号码"),a(".telspan").html("color","red"),n=!1),""==t.value&&(a(".passpan").html("请输入正确的邮政编码"),a(".passpan").html("color","red"),p=!1),""==l.value&&(a(".qrmmspan").html("两次输入密码不一致"),a(".qrmmspan").css("color","red"),r=!1),s||alert("请勾选同意协议"),!(n&&p&&r&&s))return!1})}(jQuery);