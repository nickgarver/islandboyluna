$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height()/10;

    $('#tNav, #title, #nav').css({
        'opacity': ((height - scrollTop) / height)
    });
});

var aniSpeed = 200;
$(document).ready(function() {
  $("#current").click(function(event){
    if ($("#myLinks").is( ":hidden" ) ) {
      $("#myLinks").slideDown(aniSpeed);
    } else {
      $("#myLinks").hide();
    }
  });
});
