/**
 * Created by lujiaolan on 16/10/21.
 */
$(function () {
    var a = location.search.substring(1);
    var $crumbs_cate = $(".crumbs_cate.left");
    if (a == "zixun") {
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="zhuangBei.html">户外装备</a>&nbsp;»&nbsp;<span class="current">资讯</span></article>');
        $article.insertAfter($crumbs_cate);
        $crumbs_cate.find("li:eq(2)").addClass("current_cat").siblings().removeClass("current_cat");
        $(".current_item .sub_menu li:eq(0) a").css("color", "#eb0127");
    } else if (a == "kupin") {
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="zhuangBei.html">户外装备</a>&nbsp;»&nbsp;<span class="current">酷品</span></article>');
        $article.insertAfter($crumbs_cate);
        $crumbs_cate.find("li:eq(1)").addClass("current_cat").siblings().removeClass("current_cat");
        $(".current_item .sub_menu li:eq(1) a").css("color", "#eb0127");
    } else if (a == "ceping") {
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="zhuangBei.html">户外装备</a>&nbsp;»&nbsp;<span class="current">测评</span></article>');
        $article.insertAfter($crumbs_cate);
        $crumbs_cate.find("li:eq(3)").addClass("current_cat").siblings().removeClass("current_cat");
        $(".current_item .sub_menu li:eq(2) a").css("color", "#eb0127");
    }
    else {
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<span class="current">户外装备</span></article>');
        $article.insertAfter($crumbs_cate);
    }

    $.ajax({
        url: "json/content.json",
        success: function (data) {
            if(a == "zixun"){
                $.each(data.zixun, function (i, val) {
                    $(template("postTemp", val)).appendTo(".content_wrap");
                });
            }else if(a == "kupin"){
                $.each(data.kupin, function (i, val) {
                    $(template("postTemp", val)).appendTo(".content_wrap");
                });
            }else  if(a == "ceping"){
                $.each(data.ceping, function (i, val) {
                    $(template("postTemp", val)).appendTo(".content_wrap");
                });
            }else {
                $.each(data.left, function (i, val) {
                    $(template("postTemp", val)).appendTo(".content_wrap");
                });
            }
            $.each(data.author, function (i, val) {
                $(template("authorLiTemp", val)).appendTo(".widget_salong_author .widget_img");
            });
            $.each(data.article, function (i, val) {
                $(template("newsLiTemp", val)).appendTo(".widget_salong_new .widget_img");
            });
            $.each(data.random_article, function (i, val) {
                $(template("randomLiTemp", val)).appendTo(".widget_salong_random .widget_img");
            });
            $.each(data.pinglun, function (i, val) {
                $(template("commentsLiTemp", val)).appendTo(".widget_sl_comments .widget_img")
            });
            $.each(data.shipin, function (i, val) {
                $(template("videoLiTemp", val)).appendTo(".widget_salong_hotpostvideo .widget_img")
            });
        }
    });
});
