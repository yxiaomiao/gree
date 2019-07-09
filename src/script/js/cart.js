;
! function($) {
    //获取cookie值
    if ($.cookie('cookiesid') && $.cookie('cookienum')) {
        let $arrsid = $.cookie('cookiesid').split(',')
        let $arrnum = $.cookie('cookienum').split(',')

        $.each($arrsid, function(i, value) {
            goodslist(value, $arrnum[i])
            $('.empty-cart').hide()
        })
    } else {
        $('.empty-cart').show()
    }
    //数据渲染到购物车
    function goodslist(sid, num) {
        $.ajax({
            url: 'http://10.31.158.60:8080/gree/gree/php/index.php',
            dataType: 'json'
        }).done(function(piclist) {

            $.each(piclist, function(index, value) { //对于加入购物车的数据进行遍历
                if (sid == value.picid) {
                    var $clonebox = $('.goods-item:hidden').clone(true, true); //克隆.goods-item里的明细
                    $clonebox.find('.goods-pic').find('img').attr('src', value.url) //更改商品图片路径
                    $clonebox.find('.goods-pic').find('a').attr('href', 'http://10.31.158.60/gree/gree/src/details.html?sid=' + value.picid)
                    $clonebox.find('.goods-pic').find('img').attr('sid', value.picid) //给图片添加SID
                    $clonebox.find('.goods-d-info').find('a').html(value.title); //给图片获取标题
                    $clonebox.find('.b-price').find('strong').html(value.price); //给商品获取价格
                    $clonebox.find('.quantity-form').find('input').val(num); //获取商品相应的数量
                    $clonebox.find('.b-sum').find('strong').html((value.price * num).toFixed(2)); //设置总价
                    $clonebox.css('display', 'block');
                    $('.item-list').append($clonebox); //将克隆的盒子添加到.item-list盒子里
                }
            })
        })
    }
    //计算总价和商品
    function priceall() {
        var $sum = 0
        var $num = 0
        $('.goods-item:visible').each(function(index, element) {
            if ($(element).find('.cart-checkbox input').prop('checked')) {
                $sum += parseInt($(element).find('.b-sum').find('strong').html())
                $num += parseInt($(element).find('.quantity-form').find('input').val())

            }
        })
        $('.amount-sum').find('em').html($num)
        $('.price-sum .totalprice').html($sum)

    }

    //全选商品
    $('.allsel').on('click', function() { //全选按钮
        if ($('.allsel').prop('checked')) {
            $('.b-checkbox input').prop('checked', true)
        } else {
            $('.b-checkbox input').prop('checked', false)
        }
        priceall()
    })

    //单选按钮 
    $('.b-checkbox input').on('click', function() {
            if ($('.b-checkbox input').size() - 1 == $('input:checked').not('.allsel').length) {
                $('.allsel').prop('checked', true) //如果商品明细的复选框都选上，则全选按钮的勾选上
            } else {
                $('.allsel').prop('checked', false) //如果商品明细的复选框有个没选上，则全选按钮的勾去掉
            }
            priceall()
        })
        //商品数量新增
    $('.quantity-add').on('click', function() { //增加
            var $count = $(this).parents('.goods-item').find('.quantity-form input').val() //通过父元素获取
            $count++
            $(this).parents('.goods-item').find('.quantity-form input').val($count)
            let $price = $(this).parents('.goods-item').find('.b-price strong').html()
            $(this).parents('.goods-item').find('.b-sum').find('strong').html($count * $price)
            priceall()
            setcookie($(this))

        })
        //商品数量点击减少
    $('.quantity-down').on('click', function() {
            var $count = $(this).parents('.goods-item').find('.quantity-form input').val() //通过父元素获取
            $count--
            if ($count <= 1) {
                $(this).parents('.goods-item').find('.quantity-form input').val(1)
                let $price = $(this).parents('.goods-item').find('.b-price strong').html()
                $(this).parents('.goods-item').find('.b-sum').find('strong').html($price)
            } else {
                $(this).parents('.goods-item').find('.quantity-form input').val($count)
                let $price = $(this).parents('.goods-item').find('.b-price strong').html()
                $(this).parents('.goods-item').find('.b-sum').find('strong').html($count * $price)
            }

            priceall()
            setcookie($(this)) //调取cookie值
        })
        //直接修改数量
    $('.quantity-form input').on('input', function() {
            let reg = /^\d+$/g
            let $value = $(this).val()
            if (reg.test($value)) {
                if ($value < 1) {
                    $(this).val(1)
                } else {
                    $(this).val($value);
                }
            } else {
                $(this).val(1)
            }
            let $price = $(this).parents('.goods-item').find('.b-price strong').html()
            $(this).parents('.goods-item').find('.b-sum').find('strong').html($price * $value)
            priceall()
            setcookie($(this))
        })
        //商品明细删除
    $('.b-action a:first').on('click', function() {

            if (confirm('是否确认删除？')) {
                $(this).parents('.goods-item').remove()
                let $sid = $(this).parents('.goods-item').find('.goods-pic img').attr('sid')
                delcookie($sid)
            }

            priceall()

        })
        //删除选中的商品
    $('.operation a:first').on('click', function() {

        if ($('.goods-item:visible').find('input:checkbox').is(':checked')) {
            if (confirm('是否确认删除选中产品')) {

                $('.goods-item:visible').each(function() {
                    if ($(this).find('input:checkbox').is(':checked')) {
                        $(this).remove()
                        let $sid = $(this).find('.goods-pic img').attr('sid')
                        delcookie($sid)
                    }
                })

            }
        } else {
            alert('未选中删除的商品，请选中对应的商品在点击删除')
        }
    })

    //获取cookie
    function setcookie(_this) {
        let $sid = _this.parents('.goods-item').find('.goods-pic img').attr('sid')
        let arrsid = $.cookie('cookiesid').split(',')
        let arrnum = $.cookie('cookienum').split(',')
        arrnum[arrsid.indexOf($sid)] = _this.parents('.goods-item').find('.quantity-form input').get(0).value
        $.cookie('cookienum', arrnum.toString(), 7)

    }
    //删除cookie
    function delcookie(sid) {
        let $sid = sid
        let arrsid = $.cookie('cookiesid').split(','); //cookie商品的sid  
        let arrnum = $.cookie('cookienum').split(','); //cookie商品的num
        var $index = -1
        $.each(arrsid, function(index, value) {
            if ($sid == value) {
                $index = index
            }
        })
        arrnum.splice($index, 1)
        arrsid.splice($index, 1)
        $.cookie('cookienum', arrnum.toString(), 7)
        $.cookie('cookiesid', arrnum.toString(), 7)

    }
}
(jQuery)