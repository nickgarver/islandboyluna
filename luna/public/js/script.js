var aniSpeed = 200;
$(document).ready(function() {
  $('#list').load('tracks.html');
  $('#tracks').hide();

  $("#projects").click(function(event){
    $('#list').load('projects.html');
    $('#current').html("<i class='fas fa-angle-down'></i> PROJECTS.");
    $('#projects').hide(aniSpeed);
    $('#credits').show(aniSpeed);
    $('#tracks').show(aniSpeed);
    $('#myLinks').hide();
  });
  $("#credits").click(function(event){
    $('#list').load('credits.html');
    $('#current').html("<i class='fas fa-angle-down'></i> CREDITS.");
    $('#projects').show(aniSpeed);
    $('#credits').hide(aniSpeed);
    $('#tracks').show(aniSpeed);
    $('#myLinks').hide();
  });
  $("#tracks").click(function(event){
    $('#list').load('tracks.html');
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

// var mySongs = {
//   "songs": [
//     {
//       id: 1,
//       image: 'strollin',
//       name: 'nowhere',
//       spotify: 'https://open.spotify.com/track/7wnOwCM7fMewkIuKmgkkJm?si=PyYkD-SeQ0ernzVLpn1lTQ',
//       soundcloud: 'https://soundcloud.com/luna/strollinthu'
//     }
//   ]
// }
// function displayTrack() {
//   var template =$('#template').html();
//   var output = Mustache.render(template, mySongs);
//     $('char-info').html(output);
// }
