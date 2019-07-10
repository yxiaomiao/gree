;
! function($) {
    /*公共部分：登录弹框*/ //引用尾部
    $("#foot").load("footer.html");

}(jQuery)


! function($) {
    //登录之后，获取cookie的用户名 
    if ($.cookie('tel')) { //头部登录信息更改成获取后 的用户名信息
        $('#top_login_id').get(0).innerHTML = `<span class="font_82" id="goalldd">Hi,
        <a href="/order/queryBuyer?otoFlag=0">G${$.cookie('tel')}</a>&nbsp;欢迎！</span>&nbsp;&nbsp;
        <a href="login.html">[退出]</a>
        <i class="mar_lr10 font_ec">|</i>
        <a href="/backlog/backlogInfo" onclick="closeMenu()">个人中心</a>
        `
    } else {
        $('#top_login_id').get(0).innerHTML = `<a href="login.html">登录</a><i class="mar_lr10 font_ec">|</i><a href="registor.html">注册</a>`
    }
}(jQuery)