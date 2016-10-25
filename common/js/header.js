/**
 * Created by lujiaolan on 16/10/21.
 */
$(function () {

    // 下拉列表选项卡旋转出现
    $(".list_item_has_sub_menu").hover(function () {
        $li = $(this).children("ul").children("li");
        $li.css({
            opacity: "1",
            transform: "rotateY(0)"
        })
    },function () {
        $li.css({
            opacity: "0",
            transform: "rotateY(90deg)"
        })
    });

    // 导航栏hover的颜色变化
    $(".list_item").hover(function () {
        $(this).children("a").css("color","#eb0127");
    },function () {
        $(this).children("a").css("color","#000");
        $(".current_item").children("a").css("color","#eb0127");
    });

    // 画出登录、注册框
    var $signDiv = $(".sign");
    var $close = $(".close");
    var $login = $(".loginPart");
    var $register = $(".registerPart");
    var $switch = $(".switch");

    // 显示登录框
    function changeToLoginPart() {
        $login.css("z-index","1");
        $register.css("z-index","0");
    }

    // 显示注册框
    function changeToRegisterPart() {
        $login.css("z-index","0");
        $register.css("z-index","1");
    }

    // 登录框滑入
    function signFadeIn() {
        $signDiv.css("display","block");
        changeToLoginPart();
        // 消除动画积累
        if(!$signDiv.is(":animated")){
            $signDiv.animate({
                top: 80,
                opacity: "1"
            },500);
        }
        var $div = $('<div class="overlay"></div>');
        $div.appendTo("body");
    }

    // 注册框滑入
    function registerFadeIn() {
        $signDiv.css("display","block");
        changeToRegisterPart();
        if(!$signDiv.is(":animated")){
            $signDiv.animate({
                top: 80,
                opacity: "1"
            },500);
        }
        var $div = $('<div class="overlay"></div>');
        $div.appendTo("body");
    }

    // 关闭登入、注册框
    function signFadeOut() {
        $signDiv.css({
            opacity: "0",
            top: -500,
            display: "none"
        });
        $("div.overlay").remove();
    }

    $("#tougao").on("click", function (e) {
        signFadeIn();
        // 点击空白处,关闭登录、注册框
        $(document).on("click", function () {
            signFadeOut();
        });
        // 阻止事件冒泡
        e.stopPropagation();
    });

    $("#denglu").on("click", function (e) {
        signFadeIn();
        $(document).on("click", function () {
            signFadeOut();
        });
        e.stopPropagation();
    });

    $("#zhuce").on("click", function (e) {
        registerFadeIn();
        $(document).on("click", function () {
            signFadeOut();
        });
        e.stopPropagation();
    });

    $signDiv.on("click", function (e) {
        e.stopPropagation();
    });

    $close.click(signFadeOut);

    // 关闭图标的旋转动画
    $close.hover(function () {
        $(this).css({
            transform: "rotate(360deg)",
            transition: "all 1s ease"
        });
    },function () {
        $(this).css({
            transform: "rotate(0deg)",
            transition: "all 1s ease"
        });
    });

    // 登录、注册的旋转动画和显示效果
    $switch.click(function () {
        var flag = $login.css("z-index");
        if(flag == 1){
            changeToRegisterPart();
            $login.css({
                transform: "rotateY(180deg)",
                transition: "all 1s ease"
            });
            $register.css({
                transform: "rotateY(0)",
                transition: "all 1s ease"
            })
        }else {
            changeToLoginPart();
            $login.css({
                transform: "rotateY(0)",
                transition: "all 1s ease"
            });
            $register.css({
                transform: "rotateY(-180deg)",
                transition: "all 1s ease"
            })
        }
    });

    // 点击搜索按钮
    $(".list_item_menu_search").on("click", function (e) {
        $(".search").addClass("active");
        $(".bg").addClass("active");
        $(document).on("click", function () {
            $(".search").removeClass("active");
            $(".bg").removeClass("active");
        });
        e.stopPropagation();
    });

});
