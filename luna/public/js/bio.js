$(window).resize(function () {
  var width = 200/$(window).width();
  $('#myBio').css({
      'background': 'rgba(255,255,255,' + width + ')'
  });
});

$(document).ready(function () {
  var width = 200/$(window).width();
  $('#myBio').css({
      'background': 'rgba(255,255,255,' + width + ')'
  });
});
