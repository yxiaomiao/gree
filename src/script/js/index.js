//购物车获取cookie数据
;
! function($) {
    $('#shop_car').hover(function() { //鼠标经过，显示mini_cart
        $('#mini_cart').css('display', 'block')

    }, function() {
        $('#mini_cart').css('display', 'none')
    })
}(jQuery)
//头部搜索框固定定位
;
! function($) {
    $(window).on('scroll', function() {
        let $scrolltop = $(window).scrollTop();
        if ($scrolltop > 150) {
            $('#header').eq(0).addClass('active')

        } else {
            $('#header').eq(0).removeClass('active')
        }
    })
}(jQuery)
//banner幻灯片效果
;
! function($) {
    $.fn.extend({
        lunbo: function() {
            const $banner = $('#b03')
            const $ul = $('#b03 ul')
            const $btnli = $('#b03 ol li') //获取点击按钮
            const $picli = $('#b03 ul li') //获取图片
            let $liwidth = $picli.get(0).offsetWidth //设置点击一次ul移动的距离
            const $right = $('#right')
            let timer = null
            let $num = 0
            let bstop = true
            let $firstclone = $picli.eq($picli.length - 1).clone(true)
            let $lastclone = $picli.eq(0).clone(true)
            $ul.append($lastclone)
            $ul.prepend($firstclone)
            $ul.css({
                width: $liwidth * ($btnli.length + 2),
                left: -$liwidth
            })
            $btnli.on('click', function() {
                    tabswitch($(this).index())
                })
                //被动播放设置
            function tabswitch(num) {
                $btnli.eq(num).addClass('active').siblings().removeClass('active')
                $ul.stop(true).animate(({
                    left: -$liwidth * (num + 1)
                }), function() {
                    if (num == $btnli.length) {
                        $ul.css({
                            left: -$liwidth
                        })
                        $num = 0
                    } else {
                        $ul.animate(({
                            left: -$liwidth * (num + 1)
                        }))
                    }
                    bstop = true
                })
            }
            //
            $right.on('click', function() {
                    if (bstop) {
                        bstop = false
                        $num++
                        tabswitch($num)
                        if ($num == $btnli.length) {
                            $btnli.eq(0).addClass('active').siblings().removeClass('active')
                                //当前点击的按钮添加类
                        }
                    }
                })
                //自动播放设置autoplay
            timer = setInterval(function() {
                    $right.click()

                }, 3000)
                //
            $banner.hover(function() {
                    clearInterval(timer) //鼠标经过关闭定时器
                },
                function() {
                    timer = setInterval(function() {
                        $right.click() //鼠标移出开启定时器

                    }, 3000)
                })
        }
    })
}(jQuery)

//侧边导航栏设置
;
! function($) {
    const $navlist = $('.Nav_classify ul li')

    $navlist.hover(function() {

        $(this).addClass('mc_classify_list01').siblings().removeClass('mc_classify_list01')
        $('.mc_classify_prompt').css('display', 'block')
    }, function() {
        $('.mc_classify_prompt').css('display', 'none')
            // $(this).removeClass('mc_classify_list01')
    })
    $('.mc_classify_prompt').hover(function() {
        $('.mc_classify_prompt').css('display', 'block')

    }, function() {
        $('.mc_classify_prompt').css('display', 'none')
        $(this).siblings().removeClass('mc_classify_list01')
    })
}(jQuery)
//商品盒子遮罩效果
;
! function($) {
    $.fn.extend({
        zhezhao: function() {
            $(this).find('ul li').hover(function() {
                $(this).animate({
                    opacity: 0.7
                })

            }, function() {

                $(this).animate({
                    opacity: 1
                })
            })
            $(this).find('.Floor_left .catalogueList').hover(function() {
                $(this).animate({
                    opacity: 0.7
                })

            }, function() {

                $(this).animate({
                    opacity: 1
                })
            })
            $(this).find('.mrjx div').hover(function() {
                $(this).animate({
                    opacity: 0.7
                })

            }, function() {

                $(this).animate({
                    opacity: 1
                })
            })
        }
    })

}(jQuery)
//4楼商品数据渲染
;
! function($) {
    $.ajax({
        url: 'http://10.31.158.60:8080/gree/gree/php/index.php',
        dataType: 'json'
    }).done(function(piclist) {
        let str = ''

        $.each(piclist, function(index, value) {

            str += `<li>
            <!--商品图片 -->
            <a class="cursor" href='http://10.31.158.60:8080/gree/gree/src/details.html?sid=${value.picid}' title="${value.title}" target="_blank">
                <!--转换-->
                                                        <img src="${value.url}" width="160" height="160" style="margin-left: 18px">
                                                </a>
            <a class="cursor" href='http://10.31.158.60:8080/gree/gree/src/details.html?sid=${value.picid}' style='color: #666;font-size: 14px; line-height: 18px;width: 180px;display: block;overflow: hidden;margin-top: 5px; margin-left: 10px; height: 36px; word-break: break-all;'>
               ${value.title}智能垃圾桶 9L 环保自动开关桶盖 GA-0901 黄色 
            </a>
            <label style="color: #c00;font-size:16px;cursor:pointer;display:block;font:700 18px/24px Verdana,Arial;text-align:center;margin-top:5px;">
                                                        ${value.price}
                                                </label>
        </li>`
        })

        $('#floorId189').html(str)

        $('#floorId189 li:first img').css({
            width: 393,
            height: 465
        })
    })


}(jQuery)
//tab切换
;
! function($) {
    $('.FloorList-tit ul li').each(function(index, element) {

        $(this).on('mousemove', function() {
            $(this).addClass('active floorProduction').css('background', 'rgb(216, 58, 73)').siblings().css('background', '').removeClass()
            $(this).parents('.Floor_right').find('.FloorList ul').eq($(this).index()).show().siblings().hide()

        })

    })



}(jQuery)
//楼梯效果
;
! function($) {
    //滚动条移动到一定位置显示楼梯
    $(window).on('scroll', function() {
            let $scrolltop = $(window).scrollTop()

            if ($scrolltop > 1100 && $scrolltop < 4100) {
                $('#leftBar').show()
            } else {
                $('#leftBar').hide()
            }


            $('#floors>div').each(function(index, element) {
                let $loucengtop = $('#floors>div').eq(index).offset().top + 100
                if ($loucengtop >= $scrolltop) {
                    $('#leftBar div').eq(index).addClass('current').siblings().removeClass('current')
                    return false
                }

            })
        })
        //点击楼层

    $('#leftBar div').on('click', function() {
        $(this).addClass('current').siblings().removeClass('current')
        let $loucengtop = $('#floors>div').eq($(this).index()).offset().top - 130
        $('html,body').animate({
            scrollTop: $loucengtop
        })
    })
}(jQuery)