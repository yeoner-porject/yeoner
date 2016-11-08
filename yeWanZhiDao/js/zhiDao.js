
//点击其他地方隐藏div jQuery方法
$(document).bind('click',function(e){
    var target = $(e.target);
    if(target.closest(".form-control").length == 0){
        $(".aw-dropdown").css('display','none')
    }else{
        $(".aw-dropdown").css('display','block')
    }
});

//点击其他地方隐藏div js方法
// window.onload = function () {
//     var form = document.getElementById("aw-search-query");
//     var aw = document.getElementById("aw-dropdown");
//     form.onclick = function () {
//         if(aw.style.display == "none"){   //点第二次才能触发
//             aw.style.display = "block";
//         }else {
//             aw.style.display = "none"
//         }
//     };
//
//
//     $(document).bind('click',function(e){
//         var e = e || window.event; //浏览器兼容性
//         var elem = e.target || e.srcElement;
//         while (elem) { //循环判断至跟节点，防止点击的是div子元素
//             if (elem.id && elem.id == 'aw-search-query') {
//                 return;
//             }else{
//                 while (elem) { //循环判断至跟节点，防止点击的是div子元素
//                     if (elem.id && elem.id=='aw-search-query') {
//                         return;
//                     }
//                     elem = elem.parentNode;
//                 }
//                 $('#aw-dropdown').css('display','none'); //点击的不是div或其子元素
//             }
//         }
//     });
// }


// 发现
$(function () {
    $(".navbar-toggle").on("click",function () {
        $(".collapse").toggle()
    })
    // 全部
    $.ajax({
        url: "json/content.json",
        dataType:'json',
        method:'get',
        success: function(data) {
            $.each(data.quanBu, function(i, value) {
                $(template('quanBu-aw-item', value)).appendTo("#list1 .aw-common-list");
            });
        }
    })
    // 知识
    $.ajax({
        url: "../json/content.json",
        dataType:'json',
        method:'get',
        success: function(data) {
            $.each(data.zhiShi, function(i, value) {
                $(template('zhiShi-aw-item', value)).appendTo("#list1 .aw-common-list");
            });
        }
    })
    // 装备
    $.ajax({
        url: "../json/content.json",
        dataType:'json',
        method:'get',
        success: function(data) {
            $.each(data.zhuangBei, function(i, value) {
                $(template('zhuangBei-aw-item', value)).appendTo("#list1 .aw-common-list");
            });
        }
    })
    // 线路
    $.ajax({
        url: "../json/content.json",
        dataType:'json',
        method:'get',
        success: function(data) {
            $.each(data.xianLu, function(i, value) {
                $(template('xianLu-aw-item', value)).appendTo("#list1 .aw-common-list");
            });
        }
    })
    // 安全
    $.ajax({
        url: "../json/content.json",
        dataType:'json',
        method:'get',
        success: function(data) {
            $.each(data.anQuan, function(i, value) {
                $(template('anQuan-aw-item', value)).appendTo("#list1 .aw-common-list");
            });
        }
    })
    // 运动
    $.ajax({
        url: "../json/content.json",
        dataType:'json',
        method:'get',
        success: function(data) {
            $.each(data.yunDong, function(i, value) {
                $(template('yunDong-aw-item', value)).appendTo("#list1 .aw-common-list");
            });
        }
    })
    
    
    // 推荐
    $('.tuiJian').click(function () {
        $(".aw-mod.aw-explore-list").css('display','none');
        $(".aw-tabs").css('display','none');
        $(this).parents('li').addClass('active').siblings().removeClass('active')
    })
    // 热门
    $('.reMen').click(function () {
        $(".aw-mod.aw-explore-list").css('display','none');
        $(".aw-tabs").css('display','block');
        $(this).parents('li').addClass('active').siblings().removeClass('active');
    })
    $(".aw-tabs li").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
    // 回复
    $('.huiFu').click(function () {
        $("#list1").css('display','none');
        $("#list2").css('display','block');
        $(".aw-tabs").css('display','none');
        $(this).parents('li').addClass('active').siblings().removeClass('active');

    })


});











































