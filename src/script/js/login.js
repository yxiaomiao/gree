//登录页面js
;
! function($) {

    const $tel = $('#loginname_id')
    const $pass = $('#loginpwd_id')
    const $btn = $('#btn_submit')


    $btn.on('click', function() {
        let $telvalue = $tel.prop('value') //获取用户输入的手机号
        let $passvalue = $pass.prop('value')
        $.ajax({
            type: 'post',
            data: {
                tel: $telvalue,
                pass: $passvalue

            },
            url: 'http://10.31.158.60:8080/gree/gree/php/login.php'
        }).done(function(data) {

            if (data == 1) { //验证用户名和密码是否一致
                $.cookie('tel', $telvalue, { expires: 7 })
                location.href = 'index.html'; //跳转

            } else {
                if (data == 0) {
                    $("#loginname_span").html('输入的用户名有误') //验证用户名是否存在
                    $("#loginname_span").css('color', 'red')
                } else {
                    $("#loginpwd_span").html('输入的密码有误') //
                    $("#loginpwd_span").css('color', 'red')
                }
            }

        })
    })
}(jQuery)