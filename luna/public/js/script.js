$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height()/10;
    $('#title, #nav').css({
        'opacity': 1
    });
});

function getRandomColor() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 0.1 + ')';
}



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
