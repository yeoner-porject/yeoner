/**
 * Created by lujiaolan on 16/11/8.
 */
$(function () {
    var a = location.search.substring(1);
    var $crumbs_cate = $(".crumbs_cate.left");
    // console.log(a);
    $.ajax({
        url: "json/content.json",
        success: function (data) {
            // console.log(data);
            $.each(data.shenrenzhi, function (i, val) {
                // console.log(val);
                if (a == "shenrenzhi") {
                    if (i < 20) {
                        $(template("vedioTemp", val)).appendTo(".video_cat:eq(0) .swiper_wrapper");
                        document.title = "神人志 | 野玩儿";
                    }
                } else {
                    $(template("vedioTemp", val)).appendTo(".video_cat:eq(0) .swiper_wrapper");
                }
            });
            $.each(data.jixian, function (i, val) {
                if (a == "jixian") {
                    if (i < 20) {
                        $(template("vedioTemp", val)).appendTo(".video_cat:eq(1) .swiper_wrapper");
                        document.title = "极限运动 | 野玩儿";
                    }
                } else {
                    $(template("vedioTemp", val)).appendTo(".video_cat:eq(1) .swiper_wrapper");
                }
            });
            $.each(data.zhuangbei, function (i, val) {
                if (a == "zhuangbei") {
                    if (i < 20) {
                        $(template("vedioTemp", val)).appendTo(".video_cat:eq(2) .swiper_wrapper");
                        document.title = "户外装备 | 野玩儿";
                    }
                } else {
                    $(template("vedioTemp", val)).appendTo(".video_cat:eq(2) .swiper_wrapper");
                }

            });
            $.each(data.quwei, function (i, val) {
                if (a == "quwei") {
                    if (i < 20) {
                        $(template("vedioTemp", val)).appendTo(".video_cat:eq(3) .swiper_wrapper");
                        document.title = "趣味视频 | 野玩儿";
                    }
                } else {
                    $(template("vedioTemp", val)).appendTo(".video_cat:eq(3) .swiper_wrapper");
                }
            })
        }
    });


    // 点击圆点移动视频
    function page1() {
        $(this).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
        $(this).parent().parent().parent().find(".swiper_wrapper").css("transform", "translate3d(0px, 0px, 0px)");
        $(this).parent().parent().parent().find(".swiper_button_prev").addClass("swiper_button_disabled");
        $(this).parent().parent().parent().find(".swiper_button_next").removeClass("swiper_button_disabled");
    }

    function page2() {
        $(this).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
        $(this).parent().parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-272.5px, 0px, 0px)");
        $(this).parent().parent().parent().find(".swiper_button_prev").removeClass("swiper_button_disabled");
        $(this).parent().parent().parent().find(".swiper_button_next").removeClass("swiper_button_disabled");
    }

    function page3() {
        $(this).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
        // console.log($(this).parent().parent().find("a").text().trim());
        if ($(this).parent().parent().find("a").text().trim() == "神人志") {
            $(this).parent().parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-273px, 0px, 0px)");
            $(this).parent().parent().parent().find(".swiper_button_next").addClass("swiper_button_disabled");
        } else {
            $(this).parent().parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-545px, 0px, 0px)");
        }
        $(this).parent().parent().parent().find(".swiper_button_prev").removeClass("swiper_button_disabled");
    }

    function page4() {
        $(this).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
        $(this).parent().parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-817.5px, 0px, 0px)");
        $(this).parent().parent().parent().find(".swiper_button_prev").removeClass("swiper_button_disabled");
    }

    function page5() {
        $(this).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
        $(this).parent().parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-1090px, 0px, 0px)");
        $(this).parent().parent().parent().find(".swiper_button_next").addClass("swiper_button_disabled");
        $(this).parent().parent().parent().find(".swiper_button_prev").removeClass("swiper_button_disabled");
    }

    var $pages1 = $(".video_cat:eq(0) .swiper_pagination .swiper_pagination_bullet");
    var $pages2 = $(".video_cat:eq(1) .swiper_pagination .swiper_pagination_bullet");
    var $pages3 = $(".video_cat:eq(2) .swiper_pagination .swiper_pagination_bullet");
    var $pages4 = $(".video_cat:eq(3) .swiper_pagination .swiper_pagination_bullet");
    // console.log($pages1);
    $pages1.eq(0).click(page1);
    $pages1.eq(1).click(page2);
    $pages1.eq(2).click(page3);

    $pages2.eq(0).click(page1);
    $pages2.eq(1).click(page2);
    $pages2.eq(2).click(page3);
    $pages2.eq(3).click(page4);
    $pages2.eq(4).click(page5);

    $pages3.eq(0).click(page1);
    $pages3.eq(1).click(page2);
    $pages3.eq(2).click(page3);
    $pages3.eq(3).click(page4);
    $pages3.eq(4).click(page5);

    $pages4.eq(0).click(page1);
    $pages4.eq(1).click(page2);
    $pages4.eq(2).click(page3);
    $pages4.eq(3).click(page4);
    $pages4.eq(4).click(page5);

    // 点击左右按钮移动视频
    var $btns1 = $(".video_cat:eq(0) .swiper_button");
    var $btns2 = $(".video_cat:eq(1) .swiper_button");
    var $btns3 = $(".video_cat:eq(2) .swiper_button");
    var $btns4 = $(".video_cat:eq(3) .swiper_button");
    // console.log($btns1);

    $btns1.eq(0).click(function () {
        $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(0px, 0px, 0px)");
        $pages1.eq(0).addClass("swiper_pagination_bullet_active")
            .siblings().removeClass("swiper_pagination_bullet_active");
        $(this).addClass("swiper_button_disabled");
        $btns1.eq(1).removeClass("swiper_button_disabled");
    });
    $btns1.eq(1).click(function () {
        $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-272.5px, 0px, 0px)");
        $btns1.eq(0).removeClass("swiper_button_disabled");
        if ($pages1.eq(1).hasClass("swiper_pagination_bullet_active")) {
            $pages1.eq(2).addClass("swiper_pagination_bullet_active")
                .siblings().removeClass("swiper_pagination_bullet_active");
            $(this).addClass("swiper_button_disabled");
        } else {
            $pages1.eq(1).addClass("swiper_pagination_bullet_active")
                .siblings().removeClass("swiper_pagination_bullet_active");
        }
    });

    $btns2.eq(0).click(function () {
        if ($pages2.eq(1).hasClass("swiper_pagination_bullet_active")) {
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(0px, 0px, 0px)");
            $pages2.eq(0).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
            $(this).addClass("swiper_button_disabled");
        }
        if ($pages2.eq(2).hasClass("swiper_pagination_bullet_active")) {
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-272.5px, 0px, 0px)");
            $pages2.eq(1).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
        }
        if ($pages2.eq(3).hasClass("swiper_pagination_bullet_active")) {
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-545px, 0px, 0px)");
            $pages2.eq(2).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
        }
        if ($pages2.eq(4).hasClass("swiper_pagination_bullet_active")) {
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-817.5px, 0px, 0px)");
            $pages2.eq(3).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
            $btns2.eq(1).removeClass("swiper_button_disabled");
        }
    });
    $btns2.eq(1).click(function () {
        if ($pages2.eq(0).hasClass("swiper_pagination_bullet_active")) {
            $pages2.eq(1).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
            $btns2.eq(0).removeClass("swiper_button_disabled");
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-272.5px, 0px, 0px)");
        } else if ($pages2.eq(1).hasClass("swiper_pagination_bullet_active")) {
            $pages2.eq(2).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-545px, 0px, 0px)");

        } else if ($pages2.eq(2).hasClass("swiper_pagination_bullet_active")) {
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-817.5px, 0px, 0px)");
            $pages2.eq(3).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
        }
        else if ($pages2.eq(3).hasClass("swiper_pagination_bullet_active")) {
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-1090px, 0px, 0px)");
            $pages2.eq(4).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
            $(this).addClass("swiper_button_disabled");
        }
    });

    $btns3.eq(0).click(function () {
        if ($pages3.eq(1).hasClass("swiper_pagination_bullet_active")) {
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(0px, 0px, 0px)");
            $pages3.eq(0).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
            $(this).addClass("swiper_button_disabled");
        }
        if ($pages3.eq(2).hasClass("swiper_pagination_bullet_active")) {
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-272.5px, 0px, 0px)");
            $pages3.eq(1).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
        }
        if ($pages3.eq(3).hasClass("swiper_pagination_bullet_active")) {
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-545px, 0px, 0px)");
            $pages3.eq(2).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
        }
        if ($pages3.eq(4).hasClass("swiper_pagination_bullet_active")) {
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-817.5px, 0px, 0px)");
            $pages3.eq(3).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
            $btns3.eq(1).removeClass("swiper_button_disabled");
        }
    });
    $btns3.eq(1).click(function () {
        if ($pages3.eq(0).hasClass("swiper_pagination_bullet_active")) {
            $pages3.eq(1).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
            $btns3.eq(0).removeClass("swiper_button_disabled");
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-272.5px, 0px, 0px)");
        } else if ($pages3.eq(1).hasClass("swiper_pagination_bullet_active")) {
            $pages3.eq(2).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-545px, 0px, 0px)");

        } else if ($pages3.eq(2).hasClass("swiper_pagination_bullet_active")) {
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-817.5px, 0px, 0px)");
            $pages3.eq(3).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
        }
        else if ($pages3.eq(3).hasClass("swiper_pagination_bullet_active")) {
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-1090px, 0px, 0px)");
            $pages3.eq(4).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
            $(this).addClass("swiper_button_disabled");
        }
    });

    $btns4.eq(0).click(function () {
        if ($pages4.eq(1).hasClass("swiper_pagination_bullet_active")) {
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(0px, 0px, 0px)");
            $pages4.eq(0).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
            $(this).addClass("swiper_button_disabled");
        }
        if ($pages4.eq(2).hasClass("swiper_pagination_bullet_active")) {
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-272.5px, 0px, 0px)");
            $pages4.eq(1).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
        }
        if ($pages4.eq(3).hasClass("swiper_pagination_bullet_active")) {
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-545px, 0px, 0px)");
            $pages4.eq(2).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
        }
        if ($pages4.eq(4).hasClass("swiper_pagination_bullet_active")) {
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-817.5px, 0px, 0px)");
            $pages4.eq(3).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
            $btns4.eq(1).removeClass("swiper_button_disabled");
        }
    });
    $btns4.eq(1).click(function () {
        if ($pages4.eq(0).hasClass("swiper_pagination_bullet_active")) {
            $pages4.eq(1).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
            $btns4.eq(0).removeClass("swiper_button_disabled");
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-272.5px, 0px, 0px)");
        } else if ($pages4.eq(1).hasClass("swiper_pagination_bullet_active")) {
            $pages4.eq(2).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-545px, 0px, 0px)");

        } else if ($pages4.eq(2).hasClass("swiper_pagination_bullet_active")) {
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-817.5px, 0px, 0px)");
            $pages4.eq(3).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
        }
        else if ($pages4.eq(3).hasClass("swiper_pagination_bullet_active")) {
            $(this).parent().parent().find(".swiper_wrapper").css("transform", "translate3d(-1090px, 0px, 0px)");
            $pages4.eq(4).addClass("swiper_pagination_bullet_active").siblings().removeClass("swiper_pagination_bullet_active");
            $(this).addClass("swiper_button_disabled");
        }
    });

    if (a == "shenrenzhi") {
        $crumbs_cate.find("li:eq(3)").addClass("current_cat").siblings().removeClass("current_cat");
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="shiPin.html">户外视频</a>&nbsp;»&nbsp;<span class="current">神人志</span></article>');
        $article.insertAfter($crumbs_cate);
        $(".current_item .sub_menu li:eq(0) a").css("color", "#eb0127");
        $(".feature_video").hide();
        $(".video_cat:eq(0)").find(".video_title").hide();
        $(".video_cat:eq(0)").find(".swiper_wrapper").css("width", "1090px");
        $(".video_cat:eq(1)").hide();
        $(".video_cat:eq(2)").hide();
        $(".video_cat:eq(3)").hide();
    } else if (a == "jixian") {
        $crumbs_cate.find("li:eq(2)").addClass("current_cat").siblings().removeClass("current_cat");
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="shiPin.html">户外视频</a>&nbsp;»&nbsp;<span class="current">极限运动</span></article>');
        $article.insertAfter($crumbs_cate);
        $(".current_item .sub_menu li:eq(1) a").css("color", "#eb0127");
        $(".feature_video").hide();
        $(".video_cat:eq(1)").find(".video_title").hide();
        $(".video_cat:eq(1)").find(".swiper_wrapper").css("width", "1090px");
        $(".video_cat:eq(0)").hide();
        $(".video_cat:eq(2)").hide();
        $(".video_cat:eq(3)").hide();
    } else if (a == "zhuangbei") {
        $crumbs_cate.find("li:eq(1)").addClass("current_cat").siblings().removeClass("current_cat");
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="shiPin.html">户外视频</a>&nbsp;»&nbsp;<span class="current">户外装备</span></article>');
        $article.insertAfter($crumbs_cate);
        $(".current_item .sub_menu li:eq(2) a").css("color", "#eb0127");
        $(".feature_video").hide();
        $(".video_cat:eq(2)").find(".video_title").hide();
        $(".video_cat:eq(2)").find(".swiper_wrapper").css("width", "1090px");
        $(".video_cat:eq(0)").hide();
        $(".video_cat:eq(1)").hide();
        $(".video_cat:eq(3)").hide();
    } else if (a == "quwei") {
        $crumbs_cate.find("li:eq(4)").addClass("current_cat").siblings().removeClass("current_cat");
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="shiPin.html">户外视频</a>&nbsp;»&nbsp;<span class="current">趣味视频</span></article>');
        $article.insertAfter($crumbs_cate);
        $(".current_item .sub_menu li:eq(3) a").css("color", "#eb0127");
        $(".feature_video").hide();
        $(".video_cat:eq(3)").find(".video_title").hide();
        $(".video_cat:eq(3)").find(".swiper_wrapper").css("width", "1090px");
        $(".video_cat:eq(1)").hide();
        $(".video_cat:eq(2)").hide();
        $(".video_cat:eq(0)").hide();
    } else {
        $crumbs_cate.find("li:eq(0)").addClass("current_cat").siblings().removeClass("current_cat");
    }

    // $("#youkuplayer").mouseenter(function () {
    //     $(".skin_0").addClass("show");
    //     setInterval(function () {
    //         $(".skin_0").removeClass("show");
    //     },5000);
    // }).mouseleave(function () {
    //     setInterval(function () {
    //         $(".skin_0").removeClass("show");
    //     },3000);
    // }).mousemove(function () {
    //     $(".skin_0").addClass("show");
    //     setInterval(function () {
    //         $(".skin_0").removeClass("show");
    //     },5000);
    // });

    $(".player_control_bar_format_button").hover(function () {
        $(".player_control_bar_format_select").show();
    }, function () {
        $(".player_control_bar_format_select").hide();
    });

    $(".player_control_bar_volume_button").hover(function () {
        $(".player_control_bar_volume_bar").show();
    }, function () {
        $(".player_control_bar_volume_bar").hide();
    });

    // $(".skin_0").mouseenter(function () {
    //     $(".skin_0").addClass("show");
    // }).mouseleave(function () {
    //     $(".skin_0").removeClass("show");
    // })

    $(".player_control_bar_progress").hover(function () {
        $("#content .skin_0 .player_control_bar_progress_played:after").css("opacity", "1");
        $("#content .skin_0 .player_control_bar_progress_played:before").css("opacity", "1");
    }, function () {
        $("#content .skin_0 .player_control_bar_progress_played:after").css("opacity", "0");
        $("#content .skin_0 .player_control_bar_progress_played:before").css("opacity", "0");
    });

    var j = 0;
    var k = 0;
    var i = 0;
    setInterval(function () {
        i++;
        $(".player_control_bar_current").text("00:0" + i);
        if (i > 9) {
            $(".player_control_bar_current").text("00:" + i);
        }
        if (i > 59) {
            j = parseInt(i / 60);
            if (k > 59) {
                k = 0;
            }
            $(".player_control_bar_current").text("0" + j + ":0" + k);
            if (k > 9) {
                $(".player_control_bar_current").text("0" + j + ":" + k);
            }
            k++;
        }
        $width = (351/246) * i;
        $(".player_control_bar_progress_played").css("width",$width);
        console.log(i);
        if(i > 246){
            $(".player_control_bar_current").text("04:06");
            $(".player_control_bar_progress_played").css("width","100%");
        }
    }, 1000);


    var fullscreen = function () {
        elem = document.getElementById("youkuplayer");
        if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.requestFullScreen) {
            elem.requestFullscreen();
        } else {
            //浏览器不支持全屏API或已被禁用
        }
        $(".player_control_bar_fullscreen i:eq(0)").css("display", "none");
        $(".player_control_bar_fullscreen i:eq(1)").css("display", "block");
    };
    var exitFullscreen = function () {
        var elem = document;
        if (elem.webkitCancelFullScreen) {
            elem.webkitCancelFullScreen();
        } else if (elem.mozCancelFullScreen) {
            elem.mozCancelFullScreen();
        } else if (elem.cancelFullScreen) {
            elem.cancelFullScreen();
        } else if (elem.exitFullscreen) {
            elem.exitFullscreen();
        } else {
            //浏览器不支持全屏API或已被禁用
        }
        $(".player_control_bar_fullscreen i:eq(1)").css("display", "none");
        $(".player_control_bar_fullscreen i:eq(0)").css("display", "block");
    };
    $(".icon-quanping").click(function () {
        fullscreen();
    });
    $(".icon-kuanping").click(function () {
        exitFullscreen();
    });


    $(".icon-yinliang1").click(function () {
        $(".icon-yinliang").show();
        $(this).hide();
        $("#content .skin_0 .player_control_bar_volume_show").css("background-color", "#cbbaae");
    });
    $(".icon-yinliang").click(function () {
        $(this).hide();
        $(".icon-yinliang1").show();
        $("#content .skin_0 .player_control_bar_volume_show").css("background-color", "#09d1b1")
    })




});
