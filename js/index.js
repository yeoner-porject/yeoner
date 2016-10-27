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

            var $swiperList = $(".swiper_slide");
            console.log($swiperList);
        }
    })
});
