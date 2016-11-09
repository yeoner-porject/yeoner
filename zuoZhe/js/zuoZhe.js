
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
                console.log($tag.text())
                if($tag.text() == ""){
                    // $tag.css("display","none");
                    console.log($tag);
                }
                // else {
                //     $(val).find(".test_count span").css({
                //         border: "1px #d11f3c solid",
                //         color: "#d11f3c"
                //     });
                //     $tag.css("color","#d11f3c")
                // }
            })
        }
    })
});


$(function () {
    $.ajax({
        url:'../json/content.json',
        dataType:'json',
        method:'get',
        success: function (data) {
            $.each(data.shenRen,function (i, value) {
                $(template('shenRen',value)).appendTo(".user_content ul");
            })
        }
    })
});





























