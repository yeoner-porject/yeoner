
//点击其他地方隐藏div jQuery方法
$(document).bind('click',function(e){
    var target = $(e.target);
    if(target.closest(".form-control").length == 0){
        $(".aw-dropdown").css('display','none')
    }else{
        $(".aw-dropdown").css('display','block')
    }
});

// 话题
$(function () {

    $(".navbar-toggle").on("click",function () {
        $(".collapse").toggle()
    })

    // 全部
    $.ajax({
        url: "json/content-huaTi.json",
        dataType:'json',
        method:'get',
        success: function(data) {
            $.each(data.quanBu, function(i, value) {
                $(template('quanBuHuaTi', value)).appendTo("#quanBu .mod-body");
            });
        }
    });
    // week
    $.ajax({
        url: "../json/content-huaTi.json",
        dataType:'json',
        method:'get',
        success: function(data) {
            $.each(data.week, function(i, value) {
                $(template('weekHuaTi', value)).appendTo("#quanBu .mod-body");
            });
        }
    });
    // month
    $.ajax({
        url: "../json/content-huaTi.json",
        dataType:'json',
        method:'get',
        success: function(data) {
            $.each(data.month, function(i, value) {
                $(template('monthHuaTi', value)).appendTo("#quanBu .mod-body");
            });
        }
    });

    var $bj = $(".beiJing");
    var $pp = $(".pinPai");
    var $sp = $(".shiPin");
    var $yd = $(".yunDong");
    var $qx = $(".qiXing");
    var $gy = $(".gaoYuan");
    
    var $BJ = $("#beiJing");
    var $PP = $("#pinPai");
    var $SP = $("#shiPin");
    var $YD = $("#yunDong");
    var $QX = $("#qiXing");
    var $GY = $("#gaoYuan");

    // 北京
    $bj.click(function () {
        $BJ.css('display','block').siblings(".aw-topic-list").css('display','none');
        $(".aw-nav-tabs li").css('display','none');
        $(this).addClass("active").parents('li').siblings().children('a').removeClass("active");
    })
    // 品牌
    $pp.click(function () {
        $PP.css('display','block').siblings(".aw-topic-list").css('display','none');
        $(".aw-nav-tabs li").css('display','none');
        $(this).addClass("active").parents('li').siblings().children('a').removeClass("active");
    })
    // 视频
    $sp.click(function () {
        $SP.css('display','block').siblings(".aw-topic-list").css('display','none');
        $(".aw-nav-tabs li").css('display','none');
        $(this).addClass("active").parents('li').siblings().children('a').removeClass("active");
    })
    // 运动
    $yd.click(function () {
        $YD.css('display','block').siblings(".aw-topic-list").css('display','none');
        $(".aw-nav-tabs li").css('display','none');
        $(this).addClass("active").parents('li').siblings().children('a').removeClass("active");
    })
    // 骑行
    $qx.click(function () {
        $QX.css('display','block').siblings(".aw-topic-list").css('display','none');
        $(".aw-nav-tabs li").css('display','none');
        $(this).addClass("active").parents('li').siblings().children('a').removeClass("active");
    })
    // 高原
    $gy.click(function () {
        $GY.css('display','block').siblings(".aw-topic-list").css('display','none');
        $(".aw-nav-tabs li").css('display','none');
        $(this).addClass("active").parents('li').siblings().children('a').removeClass("active");
    })

})
