$.ajax({
    url: "footer.html",
    type: 'GET',
    success: function(data) {        
      $("footer").html(data)
    }
});