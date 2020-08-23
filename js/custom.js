$.ajax({
    url: "footer.html",
    type: 'GET',
    success: function(data) {        
      $("footer").html(data)
    }
});
$(".chng_nav").click(function(){
 $(".chng_nav").removeClass("chng_nav_active");
 $(this).addClass("chng_nav_active");
 var url = $(this).data("url");
 $.ajax({
  url: url,
  type: 'GET',
  success: function(data) {        
    $(".crd").html(data)
  }
});
});
$(".nv_mn").click(function(){
  $(".nv_mn").removeClass("nv_mn_act");
  $(this).addClass("nv_mn_act");
  var url = $(this).data("url");
  $.ajax({
   url: url,
   type: 'GET',
   success: function(data) {        
     $(".res_bd").html(data)
   }
 });
 });