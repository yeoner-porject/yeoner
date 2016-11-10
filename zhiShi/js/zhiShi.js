/**
 * Created by lujiaolan on 16/10/21.
 */
/**
 * Created by lujiaolan on 16/10/21.
 */
$(function () {
    $(".ias_trigger").hide();
    var a = location.search.substring(1);
    var $crumbs_cate = $(".crumbs_cate.left");
    if (a == "tubu") {
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="zhiShi.html">户外知识</a>&nbsp;»&nbsp;<span class="current">徒步/露营</span></article>');
        $article.insertAfter($crumbs_cate);
        $crumbs_cate.find(".cat_item").hide();
        $(".current_item .sub_menu li:eq(0) a").css("color", "#eb0127");
        document.title = "徒步/露营 | 野玩儿";
    } else if (a == "paobu") {
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="zhiShi.html">户外知识</a>&nbsp;»&nbsp;<span class="current">跑步/健身</span></article>');
        $article.insertAfter($crumbs_cate);
        $crumbs_cate.find(".cat_item").hide();
        $(".current_item .sub_menu li:eq(1) a").css("color", "#eb0127");
        document.title = "跑步/健身 | 野玩儿";
    } else if (a == "qixing") {
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="zhiShi.html">户外知识</a>&nbsp;»&nbsp;<span class="current">骑行</span></article>');
        $article.insertAfter($crumbs_cate);
        $crumbs_cate.find(".cat_item").hide();
        $(".current_item .sub_menu li:eq(2) a").css("color", "#eb0127");
        document.title = "骑行 | 野玩儿";
    }
    else if (a == "huaxue") {
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="zhiShi.html">户外知识</a>&nbsp;»&nbsp;<span class="current">滑雪</span></article>');
        $article.insertAfter($crumbs_cate);
        $(".current_item .sub_menu li:eq(3) a").css("color", "#eb0127");
        document.title = "滑雪 | 野玩儿";
    }
    else if (a == "anquan") {
        console.log(a);
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="zhiShi.html">户外知识</a>&nbsp;»&nbsp;<span class="current">户外安全</span></article>');
        $article.insertAfter($crumbs_cate);
        $crumbs_cate.find(".cat_item").hide();
        $(".current_item .sub_menu li:eq(4) a").css("color", "#eb0127");
        document.title = "安全 | 野玩儿";
    }
    else if (a == "zhangzhishi") {
        console.log(a);
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<a href="zhiShi.html">户外知识</a>&nbsp;»&nbsp;<span class="current">涨姿势</span></article>');
        $article.insertAfter($crumbs_cate);
        $crumbs_cate.find(".cat_item").hide();
        $(".current_item").removeClass("current_item");
        document.title = "涨姿势 | 野玩儿";
    }
    else {
        // console.log(a);
        var $article = $('<article class="crumbs right"><a href="../index.html">首页</a>&nbsp;»&nbsp;<span class="current">户外知识</span></article>');
        $article.insertAfter($crumbs_cate);
        $crumbs_cate.find(".cat_item").hide();
    }

    $.ajax({
        url: "json/content.json",
        success: function (data) {
            function tagHref() {
                var postArr = $(".content_wrap .post");
                // console.log(postArr);
                $.each(postArr,function (i,val) {
                    // console.log($(val).find("a"));
                    var $a1 = $(val).find("a:eq(4)");
                    var $a2 = $(val).find("a:eq(5)");
                    if($a1.text() == "跑步/健身"){
                        $a1.attr("href","zhiShi.html?paobu");
                    }
                    if($a2.text() == "跑步/健身"){
                        $a2.attr("href","zhiShi.html?paobu");
                    }
                    if($a1.text() == "涨姿势"){
                        $a1.attr("href","zhiShi.html?zhangzhishi");
                    }
                    if($a2.text() == "涨姿势"){
                        $a2.attr("href","zhiShi.html?zhangzhishi");
                    }
                    if($a1.text() == "骑行"){
                        $a1.attr("href","zhiShi.html?qixing");
                    }
                    if($a2.text() == "骑行"){
                        $a2.attr("href","zhiShi.html?qixing");
                    }
                    if($a1.text() == "徒步/露营"){
                        $a1.attr("href","zhiShi.html?tubu");
                    }
                    if($a2.text() == "徒步/露营"){
                        $a2.attr("href","zhiShi.html?tubu");
                    }
                    if($a1.text() == "滑雪"){
                        $a1.attr("href","zhiShi.html?huaxue");
                    }
                    if($a2.text() == "滑雪"){
                        $a2.attr("href","zhiShi.html?huaxue");
                    }
                    if($a1.text() == "户外安全"){
                        $a1.attr("href","zhiShi.html?anquan");
                    }
                    if($a2.text() == "户外安全"){
                        $a2.attr("href","zhiShi.html?anquan");
                    }
                    if($a1.text() == "户外知识"){
                        $a1.attr("href","zhiShi.html");
                    }
                    if($a2.text() == "户外知识"){
                        $a2.attr("href","zhiShi.html");
                    }
                });
            }

            function dataLoad() {
                if(a == "tubu"){
                    $.each(data.tubu, function (i, val) {
                        if (val.post_head_tag3 == "") {
                            $(template("postTemp01", val)).insertBefore(".ias_spinner");
                        } else {
                            $(template("postTemp", val)).insertBefore(".ias_spinner");
                        }
                    });
                    tagHref();
                }else if(a == "paobu"){
                    $.each(data.paobu, function (i, val) {
                        if (val.post_head_tag3 == "") {
                            $(template("postTemp01", val)).insertBefore(".ias_spinner");
                        } else {
                            $(template("postTemp", val)).insertBefore(".ias_spinner");
                        }
                    });
                    tagHref();
                }else  if(a == "qixing"){
                    $.each(data.qixing, function (i, val) {
                        if (val.post_head_tag3 == "") {
                            $(template("postTemp01", val)).insertBefore(".ias_spinner");
                        } else {
                            $(template("postTemp", val)).insertBefore(".ias_spinner");
                        }
                    });
                    tagHref();
                }else  if(a == "huaxue"){
                    $.each(data.huaxue, function (i, val) {
                        if (val.post_head_tag3 == "") {
                            $(template("postTemp01", val)).insertBefore(".ias_spinner");
                        } else {
                            $(template("postTemp", val)).insertBefore(".ias_spinner");
                        }
                    });
                    tagHref();
                }else  if(a == "anquan"){
                    $.each(data.anquan, function (i, val) {
                        if (val.post_head_tag3 == "") {
                            $(template("postTemp01", val)).insertBefore(".ias_spinner");
                        } else {
                            $(template("postTemp", val)).insertBefore(".ias_spinner");
                        }
                    });
                    tagHref();
                }else  if(a == "zhangzhishi"){
                    $.each(data.zhangzhishi, function (i, val) {
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
