var app = angular.module('myApp', ['ngRoute']);

app.controller('MoodController', ['$scope', function($scope) {
  $scope.imgCount = 241;
  $scope.imgCount++;
  $scope.myImages = [];
  function chunkArray(myArray, chunk_size){
      var index = 0;
      var arrayLength = myArray.length;
      var tempArray = [];
      for (index = 0; index < arrayLength; index += chunk_size) {
          myChunk = myArray.slice(index, index+chunk_size);
          // Do something if you want with the group
          tempArray.push(myChunk);
      }
      return tempArray;
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  for (var i = 1; i < $scope.imgCount; i++) {
    $scope.myImages.push("media/mood/image-" + i + ".jpg");
  }
  shuffle($scope.myImages);
  var temp = chunkArray($scope.myImages, Math.round($scope.imgCount/4));
  $scope.myImages = temp[0];
  $scope.myImagesTwo = temp[1];
  $scope.myImagesThree = temp[2];
  $scope.myImagesFour = temp[3];
  $scope.getImagePath = function(imageName) {
  return imageName;
  };
}]);

app.controller('PressController', ['$scope', function($scope) {
  $scope.imgCount = 20;
  $scope.imgCount++
  $scope.myImages = [];
  function chunkArray(myArray, chunk_size){
      var index = 0;
      var arrayLength = myArray.length;
      var tempArray = [];
      for (index = 0; index < arrayLength; index += chunk_size) {
          myChunk = myArray.slice(index, index+chunk_size);
          // Do something if you want with the group
          tempArray.push(myChunk);
      }
      return tempArray;
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  for (var i = 1; i < $scope.imgCount; i++) {
    $scope.myImages.push("media/press/image-" + i + ".jpg");
  }
  shuffle($scope.myImages);
  var temp = chunkArray($scope.myImages, Math.round($scope.imgCount/4));
  $scope.myImages = temp[0];
  $scope.myImagesTwo = temp[1];
  $scope.myImagesThree = temp[2];
  $scope.myImagesFour = temp[3];
  $scope.getImagePath = function(imageName) {
  return imageName;
  };
}]);

app.config(function ($routeProvider,$locationProvider) {
  $locationProvider.hashPrefix('');
  // $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: 'home.html'
    })
    .when('/mood', {
      url: 'mood.html',
      templateUrl: 'mood.html',
      controller: 'MoodController'
    })
    .when('/press', {
      url: 'press.html',
      templateUrl: 'press.html',
      controller: 'PressController'
    })
    .when('/discog', {
      url: 'discog.html',
      templateUrl: 'discog.html'
    })
    .when('/bio', {
      url: 'bio.html',
      templateUrl: 'bio.html'
    })
    .when('/beenawhile', {
      templateUrl: 'song.html',
      controller: 'beenawhile'
    })
    .when('/helenkeller', {
      templateUrl: 'song-small.html',
      controller: 'helenkeller'
    })
    .when('/applestore', {
      templateUrl: 'song.html',
      controller: 'applestore'
    })
    .when('/coldcoffee', {
      templateUrl: 'song.html',
      controller: 'coldcoffee'
    })
    .when('/vanilla', {
      templateUrl: 'song.html',
      controller: 'vanilla'
    })
    .when('/toyou', {
      templateUrl: 'song.html',
      controller: 'toyou'
    })
    .when('/flyaway', {
      templateUrl: 'song.html',
      controller: 'flyaway'
    })
    .when('/slow', {
      templateUrl: 'song.html',
      controller: 'slow'
    })
    .when('/nowhere', {
      templateUrl: 'song-small.html',
      controller: 'nowhere'
    })
    .when('/highland', {
      templateUrl: 'song.html',
      controller: 'highland'
    })
    .when('/espresso', {
      templateUrl: 'song.html',
      controller: 'espresso'
    })
    .when('/blind', {
      templateUrl: 'song.html',
      controller: 'blind'
    })
    .when('/nicotine', {
      templateUrl: 'song.html',
      controller: 'nicotine'
    })
    .when('/sleepin', {
      templateUrl: 'song.html',
      controller: 'sleepin'
    })
    .when('/reload', {
      templateUrl: 'song.html',
      controller: 'reload'
    })
    .when('/back', {
      templateUrl: 'song.html',
      controller: 'back'
    })
    .when('/feelinlike', {
      templateUrl: 'song.html',
      controller: 'feelinlike'
    })
    .when('/butterfly', {
      templateUrl: 'song.html',
      controller: 'butterfly'
    })
    .when('/loveinthemorning', {
      templateUrl: 'song.html',
      controller: 'loveinthemorning'
    })
    .when('/alive', {
      templateUrl: 'song.html',
      controller: 'alive'
    })
    .when('/rewind', {
      templateUrl: 'song.html',
      controller: 'rewind'
    })
    .when('/ridin', {
      templateUrl: 'song.html',
      controller: 'ridin'
    })
    .when('/loversquarrel', {
      templateUrl: 'song.html',
      controller: 'loversquarrel'
    })
    .when('/atnight', {
      templateUrl: 'song.html',
      controller: 'atnight'
    })
    .when('/medy', {
      templateUrl: 'song.html',
      controller: 'medy'
    })
    .when('/itililt', {
      templateUrl: 'song.html',
      controller: 'itililt'
    })
    .when('/idontneedyou', {
      templateUrl: 'song.html',
      controller: 'idontneedyou'
    })
    .when('/strollin', {
      templateUrl: 'song.html',
      controller: 'strollin'
    })
    .when('/itsokaytobesad', {
      templateUrl: 'song-small.html',
      controller: 'itsokaytobesad'
    })
    .when('/litinaforest', {
      templateUrl: 'song-small.html',
      controller: 'litinaforest'
    })
    .when('/wakapella', {
      templateUrl: 'song-small.html',
      controller: 'wakapella'
    })
    .otherwise({
      redirectTo: '/'
    })
  }
);

app.controller('beenawhile',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'BEEN A WHILE'
    $scope.pic = '../media/art/beenawhile.jpg'
    $scope.spotify = 'https://open.spotify.com/track/5sIHlthdQhiRCYf4ddIw9x?si=f90gu35QR5KKQxJcGKe4qg'
    $scope.apple = 'https://itunes.apple.com/us/album/been-a-while-single/1435451906'
    $scope.soundcloud = 'https://soundcloud.com/luna/been-a-while'
    $scope.bandcamp = ''
    $scope.youtube = 'https://www.youtube.com/watch?v=N_AUsmbYs0w'
  }
);

app.controller('coldcoffee',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'COLD COFFEE'
    $scope.pic = '../media/art/coldcoffee.jpg'
    $scope.spotify = 'https://open.spotify.com/track/52zvGKn41xjxzTflXBa66i?si=LkQ4wNhnQsG5ow9SUyVQ2A'
    $scope.apple = 'https://itunes.apple.com/us/album/cold-coffee-single/1391432290'
    $scope.soundcloud = 'https://www.soundcloud/luna/cold-coffee'
    $scope.bandcamp = ''
    $scope.youtube = 'https://www.youtube.com/watch?v=TDghcvDi8rA'
  }
);

app.controller('applestore',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'APPLE STORE'
    $scope.pic = '../media/art/applestore.jpg'
    $scope.spotify = 'https://open.spotify.com/track/0AlMe8uF6mseLfXdSdN0sS?si=Fw635wY3T1eRMr8qTxYKpw'
    $scope.apple = 'https://itunes.apple.com/us/album/apple-store-single/1406595621'
    $scope.soundcloud = 'https://www.soundcloud/luna/apple-store'
    $scope.bandcamp = ''
    $scope.youtube = 'https://www.youtube.com/watch?v=6eBwWALlZsE'
  }
);

app.controller('vanilla',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'VANILLA'
    $scope.pic = '../media/art/vanilla.jpg'
    $scope.spotify = 'https://open.spotify.com/track/79qpfWYv5L1pOs11gnaEmL?si=qHOvgGhcTOq26bVYzu96kw'
    $scope.apple = 'https://itunes.apple.com/us/album/vanilla-single/1378801097'
    $scope.soundcloud = 'https://www.soundcloud/luna/vanilla'
    $scope.bandcamp = ''
    $scope.youtube = 'https://youtu.be/kaP5y-PKiM4'
  }
);

app.controller('toyou',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'TO YOU'
    $scope.pic = '../media/art/toyou.jpg'
    $scope.spotify = 'https://open.spotify.com/track/3CkXCgYGuBcYnG1RV4a3ve?si=YfNHg9QTSWq-KlayvsLC5Q'
    $scope.apple = 'https://itunes.apple.com/us/album/to-you-single/1378815752'
    $scope.soundcloud = 'https://www.soundcloud/luna/toyou'
    $scope.bandcamp = ''
    $scope.youtube = 'https://youtu.be/TBO7UkfdTOo'
  }
);

app.controller('flyaway',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'FLY AWAY'
    $scope.pic = '../media/art/flyaway.jpg'
    $scope.spotify = 'https://open.spotify.com/track/5JjCTaJQRxjSijK11UDEnQ?si=hatqiPODTJ2p_bfNM_8MRQ'
    $scope.apple = 'https://itunes.apple.com/us/album/fly-away-feat-majeur-dayo-gold-phree-leo-single/1349474256'
    $scope.soundcloud = 'https://www.soundcloud/luna/flyaway'
    $scope.bandcamp = ''
    $scope.youtube = 'https://youtu.be/M1w-L39aG90'
  }
);

app.controller('slow',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'SLOW'
    $scope.pic = '../media/art/slow.jpg'
    $scope.spotify = 'https://open.spotify.com/track/3AD1om5Tvy8IU2u5zZzv5K?si=_lgZHBmORpe7FQJ4w1bZFw'
    $scope.apple = 'https://itunes.apple.com/us/album/slow-feat-sacha-single/1337197356'
    $scope.soundcloud = 'https://www.soundcloud/luna/slow'
    $scope.bandcamp = ''
    $scope.youtube = 'https://youtu.be/6F7kAr-cnu0'
  }
);

app.controller('highland',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'HIGHLAND'
    $scope.pic = '../media/art/highland.jpg'
    $scope.spotify = 'https://open.spotify.com/track/33UPTyIdlxWSwfcEnKIhvo?si=LEU_UDEDQjel3SaBNDE9QQ'
    $scope.apple = 'https://itunes.apple.com/us/album/highland-single/1333664924'
    $scope.soundcloud = 'https://www.soundcloud/luna/highland'
    $scope.bandcamp = ''
    $scope.youtube = 'https://youtu.be/D7VZD4t5eE8'
  }
);

app.controller('espresso',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'ESPRESSO'
    $scope.pic = '../media/art/espresso.jpg'
    $scope.spotify = 'https://open.spotify.com/track/7LzrDxBfrj9YyuY4hGtcUw?si=FEhyueZwSfeYxyIL_gvbuw'
    $scope.apple = 'https://itunes.apple.com/us/album/espresso-single/1333644201'
    $scope.soundcloud = 'https://www.soundcloud/luna/espresso'
    $scope.bandcamp = ''
    $scope.youtube = 'https://youtu.be/ehjEhfzUYv4'
  }
);

app.controller('blind',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'BLIND'
    $scope.pic = '../media/art/blind.jpg'
    $scope.spotify = 'https://open.spotify.com/track/5EQNzsY6igu4sipqlH8gc7?si=2yQrluBwTa6KtsaYwJp2yw'
    $scope.apple = 'https://itunes.apple.com/us/album/blind-feat-phree-leo-majeur-single/1308814534'
    $scope.soundcloud = 'https://www.soundcloud/luna/blind'
    $scope.bandcamp = 'https://islandboyluna.bandcamp.com/track/blind-feat-phree-leo-and-majeur'
    $scope.youtube = 'https://youtu.be/jkvvmeQAwag'
  }
);

app.controller('nicotine',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'NICOTINE'
    $scope.pic = '../media/art/nicotine.jpg'
    $scope.spotify = 'https://open.spotify.com/track/7ae3s4yMPGlJX7SlBuPXDg?si=dR2ytdO3Q42BGOQGb4BvEg'
    $scope.apple = 'https://itunes.apple.com/us/album/nicotine-feat-dayo-gold-leo-phree-grandace-single/1297125954'
    $scope.soundcloud = 'https://www.soundcloud/luna/nicotine'
    $scope.bandcamp = 'https://islandboyluna.bandcamp.com/track/nicotine-feat-dayo-leo-and-phree'
    $scope.youtube = 'https://youtu.be/LhO2psl86gY'
  }
);

app.controller('sleepin',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'SLEEP IN'
    $scope.pic = '../media/art/sleepin.jpg'
    $scope.spotify = 'https://open.spotify.com/track/4mjcCNC0NgfG5WePX11h0J?si=6yqmqDJRTlGxR9bnpIWgeQ'
    $scope.apple = 'https://itunes.apple.com/us/album/sleep-in-single/1289319198'
    $scope.soundcloud = 'https://www.soundcloud/luna/sleepin'
    $scope.bandcamp = 'https://islandboyluna.bandcamp.com/track/sleep-in'
    $scope.youtube = 'https://youtu.be/Y06e9vBaQxU'
  }
);

app.controller('reload',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'RELOAD'
    $scope.pic = '../media/art/reload.jpg'
    $scope.spotify = 'https://open.spotify.com/track/4IS3P9tB7YRsJcQrrO5QvW?si=xaO-FVmXSduEcdDUoQWm8A'
    $scope.apple = 'https://itunes.apple.com/us/album/reload-feat-grandace-single/1281801125'
    $scope.soundcloud = 'https://www.soundcloud/luna/reload-feat-grandace'
    $scope.bandcamp = 'https://islandboyluna.bandcamp.com/track/reload-feat-grandace'
    $scope.youtube = 'https://youtu.be/P-cRkAewMk8'
  }
);

app.controller('back',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'BACK'
    $scope.pic = '../media/art/back.jpg'
    $scope.spotify = 'https://open.spotify.com/track/3gzoxkCVqnf0mzWERuT5BP?si=ClEFdx3eTd2njWKM6RbU2g'
    $scope.apple = 'https://itunes.apple.com/us/album/back-feat-luna-single/1278505330'
    $scope.soundcloud = 'https://soundcloud.com/luna/backwith-conge'
    $scope.bandcamp = 'https://islandboyluna.bandcamp.com/track/back-feat-conge'
    $scope.youtube = 'https://youtu.be/4UwPHWKYrN0'
  }
);

app.controller('feelinlike',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'FEELIN LIKE'
    $scope.pic = '../media/art/feelinlike.jpg'
    $scope.spotify = 'https://open.spotify.com/track/3Vc1ESXrqsbE0lZW80pEAe?si=gPUbNXIrQmupIzzJT8QJXQ'
    $scope.apple = 'https://itunes.apple.com/us/album/feelin-like-feat-phree-single/1276745630'
    $scope.soundcloud = 'https://soundcloud.com/luna/feelin-likefeat-phree'
    $scope.bandcamp = 'https://islandboyluna.bandcamp.com/track/feeling-like-feat-phree'
    $scope.youtube = 'https://youtu.be/8yG0iHbfIQs'
  }
);

app.controller('butterfly',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'BUTTERFLY'
    $scope.pic = '../media/art/butterfly.jpg'
    $scope.spotify = 'https://open.spotify.com/track/7rBF6SnSAwve0Db6vxwNOj?si=c9_soeS0QXGLYS9b3TYZow'
    $scope.apple = 'https://itunes.apple.com/us/album/butterfly-single/1271836614'
    $scope.soundcloud = 'https://soundcloud.com/luna/butterfly'
    $scope.bandcamp = 'https://islandboyluna.bandcamp.com/track/butterfly'
    $scope.youtube = 'https://youtu.be/R8tWI1DjuZQ'
  }
);

app.controller('loveinthemorning',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'LOVE IN THE MORNING (EP)'
    $scope.pic = '../media/art/loveinthemorning.jpg'
    $scope.spotify = 'https://open.spotify.com/album/1fxIDuccDeFFgqQQdleojM?si=D6DBk9hLQnu_kB3wVG1bZQ'
    $scope.apple = 'https://itunes.apple.com/us/album/love-in-the-morning/1258795909'
    $scope.soundcloud = 'https://soundcloud.com/luna/sets/love'
    $scope.bandcamp = 'https://islandboyluna.bandcamp.com/album/love-in-the-morning-ep-2'
    $scope.youtube = 'https://youtu.be/W9AXS647gbw'
  }
);

app.controller('alive',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'ALIVE'
    $scope.pic = '../media/art/loveinthemorning.jpg'
    $scope.spotify = 'https://open.spotify.com/track/31xRIr4lFTpIfsdDNJ5q7v?si=cZ28YPchS7GLjHsSZv4maw'
    $scope.apple = 'https://itunes.apple.com/us/album/alive-feat-phree/1258795909?i=1258797394'
    $scope.soundcloud = 'https://soundcloud.com/luna/alive'
    $scope.bandcamp = 'https://islandboyluna.bandcamp.com/track/alive-feat-phree'
    $scope.youtube = 'https://youtu.be/5L3jZZyC8A0'
  }
);

app.controller('rewind',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'REWIND'
    $scope.pic = '../media/art/loveinthemorning.jpg'
    $scope.spotify = 'https://open.spotify.com/track/7IBbEml4xaFuYlM7cHlGRG?si=zQuhFwvHQlS47GCS4qh0Pg'
    $scope.apple = 'https://itunes.apple.com/us/album/rewind/1258795909?i=1258797393'
    $scope.soundcloud = 'https://soundcloud.com/luna/rewind'
    $scope.bandcamp = 'https://islandboyluna.bandcamp.com/track/rewind'
    $scope.youtube = 'https://youtu.be/--eoIvdufag'
  }
);

app.controller('ridin',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'RIDIN IN MY FORK'
    $scope.pic = '../media/art/loveinthemorning.jpg'
    $scope.spotify = 'https://open.spotify.com/track/2CSzv5m8D5gYPnzAHD9XoY?si=gj2F1UtxRu6Kcstdg5gVgw'
    $scope.apple = 'https://itunes.apple.com/us/album/ridin-in-my-fork-feat-grandace-chris-chain/1258795909?i=1258797390'
    $scope.soundcloud = 'https://soundcloud.com/luna/ridin-in-my-fork-feat-grandace'
    $scope.bandcamp = 'https://islandboyluna.bandcamp.com/track/ridin-in-my-fork-feat-grandace'
    $scope.youtube = 'https://youtu.be/ADJDNjaKJWU'
  }
);

app.controller('loversquarrel',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'LOVERS QUARREL'
    $scope.pic = '../media/art/loveinthemorning.jpg'
    $scope.spotify = 'https://open.spotify.com/track/3ChMNfhvS98NFNOGadeUyl?si=MdESktrKR-Kp-_j0ReYXIA'
    $scope.apple = 'https://itunes.apple.com/us/album/lovers-quarrel-feat-grandace/1258795909?i=1258797123'
    $scope.soundcloud = 'https://soundcloud.com/luna/lovers-quarrel-feat-grandace'
    $scope.bandcamp = 'https://islandboyluna.bandcamp.com/track/lovers-quarrel-feat-grandace'
    $scope.youtube = 'https://youtu.be/WD5yswqIlFw'
  }
);

app.controller('atnight',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'AT NIGHT(INTRO)'
    $scope.pic = '../media/art/loveinthemorning.jpg'
    $scope.spotify = 'https://open.spotify.com/track/66hPqeFQ9g724seHZh8y85?si=VD4ejAVfR_-PRlLZPzz2-w'
    $scope.apple = 'https://itunes.apple.com/us/album/at-night-intro/1258795909?i=1258797121'
    $scope.soundcloud = 'https://soundcloud.com/luna/at-night-intro'
    $scope.bandcamp = 'https://islandboyluna.bandcamp.com/track/at-night-intro'
    $scope.youtube = 'https://youtu.be/nagNN_-J4g8'
  }
);

app.controller('medy',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'MEDY'
    $scope.pic = '../media/art/loveinthemorning.jpg'
    $scope.spotify = 'https://open.spotify.com/track/6PRVhTHxxcTEfBNyU20QaT?si=OgAHl2omSDm9lzQ3PuuQSg'
    $scope.apple = 'https://itunes.apple.com/us/album/medy/1258795909?i=1258797122'
    $scope.soundcloud = 'https://soundcloud.com/luna/medy'
    $scope.bandcamp = 'https://islandboyluna.bandcamp.com/track/medy'
    $scope.youtube = 'https://youtu.be/UDSzuPfySfI'
  }
);

app.controller('itililt',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'I THINK I LIKE IT LIKE THAT'
    $scope.pic = '../media/art/loveinthemorning.jpg'
    $scope.spotify = 'https://open.spotify.com/track/5DOmBQ25jBjDGYyU3Cj0Tg?si=IB4dgZbbT62-O0t-Sn29gg'
    $scope.apple = 'https://itunes.apple.com/us/album/i-think-i-like-it-like-that/1258795909?i=1258797388'
    $scope.soundcloud = 'https://soundcloud.com/luna/i-think-i-like-it-like-that-love-in-the-morning-ep-single'
    $scope.bandcamp = 'https://islandboyluna.bandcamp.com/track/i-think-i-like-it-like-that'
    $scope.youtube = 'https://youtu.be/tP-9hjcw9Qw'
  }
);

app.controller('idontneedyou',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'IDONTNEEDYOU'
    $scope.pic = '../media/art/idontneedyou.jpg'
    $scope.spotify = 'https://open.spotify.com/track/3HmtUV7YgDuB8KUTKU9OAW?si=nMnM6b4nSRiMh-QkWUIq9Q'
    $scope.apple = 'https://itunes.apple.com/us/album/idontneedyou/1246299770?i=1246299821'
    $scope.soundcloud = 'https://soundcloud.com/luna/idontneedyou'
    $scope.bandcamp = ''
    $scope.youtube = 'https://youtu.be/-QoU3LPL-TA'
  }
);

app.controller('strollin',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'STROLLIN'
    $scope.pic = '../media/art/strollin.jpg'
    $scope.spotify = 'https://open.spotify.com/track/7wnOwCM7fMewkIuKmgkkJm?si=F94MvLiYTsC84mv_gKvL9w'
    $scope.apple = 'https://itunes.apple.com/us/album/strollin/1253172614?i=1253172848'
    $scope.soundcloud = 'https://soundcloud.com/luna/strollinthu'
    $scope.bandcamp = ''
    $scope.youtube = 'https://youtu.be/dvDHM8P9qaw'
  }
);

app.controller('helenkeller',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'HELEN KELLER'
    $scope.pic = '../media/art/helenkeller.jpg'
    $scope.spotify = null
    $scope.apple = null
    $scope.soundcloud = 'https://www.soundcloud/luna/helen-keller'
    $scope.bandcamp = ''
    $scope.youtube = 'https://youtu.be/YKQx5Roc2FQ'
  }
);

app.controller('nowhere',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'NOWHERE'
    $scope.pic = '../media/art/nowhere.jpg'
    $scope.spotify = null
    $scope.apple = null
    $scope.soundcloud = 'https://www.soundcloud/luna/nowhere'
    $scope.bandcamp = ''
    $scope.youtube = 'https://youtu.be/LbpC9eIyVKI'
  }
);

app.controller('itsokaytobesad',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'ITS OKAY TO BE SAD'
    $scope.pic = '../media/art/itsokay.jpg'
    $scope.spotify = null
    $scope.apple = null
    $scope.soundcloud = 'https://soundcloud.com/luna/its-okay-to-be-sad'
    $scope.bandcamp = 'https://islandboyluna.bandcamp.com/track/itsokaytobesad'
    $scope.youtube = 'https://youtu.be/-QoU3LPL-TA'
  }
);

app.controller('litinaforest',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'LIT IN A FOREST'
    $scope.pic = '../media/art/lit.jpg'
    $scope.spotify = null
    $scope.apple = null
    $scope.soundcloud = 'https://soundcloud.com/luna/lit-in-a-forest'
    $scope.bandcamp = 'https://islandboyluna.bandcamp.com/track/lit-in-a-forest'
    $scope.youtube = 'https://youtu.be/rfurr7eChxo'
  }
);

app.controller('wakapella',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'WAKAPELLA'
    $scope.pic = '../media/art/wakapella.jpg'
    $scope.spotify = null
    $scope.apple = null
    $scope.soundcloud = 'https://soundcloud.com/luna/wakapella-luna-flip'
    $scope.bandcamp = 'https://islandboyluna.bandcamp.com/track/wakapella'
    $scope.youtube = 'https://youtu.be/h8zyrr3tswo'
  }
);
