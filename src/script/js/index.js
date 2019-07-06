;
! function($) {
    //获取cookie的用户名
    if ($.cookie('tel')) {
        $('#top_login_id').get(0).innerHTML = `<span class="font_82" id="goalldd">Hi,
        <a href="/order/queryBuyer?otoFlag=0">G${$.cookie('tel')}</a>&nbsp;欢迎！</span>&nbsp;&nbsp;
        <a href="login.html">[退出]</a>
        <i class="mar_lr10 font_ec">|</i>
        <a href="/backlog/backlogInfo" onclick="closeMenu()">个人中心</a>
        `
    } else {
        $('#top_login_id').get(0).innerHTML = `<a href="login.html">登录</a><i class="mar_lr10 font_ec">|</i><a href="registor.html">注册</a>`
    }
    //轮播图
    function Lunbo() {
        this.$picli = $('#b03 ul li')
        this.$btnli = $('#b03 ol li')
        let _this = this
        this.num = 0
        this.timer = null
        this.init = function() {
            _this.$btnli.click()
        }
        this.$btnli.on('click', function() {
            _this.num = $(this).index()
            _this.tabswitch(_this.num)

        })
        this.timer = setInterval(function() {
            _this.num++
                if (_this.num > _this.$btnli.length - 1) {
                    _this.num = 0
                }
            _this.tabswitch(_this.num)

        }, 5000)
        $('#b03').hover(function() {
            clearInterval(_this.timer)
        }, function() {
            _this.timer = setInterval(function() {
                _this.num++
                    if (_this.num > _this.$btnli.length - 1) {
                        _this.num = 0
                    }
                _this.tabswitch(_this.num)

            }, 1000)
        })
        this.tabswitch = function() {
            this.$btnli.eq(this.num).addClass('active').siblings().removeClass('active')
            this.$picli.eq(this.num).show().siblings().hide()
        }
    }
    new Lunbo().init()
}(jQuery)