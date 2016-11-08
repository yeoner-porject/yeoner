/**
 * Created by tangminan on 16/11/6.
 */
/**
 * Created by lujiaolan on 16/10/21.
 */
$(function () {
    $(".ias_trigger").hide();
    var a = location.search.substring(1);
    var $crumbs_cate = $(".crumbs_cate.left");
    if (a == "meijing") {
        $crumbs_cate.find(".cat_item").hide();
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="tanSuo.html">户外探索</a>&nbsp;»&nbsp;<span class="current">美景</span></article>');
        $article.insertAfter($crumbs_cate);
        $(".current_item .sub_menu li:eq(0) a").css("color", "#eb0127");
    } else if (a == "quwen") {
        $crumbs_cate.find("li:eq(2)").addClass("current_cat").siblings().removeClass("current_cat");
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="tanSuo.html">户外探索</a>&nbsp;»&nbsp;<span class="current">趣闻</span></article>');
        $article.insertAfter($crumbs_cate);
        $(".current_item .sub_menu li:eq(1) a").css("color", "#eb0127");
    } else {
        $crumbs_cate.find("li:eq(0)").addClass("current_cat").siblings().removeClass("current_cat");
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

            function dataLoad() {
                if(a == "meijing"){
                    $.each(data.meijing, function (i, val) {
                        if (val.post_head_tag3 == "") {
                            $(template("postTemp01", val)).insertBefore(".ias_spinner");
                        } else {
                            $(template("postTemp", val)).insertBefore(".ias_spinner");
                        }
                    });
                    tagHref();
                }else if(a == "quwen"){
                    $.each(data.quwen, function (i, val) {
                        if (val.post_head_tag3 == "") {
                            $(template("postTemp01", val)).insertBefore(".ias_spinner");
                        } else {
                            $(template("postTemp", val)).insertBefore(".ias_spinner");
                        }
                    });
                    tagHref();
                }else {
                    $.each(data.left, function (i, val) {
                        if (val.post_head_tag3 == "") {
                            $(template("postTemp01", val)).insertBefore(".ias_spinner");
                        } else {
                            $(template("postTemp", val)).insertBefore(".ias_spinner");
                        }
                    });
                    tagHref();
                }
            }

            dataLoad();

            data_load_more = false;
            $(window).scroll(function () {
                // 滚动条到顶部的垂直高度
                var documentTop = $(document).scrollTop();
                // console.log(documentTop);
                // 浏览器的高度
                // var windowHeight = $(window).height();
                // 页面的文档高度
                // var documentHeight = $(document).height();
                if (!data_load_more) {
                    //当 documentTop >= (documentHeight-windowHeight) 说明滚动条已经滚动到底部了
                    if (documentTop >= 4300) {
                        dataLoad();
                        data_load_more = true;
                        $(".ias_spinner").hide();
                        $(".ias_trigger").show();
                    }
                }
            });

            $(window).scroll(function () {
                // 滚动条到顶部的垂直高度
                var documentTop = $(document).scrollTop();
                if (documentTop < 4860) {
                    $(".move").css({
                        position: "static",
                        top: 4825,
                        width: 300
                    })
                }
                if (documentTop >= 4860 && documentTop < 5800) {
                    $(".move").css({
                        position: "fixed",
                        top: 36,
                        width: 300,
                        transition: "none"
                    })
                }
                if (documentTop >= 5800) {
                    var $topVal = 5850 - documentTop;
                    // console.log($topVal);
                    $(".move").css({
                        "top": $topVal
                    });
                    // console.log(documentTop);
                }

            });

            // 点击加载更多
            $(".ias_trigger").on("click", function (e) {
                dataLoad();
                // 滚动条到顶部的垂直高度,被卷上去的高度
                var currentTop = $(document).scrollTop() + 1225;
                console.log(currentTop);
                $(window).scroll(function () {
                    var documentTop = $(document).scrollTop();
                    $(".move").css({
                        position: "fixed",
                        top: 36
                    });
                    if (documentTop < 4860) {
                        $(".move").css({
                            position: "static",
                            top: 4825,
                            width: 300
                        })
                    }else if (documentTop >= currentTop) {
                        var $topVal = (currentTop + 50) - documentTop;
                        $(".move").css({
                            "top": $topVal
                        });
                    }
                });
                e.stopPropagation();
            });

            $.each(data.author, function (i, val) {
                $(template("authorLiTemp", val)).appendTo(".widget_salong_author .widget_img");
            });
            $.each(data.article, function (i, val) {
                $(template("newsLiTemp", val)).appendTo(".widget_salong_new .widget_img");
                if (i < 6) {
                    $(template("newsLiTemp", val)).appendTo(".widget_salong_new01 .widget_img");
                }
            });
            $.each(data.random_article, function (i, val) {
                $(template("randomLiTemp", val)).appendTo(".widget_salong_random .widget_img");
                if (i < 6) {
                    $(template("randomLiTemp", val)).appendTo(".widget_salong_random01 .widget_img");
                }
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
