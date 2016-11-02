/**
 * Created by lujiaolan on 16/10/21.
 */
$(function () {
    $.ajax({
        url: "json/content.json",
        success: function (data) {
            // console.log(data);
            $.each(data.news, function (i,val) {
                $(template("newsTemp",val)).appendTo(".news ul");
            });
            $.each(data.slide, function (i,val) {
                $(template("swiperTemp",val)).appendTo(".swiper_wp");
            });
            $.each(data.hot, function (i,val) {
                $(template("hotTemp",val)).appendTo(".hot_list ul");
            });
            $.each(data.tuijian,function (i,val) {
               $(template("tuijianTemp",val)).appendTo(".tuijian .layout_ul");
            });
            $.each(data.zhuangBei, function (i,val) {
                var $li = $(template("zhuangBeiTemp",val));
                var className = "list"+(i+1);
                $li.addClass(className);
                $li.appendTo(".one .cate_list");
            });
            $.each(data.zhiShi, function (i,val) {
                var $li = $(template("zhiShiTemp",val));
                var className = "list"+(i+1);
                $li.addClass(className);
                $li.appendTo(".two .cate_list");
            });
            $.each(data.tanSuo, function (i,val) {
                var $li = $(template("tanSuoTemp",val));
                var className = "list"+(i+1);
                $li.addClass(className);
                $li.appendTo(".three .cate_list");
            });
            $.each(data.kuPin, function (i,val) {
                var $li = $(template("kuPinTemp",val));
                var className = "list"+(i+1);
                $li.addClass(className);
                $li.appendTo(".four .cate_list");
            });
            $.each(data.meiTi, function (i,val) {
                var $li = $(template("meiTiTemp",val));
                var className = "list"+(i+1);
                $li.addClass(className);
                $li.appendTo(".five .cate_list");
            });
            $.each(data.shiPin, function (i,val) {
                var $li = $(template("shiPinTemp",val));
                var className = "list"+(i+1);
                $li.addClass(className);
                $li.appendTo(".six .cate_list");
            });

            $(".hot_list li a").hover(function () {
                $(this).children("h3").css({
                    color: "#eb0127",
                    transition: "ease-in-out 0.5s"
                });
            },function () {
                $(this).children("h3").css({
                    color: "#333",
                    transition: "ease-in-out 0.5s"
                });
            });

            //        设置轮播图片
            var imgs = $(".swiper_slide");
            // console.log(imgs);

            //        t 保存setTimeOut 返回值
            var index = 0, imgCount = imgs.length, t;
            //        切换图片
            function toggleImg() {
                var $li = $(".swiper_container .swiper_wp article");
                $li.each(function (i, elem) {
                    var $item = $(".swiper_pagination_bullet");
                    if (i == index) {
                        $(elem).fadeIn("fast");
                        $item.eq(i).addClass("swiper_pagination_bullet_active");
                    } else {
                        $(elem).fadeOut("fast");
                        $item.eq(i).removeClass("swiper_pagination_bullet_active");
                    }
                });
            }

            //        轮播
            function scroll() {
                index += 1;
                if (index == imgCount) index = 0;
                toggleImg();
                t = setTimeout(scroll, 3000);
            }


            t = setTimeout(scroll, 3000);

            var $btn = $(".swiper_btn_prev, .swiper_btn_next").on({
                "click": function () {
                    clearTimeout(t);
                    if ($(this).hasClass("swiper_btn_prev")) {
                        index -= 1;
                        if (index < 0) index = imgCount - 1;
                        console.log(index);
                    } else {
                        index += 1;
                        if (index == imgCount) index = 0;
                        console.log(index);
                    }
                    toggleImg();
                    t = setTimeout(scroll, 3000);
                }
            });

            //    动态绑定
            // $(".swiper_pagination").on({
            //     "mouseenter": function () {
            //         clearTimeout(t);
            //         index = $(this).index();
            //         toggleImg();
            //     },
            //     "mouseleave": function () {
            //         t = setTimeout(scroll, 3000);
            //     }
            // }, ".swiper_pagination_bullet");
            $(".swiper_pagination_bullet").click(function () {
                clearTimeout(t);
                index = $(this).index();
                toggleImg();
            });

            $(".swiper_container").on({
                "mouseenter": function () {
                    $btn.css("opacity", "1");
                    $(".swiper_btn_next").css("right",10);
                    $(".swiper_btn_prev").css("left",10);
                },
                "mouseleave": function () {
                    $btn.css("opacity", "0");
                    $(".swiper_btn_next").css("right",32);
                    $(".swiper_btn_prev").css("left",32);
                }
            })
        }
    });

    $.ajax({
        url: "json/index-ZCSY.json",
        success: function (data) {
            // console.log(data);
            $.each(data, function (i,val) {
                var $li = $(template("testTemp",val));
                $li.appendTo(".test_list .layout_ul");
            })
        }
    });

    $.ajax({
        url: "json/index-HWSP.json",
        success: function (data) {
            // console.log(data);
            $.each(data, function (i,val) {
                $(template("videoTemp",val)).appendTo(".videotop_list .layout_ul");
            })
        }
    })
});
