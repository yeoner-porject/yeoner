/**
 * Created by lujiaolan on 16/10/21.
 */
$(function () {
    $(".ias_trigger").hide();
    var a = location.search.substring(1);
    var $crumbs_cate = $(".crumbs_cate.left");
    if (a == "zixun") {
        $crumbs_cate.find(".cat_item").hide();
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="zhuangBei.html">户外装备</a>&nbsp;»&nbsp;<span class="current">资讯</span></article>');
        $article.insertAfter($crumbs_cate);
        $(".current_item .sub_menu li:eq(0) a").css("color", "#eb0127");
        document.title = "资讯 | 野玩儿";
    } else if (a == "kupin") {
        $crumbs_cate.find("li:eq(1)").addClass("current_cat").siblings().removeClass("current_cat");
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="zhuangBei.html">户外装备</a>&nbsp;»&nbsp;<span class="current">酷品</span></article>');
        $article.insertAfter($crumbs_cate);
        $(".current_item .sub_menu li:eq(1) a").css("color", "#eb0127");
        document.title = "酷品 | 野玩儿";
    } else if (a == "ceping") {
        $crumbs_cate.find("li:eq(3)").addClass("current_cat").siblings().removeClass("current_cat");
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="zhuangBei.html">户外装备</a>&nbsp;»&nbsp;<span class="current">测评</span></article>');
        $article.insertAfter($crumbs_cate);
        $(".current_item .sub_menu li:eq(2) a").css("color", "#eb0127");
        document.title = "测试 | 野玩儿";
    }
    else {
        $crumbs_cate.find("li:eq(0)").addClass("current_cat").siblings().removeClass("current_cat");
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<span class="current">户外装备</span></article>');
        $article.insertAfter($crumbs_cate);
    }

    $.ajax({
        url: "json/content.json",
        success: function (data) {
            // 根据不同的tag赋值不同的链接地址的函数
            function tagHref() {
                var postArr = $(".content_wrap .post");
                // console.log(postArr);
                $.each(postArr, function (i, val) {
                    // console.log($(val).find("a:eq(4)").text());
                    var $a1 = $(val).find("a:eq(4)");
                    var $a2 = $(val).find("a:eq(5)");
                    if ($a1.text() == "资讯") {
                        $a1.attr("href", "zhuangBei.html?zixun");
                    }
                    if ($a2.text() == "资讯") {
                        $a2.attr("href", "zhuangBei.html?zixun");
                    }
                    if ($a1.text() == "酷品") {
                        $a1.attr("href", "zhuangBei.html?kupin");
                    }
                    if ($a2.text() == "酷品") {
                        $a2.attr("href", "zhuangBei.html?kupin");
                    }
                    if ($a1.text() == "测评") {
                        $a1.attr("href", "zhuangBei.html?ceping");
                    }
                    if ($a2.text() == "测评") {
                        $a2.attr("href", "zhuangBei.html?ceping");
                    }
                    if ($a1.text() == "户外装备") {
                        $a1.attr("href", "zhuangBei.html");
                    }
                    if ($a2.text() == "户外装备") {
                        $a2.attr("href", "zhuangBei.html");
                    }
                })
            }

            // 主要内容数据加载函数
            function dataLoad() {
                if (a == "zixun") {
                    $.each(data.zixun, function (i, val) {
                        // console.log(val.post_head_tag3);
                        if (val.post_head_tag3 == "") {
                            $(template("postTemp01", val)).insertBefore(".ias_spinner");
                        } else {
                            $(template("postTemp", val)).insertBefore(".ias_spinner");
                        }
                    });
                    tagHref();
                } else if (a == "kupin") {
                    $.each(data.kupin, function (i, val) {
                        if (val.post_head_tag3 == "") {
                            $(template("postTemp01", val)).insertBefore(".ias_spinner");
                        } else {
                            $(template("postTemp", val)).insertBefore(".ias_spinner");
                        }
                    });
                    tagHref();
                } else if (a == "ceping") {
                    $.each(data.ceping, function (i, val) {
                        if (val.post_head_tag3 == "") {
                            $(template("postTemp01", val)).insertBefore(".ias_spinner");
                        } else {
                            $(template("postTemp", val)).insertBefore(".ias_spinner");
                        }
                    });
                    tagHref();
                } else {
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

            // 左边主要内容第一次加载数据
            dataLoad();

            // 左边主要内容的第二次自动加载
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

            // 侧边栏各项数据加载
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
