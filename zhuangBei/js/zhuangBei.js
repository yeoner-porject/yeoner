/**
 * Created by lujiaolan on 16/10/21.
 */
$(function () {
   $.ajax({
       url: "json/content.json",
       success: function (data) {
           $.each(data.left, function (i,val) {
               $(template("postTemp",val)).appendTo(".content_wrap");
           });
           $.each(data.author, function (i,val) {
               $(template("authorLiTemp",val)).appendTo(".widget_salong_author .widget_img");
           });
           $.each(data.article, function (i,val) {
               $(template("newsLiTemp",val)).appendTo(".widget_salong_new .widget_img");
           });
           $.each(data.random_article, function (i,val) {
               $(template("randomLiTemp",val)).appendTo(".widget_salong_random .widget_img");
           });
           $.each(data.pinglun, function (i,val) {
               $(template("commentsLiTemp",val)).appendTo(".widget_sl_comments .widget_img")
           });
           $.each(data.shipin, function (i,val) {
               $(template("videoLiTemp",val)).appendTo(".widget_salong_hotpostvideo .widget_img")
           });
       }
   })
});
