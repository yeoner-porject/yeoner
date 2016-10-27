/**
 * Created by lujiaolan on 16/10/21.
 */
$(function () {
    $.ajax({
        url: "json/content.json",
        success: function (data) {
            // console.log(data);
            $.each(data.news, function (i,val) {
                var $newsDiv = $(template("newsTemp",val));
                $newsDiv.appendTo(".news ul");
            });
            $.each(data.slide, function (i,val) {
                var $slideDiv = $(template("swiperTemp",val));
                $slideDiv.appendTo(".swiper_wp");
            });
            $.each(data.hot, function (i,val) {
                var $hotDiv = $(template("hotTemp",val));
                $hotDiv.appendTo(".hot_list ul");
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
            console.log(imgs)

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
                    if ($(this).attr("class") == "swiper_btn_prev") {
                        index -= 1;
                        if (index < 0) index = imgCount - 1;
                    } else {
                        index += 1;
                        if (index == imgCount) index = 0;
                    }
                    toggleImg();
                    t = setTimeout(scroll, 3000);
                }
            });

            //    动态绑定
            $(".swiper_pagination").on({
                "mouseenter": function () {
                    clearTimeout(t);
                    index = $(this).index();
                    toggleImg();
                },
                "mouseleave": function () {
                    t = setTimeout(scroll, 3000);
                }
            }, ".swiper_pagination_bullet");

            $(".swiper_container").on({
                "mouseenter": function () {
                    $btn.css("opacity", "1");
                },
                "mouseleave": function () {
                    $btn.css("opacity", "0");
                }
            })
        }
    })
});
