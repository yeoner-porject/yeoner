/**
 * Created by lujiaolan on 16/10/21.
 */
$(function () {
    // 点击图片显示二维码
    $(".weixin").on("click" ,function (e) {
        $(this).children("img").addClass("active");
        $(".bg").addClass("active");
        $(document).on("click", function () {
            $(".weixin").children("img").removeClass("active");
            $(".bg").removeClass("active");
        });
        e.stopPropagation();
    });

    $(".app").on("click" ,function (e) {
        $(this).children("img").addClass("active");
        $(".bg").addClass("active");
        $(document).on("click", function () {
            $(".app").children("img").removeClass("active");
            $(".bg").removeClass("active");
        });
        e.stopPropagation();
    });
});