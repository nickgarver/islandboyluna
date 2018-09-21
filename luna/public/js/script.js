$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height()/10;
    console.log('DO NOTHING');
    $('#title, #nav').css({
        'opacity': 1
    });
});

var aniSpeed = 200;
$(document).ready(function() {
  $('#list').load('discog-tracks.html');
  $('#tracks').hide();

  $("#projects").click(function(event){
    $('#list').load('discog-projects.html');
    $('#current').html("<i class='fas fa-angle-down'></i> PROJECTS.");
    $('#projects').hide(aniSpeed);
    $('#credits').show(aniSpeed);
    $('#tracks').show(aniSpeed);
    $('#myLinks').hide();
  });
  $("#credits").click(function(event){
    $('#list').load('discog-credits.html');
    $('#current').html("<i class='fas fa-angle-down'></i> CREDITS.");
    $('#projects').show(aniSpeed);
    $('#credits').hide(aniSpeed);
    $('#tracks').show(aniSpeed);
    $('#myLinks').hide();
  });
  $("#tracks").click(function(event){
    $('#list').load('discog-tracks.html');
    $('#current').html("<i class='fas fa-angle-down'></i> TRACKS.");
    $('#projects').show(aniSpeed);
    $('#credits').show(aniSpeed);
    $('#tracks').hide(aniSpeed);
    $('#myLinks').hide();
  });

  $("#current").click(function(event){
    if ($("#myLinks").is( ":hidden" ) ) {
      $("#myLinks").slideDown(aniSpeed);
    } else {
      $("#myLinks").hide();
    }
  });
});
