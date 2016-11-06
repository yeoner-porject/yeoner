/**
 * Created by tangminan on 16/11/6.
 */
/**
 * Created by lujiaolan on 16/10/21.
 */
$(function () {
    var a = location.search.substring(1);
    var $crumbs_cate = $(".crumbs_cate.left");
    if (a == "meijing") {
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="tanSuo.html">户外探索</a>&nbsp;»&nbsp;<span class="current">美景</span></article>');
        $article.insertAfter($crumbs_cate);
        $(".current_item .sub_menu li:eq(0) a").css("color", "#eb0127");
    } else if (a == "quwen") {
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="tanSuo.html">户外探索</a>&nbsp;»&nbsp;<span class="current">趣闻</span></article>');
        $article.insertAfter($crumbs_cate);
        $(".current_item .sub_menu li:eq(1) a").css("color", "#eb0127");
    } else {
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<span class="current">户外探索</span></article>');
        $article.insertAfter($crumbs_cate);
    }

    $.ajax({
        url: "json/content.json",
        success: function (data) {
            function tagHref() {
                var postArr = $(".content_wrap .post");
                // console.log(postArr);
                $.each(postArr,function (i,val) {
                    console.log($(val).find("a"));
                    var $a1 = $(val).find("a:eq(4)");
                    var $a2 = $(val).find("a:eq(5)");
                    if($a1.text() == "美景"){
                        $a1.attr("href","tanSuo.html?meijing");
                    }
                    if($a2.text() == "美景"){
                        $a2.attr("href","tanSuo.html?meijing");
                    }
                    if($a1.text() == "趣闻"){
                        $a1.attr("href","tanSuo.html?quwen");
                    }
                    if($a2.text() == "趣闻"){
                        $a2.attr("href","tanSuo.html?quwen");
                    }
                    if($a1.text() == "户外探索"){
                        $a1.attr("href","tanSuo.html");
                    }
                    if($a2.text() == "户外探索"){
                        $a2.attr("href","tanSuo.html");
                    }
                })
            }
            if(a == "meijing"){
                $.each(data.meijing, function (i, val) {
                    if(val.post_head_tag3 == ""){
                        $(template("postTemp01", val)).appendTo(".content_wrap");
                    }else {
                        $(template("postTemp", val)).appendTo(".content_wrap");
                    }
                });
                tagHref();
            }else if(a == "quwen"){
                $.each(data.quwen, function (i, val) {
                    if(val.post_head_tag3 == ""){
                        $(template("postTemp01", val)).appendTo(".content_wrap");
                    }else {
                        $(template("postTemp", val)).appendTo(".content_wrap");
                    }
                });
                tagHref();
            }else {
                $.each(data.left, function (i, val) {
                    if(val.post_head_tag3 == ""){
                        $(template("postTemp01", val)).appendTo(".content_wrap");
                    }else {
                        $(template("postTemp", val)).appendTo(".content_wrap");
                    }
                });
                tagHref();
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
