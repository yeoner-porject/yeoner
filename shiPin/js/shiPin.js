/**
 * Created by lujiaolan on 16/11/8.
 */
$(function () {
   $.ajax({
       url: "json/content.json",
       success: function (data) {
           // console.log(data);
           $.each(data.shenrenzhi, function (i, val) {
               // console.log(val);
               $(template("vedioTemp",val)).appendTo(".video_cat:eq(0) .swiper_wrapper");
           });
           $.each(data.jixian, function (i, val) {
               $(template("vedioTemp",val)).appendTo(".video_cat:eq(1) .swiper_wrapper");
           });
           $.each(data.zhuangbei, function (i, val) {
               $(template("vedioTemp",val)).appendTo(".video_cat:eq(2) .swiper_wrapper");
           });
           $.each(data.quwei, function (i, val) {
               $(template("vedioTemp",val)).appendTo(".video_cat:eq(3) .swiper_wrapper");
           })
       }
   })
});
