/**
 * Created by lujiaolan on 16/10/25.
 */
$(function () {
    // 回到顶部按钮
    var $toTop = $("#toTop .top_btn");
    var isTopBtnShow = false;
    window.onscroll = function () {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(t);
        if(t >= 300 && !isTopBtnShow) {
            $toTop.css("display","block");
            isTopBtnShow = true;
        }else if(t < 300 && isTopBtnShow){
            $toTop.hide();
            isTopBtnShow = false;
        }
    };

    $toTop.click(function () {
        $("html,body").animate({scrollTop:0},500);
        return false;
    });
});