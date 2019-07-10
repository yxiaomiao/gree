;
! function($) {
    let $sid = location.search.slice(5)
    $.ajax({
        url: 'http://10.31.158.60:8080/gree/gree/php/details.php',
        data: {
            sid: $sid
        },
        dataType: 'json'

    }).done(function(piclist) {
        //详情图
        let str = `<div class="left_pic_tip" id="limitPurchaseSign" style="display: none">
        <span>限 购</span>
    </div>
    <img src="${piclist[0].url}" width="398" height="398" id="midimg">
    <div style="left: 44.9px; top: 64px; display: none;" id="winSelector"></div>`
        $('#vertical').html(str)
            //title和price
        let titlestr = `<h1 class="fl cursor text_style" title="${piclist[0].title} " style="font-size:18px;width:450px;margin-left:30px;line-height: 1.5em">${piclist[0].title} &nbsp;
        </h1>
        <div id="isGoods1" title="${piclist[0].title}">
            <p class="describe" style="width: 450px;">
               ${piclist[0].title}
            </p>
        </div>`

        $('.mid_tit').html(titlestr)
            //明细图
        let $urllist = piclist[0].imgurls.split(',')
        let $ulstr = ''
        $.each($urllist, function(index, value) {
            $ulstr += `<li><img src=${value}></li>`
        })
        $('#imageMenu ul').html($ulstr)

        let $bigpic = `
        <img width="800" height="800" alt="" 
        src="${piclist[0].url}" 
        style="left: -90.2512px; top: -128.643px;"></img>`
        $('#bigView').html($bigpic)
    })

}(jQuery)
// 放大镜效果
;
! function($) {
    $('.bigImg').hover(function() {
        $('#bigView').css('display', 'block')
        $('#winSelector').css('display', 'block')
        let $width = $('.bigImg').width() * $('#bigView').width() / $('#bigView img').width()
        let $height = $('.bigImg').height() * $('#bigView').height() / $('#bigView img').height();
        var bili = 2
        $('#winSelector').css({
            width: $width,
            height: $height,

        })
        $(this).on('mousemove', function(ev) {

            let $left = ev.pageX - $('.left_pic').offset().left - $('#winSelector').width() / 2 //放大镜的宽
            let $top = ev.pageY - $('.left_pic').offset().top - $('#winSelector').height() / 2 //放大镜的高
            if ($left < 0) {
                $left = 0
            } else if ($left >= $('.bigImg').width() - $width) {
                $left = $('.bigImg').width() - $width
            }
            $('#winSelector').css({
                left: $left,
                top: $top
            })
            if ($top < 0) {
                $top = 0;
            } else if ($top >= $('.bigImg').height() - $height) {
                $top = $('.bigImg').height() - $height;
            }
            $('#winSelector').css('left', $left);
            $('#winSelector').css('top', $top);
            $('#bigView img').css('left', -$left * bili);
            $('#bigView img').css('top', -$top * bili);
        })
    }, function() {
        $('#bigView').css('display', 'none')
        $('#winSelector').css('display', 'none')
    })

    //点击小图在放大镜显示
    $('#imageMenu ul').on('click', 'li', function() {
        var $imgurl = $(this).find('img').attr('src');
        $('.bigImg').find('img').attr('src', $imgurl);
        $('#bigView img').attr('src', $imgurl);
    });
    //点击箭头切换
    var $num = 4;
    $('#imageMenu ul').css('position', 'absolute')
    $('#imageMenu ul').css({
        overflow: 'hidden',
        height: 82,
        left: 0,
        top: 0
    })
    $('#right').on('click', function() {
        var $list = $('#imageMenu ul li');
        if ($list.length > $num) {
            $num++;
            $('#left').css('color', '#333');
            if ($list.length == $num) {
                $('#right').css('color', '#fff');
            }
            $('#imageMenu ul').animate({
                left: -($num - 4) * $list.eq(0).innerWidth()
            })
        }

    })

    $('#left').on('click', function() {

        var $list = $('#imageMenu ul li');
        if ($num > 4) {
            $num--;
            $('#right').css('color', '#333');
            if ($num <= 4) {
                $('#left').css('color', '#fff');
            }
            $('#imageMenu ul').animate({
                left: ($num - 4) * $list.eq(0).innerWidth()
            })
        }
    });
    // 点击加号新增数量
    let $value = ''
    $('.wrap-input .btn-add').on('click', function() {

        $value = $('#productNumD').get(0).value++
    })

    $('.wrap-input .btn-reduce').on('click', function() {


            if ($('#productNumD').get(0).value-- <= 1) {
                $('#productNumD').get(0).value = 1
            } else {
                $('#productNumD').get(0).value
            }



        })
        //加入购物车

    let $sid = location.search.slice(5)
    let $arrsid = []
    let $arrnum = []

    function cookietoarray() {
        if (getcookie('cookiesid') && getcookie('cookienum')) { //判断商品是第一次存还是多次存储
            $arrsid = getcookie('cookiesid').split(','); //cookie商品的sid  
            $arrnum = getcookie('cookienum').split(','); //cookie商品的num
        }
    }
    //
    $('#addCart').on('click', function() {
            cookietoarray()

            if ($.inArray($sid, $arrsid) != -1) {
                var num = parseInt($arrnum[$.inArray($sid, $arrsid)]) + parseInt($('#productNumD').val());
                $arrnum[$.inArray($sid, $arrsid)] = num
                addcookie('cookienum', $arrnum.toString(','), 10);
            } else {
                $arrsid.push($sid)

                addcookie('cookiesid', $arrsid.toString(), 10);
                $arrnum.push($('#productNumD').val())
                addcookie('cookienum', $arrnum.toString(','), 10);
            }
            $('#addCartBomb').css('display', 'block') //加入购物车弹出框
        })
        //点击继续浏览当前页面
    $('.button_3').on('click', function() {
        $('#addCartBomb').css('display', 'none')
    })

}(jQuery)

//点击立即购买判断
$('#J_LinkBuy').on('click', function() {
    alert(1)
})