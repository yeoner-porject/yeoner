
//点击其他地方隐藏div
$(document).bind('click',function(e){
    var target = $(e.target);
    if(target.closest(".form-control").length == 0){
        $(".aw-dropdown").css('display','none')
    }else{
        $(".aw-dropdown").css('display','block')
    }
});

$(function () {
    $(".navbar-toggle").on("click",function () {
        $(".collapse").toggle()
    })
    
    $.ajax({
        url: "json/content.json",
        dataType:'json',
        method:'get',
        success: function(data) {
            $.each(data.quanBu, function(i, value) {
                $(template('aw-item', value)).appendTo(".aw-common-list");
            });
        },
        error: function() {
            alert("服务器错误");
        }
    })
});











































