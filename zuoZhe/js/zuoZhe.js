
// 作者
$(function () {
    $.ajax({
        url:'json/content.json',
        dataType:'json',
        method:'get',
        success: function (data) {
            $.each(data.zuoZhe,function (i, value) {
                $(template('zuoZhe',value)).appendTo(".user_content ul");
            });
            var $new = $(".user_content li > .user_main");
            $.each($new,function (i, val) {
                var $tag = $(val).find(".author_new");
                // console.log($tag.text())
                // .trim() 去掉字符串两边的空格
                if($tag.text().trim() == ""){
                    $tag.css("display","none");
                    // console.log($tag);
                }
            })
        }
    })
});

// 野玩儿神人
$(function () {
    $.ajax({
        url:'../json/content.json',
        dataType:'json',
        method:'get',
        success: function (data) {
            $.each(data.shenRen,function (i, value) {
                $(template('shenRen',value)).appendTo(".user_content ul");
            });
            var $new = $(".user_content li > .user_main");
            $.each($new,function (i, val) {
                var $tag = $(val).find(".author_new");
                // console.log($tag.text())
                // .trim() 去掉字符串两边的空格
                if($tag.text().trim() == ""){
                    $tag.css("display","none");
                    // console.log($tag);
                }
            })
        }
    })
});

// 品牌商家
$(function () {
    $.ajax({
        url:'../json/content.json',
        dataType:'json',
        method:'get',
        success: function (data) {
            $.each(data.pinPai,function (i, value) {
                $(template('pinPai',value)).appendTo(".user_content ul");
            });
            var $new = $(".user_content li > .user_main");
            $.each($new,function (i, val) {
                var $tag = $(val).find(".author_new");
                // console.log($tag.text())
                // .trim() 去掉字符串两边的空格
                if($tag.text().trim() == ""){
                    $tag.css("display","none");
                    // console.log($tag);
                }
            })
        }
    })
});

// 户外媒体
$(function () {
    $.ajax({
        url:'../json/content.json',
        dataType:'json',
        method:'get',
        success: function (data) {

            $.each(data.meiTi,function (i, value) {
                $(template('meiTi',value)).appendTo(".user_content ul");
            });
            var $new = $(".user_content li > .user_main");
            $.each($new,function (i, val) {
                var $tag = $(val).find(".author_new");
                // console.log($tag.text())
                // .trim() 去掉字符串两边的空格
                if($tag.text().trim() == ""){
                    $tag.css("display","none");
                    // console.log($tag);
                }
            })
        }
    })
});



























