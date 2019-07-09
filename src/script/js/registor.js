;
! function($) {
    const $tel = $('#tel')
    const $szmm = $('#password')
    const $qrmm = $('#qrmm')
    const $check = $('#check')
    const $submit = $('#submit')
    let telflag = true
    let szmm = true
    let qrmm = true
    let yzmm = null

    // 手机号验证
    $tel.on('blur', function() {
            if ($tel.value != '') {
                var reg = /^1[3|5|7|8|9]\d{9}$/
                if (reg.test(this.value) == false) { //
                    $('.telspan').html('你输入的手机号码格式有误')
                    $('.telspan').css('color', 'red');
                    telflag = false
                } else {
                    $.ajax({
                        url: 'http://10.31.158.60:8080/gree/gree/php/registor.php',
                        dataType: 'json',
                        data: {
                            tel: this.value
                        }
                    }).done(function(d) {
                        if (d == 0) {
                            $('.telspan').html('')
                            telflag = true
                        } else {
                            $('.telspan').html('手机号已存在')
                            $('.telspan').css('color', 'red');
                            telflag = false
                        }
                    })

                }
            }
        })
        //密码验证
    $szmm.on('input', function() {
        if (6 <= this.value.length && this.value.length <= 20) {
            let num = 0
            let regnum = /\d+/
            let othercase = /[\W\_]+/
            let reglowercase = /[a-z]+/; //小写字母
            let reguppercase = /[A-Z]+/; //大写字母
            if (regnum.test(this.value)) {
                num++;
            }

            if (reglowercase.test(this.value)) {
                num++;
            }

            if (reguppercase.test(this.value)) {
                num++;
            }

            if (othercase.test(this.value)) {
                num++;
            }
            switch (num) {
                case 1:
                    $('.passspan').html('弱');
                    $('.passspan').css('color', 'red')
                    szmm = false;
                    break;
                case 2:
                case 3:
                    $('.passspan').html('中');
                    $('.passspan').css('color', 'yellow')
                    szmm = true;
                    break;
                case 4:
                    $('.passspan').html('强');
                    $('.passspan').css('color', 'green')
                    szmm = true;
                    break;
            }


        } else {
            $('.passspan').html('请输入6-20位的字符，由不同数字，字母，字符两种以上组合');
            $('.passspan').css('color', 'orange')

            szmm = false
        }

    })
    $szmm.on('blur', function() {
            if (this.value == '') {
                $('.passspan').html('请输入6-20位的字符，由不同数字，字母，字符两种以上组合');
                $('.passspan').css('color', 'orange')

                szmm = false;
            }
            if (szmm) {

                $('.passspan').html('√');
                $('.passspan').css('color', 'green')
                yzmm = this.value
            } else {
                $('.passspan').html('请输入6-20位的字符，由不同数字，字母，字符两种以上组合');
                $('.passspan').css('color', 'orange')
                szmm = false;
            }

        })
        //确认密码
    $qrmm.on('blur', function() {

            if (yzmm != this.value) {
                $('.qrmmspan').html('两次输入密码不一致')
                $('.qrmmspan').css('color', 'red')
                qrmm == false
            } else {
                $('.qrmmspan').html('')

                qrmm == true

            }
        })
        //表单验证
    $('form').on('submit', function() {
        let $check = $('#check').prop('checked')
        if ($tel.value == '') {
            $('.telspan').html('请输入正确的手机号码');
            $('.telspan').html('color', 'red')
            telflag = false
        }
        if ($szmm.value == '') {
            $('.passpan').html('请输入正确的邮政编码');
            $('.passpan').html('color', 'red')
            szmm = false;

        }
        if ($qrmm.value == '') {

            $('.qrmmspan').html('两次输入密码不一致')
            $('.qrmmspan').css('color', 'red')
            qrmm = false;

        }
        if (!telflag || !szmm || !qrmm || !$check) {

            return false

        }


    })
}(jQuery)