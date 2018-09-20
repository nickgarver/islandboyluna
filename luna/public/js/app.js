var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider,$locationProvider) {
  // $locationProvider.hashPrefix('!');
  // $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: 'home.html'
    })
    .when('/media', {
      url: 'media.html',
      templateUrl: 'media.html'
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
    $scope.youtube = ''
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
    $scope.youtube = ''
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
    $scope.youtube = ''
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
    $scope.youtube = ''
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
    $scope.youtube = ''
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
    $scope.youtube = ''
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
    $scope.youtube = ''
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
    $scope.youtube = ''
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
    $scope.youtube = ''
  }
);

app.controller('blind',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'BLIND'
    $scope.pic = '../media/art/blind.jpg'
    $scope.spotify = 'https://open.spotify.com/track/5EQNzsY6igu4sipqlH8gc7?si=2yQrluBwTa6KtsaYwJp2yw'
    $scope.apple = 'https://itunes.apple.com/us/album/blind-feat-phree-leo-majeur-single/1308814534'
    $scope.soundcloud = 'https://www.soundcloud/luna/blind'
    $scope.bandcamp = ''
    $scope.youtube = ''
  }
);

app.controller('nicotine',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'NICOTINE'
    $scope.pic = '../media/art/nicotine.jpg'
    $scope.spotify = 'https://open.spotify.com/track/7ae3s4yMPGlJX7SlBuPXDg?si=dR2ytdO3Q42BGOQGb4BvEg'
    $scope.apple = 'https://itunes.apple.com/us/album/nicotine-feat-dayo-gold-leo-phree-grandace-single/1297125954'
    $scope.soundcloud = 'https://www.soundcloud/luna/nicotine'
    $scope.bandcamp = ''
    $scope.youtube = ''
  }
);

app.controller('sleepin',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'SLEEP IN'
    $scope.pic = '../media/art/sleepin.jpg'
    $scope.spotify = 'https://open.spotify.com/track/4mjcCNC0NgfG5WePX11h0J?si=6yqmqDJRTlGxR9bnpIWgeQ'
    $scope.apple = 'https://itunes.apple.com/us/album/sleep-in-single/1289319198'
    $scope.soundcloud = 'https://www.soundcloud/luna/sleepin'
    $scope.bandcamp = ''
    $scope.youtube = ''
  }
);

app.controller('reload',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'RELOAD'
    $scope.pic = '../media/art/reload.jpg'
    $scope.spotify = 'https://open.spotify.com/track/4IS3P9tB7YRsJcQrrO5QvW?si=xaO-FVmXSduEcdDUoQWm8A'
    $scope.apple = 'https://itunes.apple.com/us/album/reload-feat-grandace-single/1281801125'
    $scope.soundcloud = 'https://www.soundcloud/luna/reload-feat-grandace'
    $scope.bandcamp = ''
    $scope.youtube = ''
  }
);

app.controller('back',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'BACK'
    $scope.pic = '../media/art/back.jpg'
    $scope.spotify = 'https://open.spotify.com/track/3gzoxkCVqnf0mzWERuT5BP?si=ClEFdx3eTd2njWKM6RbU2g'
    $scope.apple = 'https://itunes.apple.com/us/album/back-feat-luna-single/1278505330'
    $scope.soundcloud = 'https://soundcloud.com/luna/backwith-conge'
    $scope.bandcamp = ''
    $scope.youtube = ''
  }
);

app.controller('feelinlike',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'FEELIN LIKE'
    $scope.pic = '../media/art/feelinlike.jpg'
    $scope.spotify = 'https://open.spotify.com/track/3Vc1ESXrqsbE0lZW80pEAe?si=gPUbNXIrQmupIzzJT8QJXQ'
    $scope.apple = 'https://itunes.apple.com/us/album/feelin-like-feat-phree-single/1276745630'
    $scope.soundcloud = 'https://soundcloud.com/luna/feelin-likefeat-phree'
    $scope.bandcamp = ''
    $scope.youtube = ''
  }
);

app.controller('butterfly',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'BUTTERFLY'
    $scope.pic = '../media/art/butterfly.jpg'
    $scope.spotify = 'https://open.spotify.com/track/7rBF6SnSAwve0Db6vxwNOj?si=c9_soeS0QXGLYS9b3TYZow'
    $scope.apple = 'https://itunes.apple.com/us/album/butterfly-single/1271836614'
    $scope.soundcloud = 'https://soundcloud.com/luna/butterfly'
    $scope.bandcamp = ''
    $scope.youtube = ''
  }
);

app.controller('loveinthemorning',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'LOVE IN THE MORNING (EP)'
    $scope.pic = '../media/art/loveinthemorning.jpg'
    $scope.spotify = 'https://open.spotify.com/album/1fxIDuccDeFFgqQQdleojM?si=D6DBk9hLQnu_kB3wVG1bZQ'
    $scope.apple = 'https://itunes.apple.com/us/album/love-in-the-morning/1258795909'
    $scope.soundcloud = 'https://soundcloud.com/luna/sets/love'
    $scope.bandcamp = ''
    $scope.youtube = ''
  }
);

app.controller('alive',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'ALIVE'
    $scope.pic = '../media/art/loveinthemorning.jpg'
    $scope.spotify = 'https://open.spotify.com/track/31xRIr4lFTpIfsdDNJ5q7v?si=cZ28YPchS7GLjHsSZv4maw'
    $scope.apple = 'https://itunes.apple.com/us/album/alive-feat-phree/1258795909?i=1258797394'
    $scope.soundcloud = 'https://soundcloud.com/luna/alive'
    $scope.bandcamp = ''
    $scope.youtube = ''
  }
);

app.controller('rewind',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'REWIND'
    $scope.pic = '../media/art/loveinthemorning.jpg'
    $scope.spotify = 'https://open.spotify.com/track/7IBbEml4xaFuYlM7cHlGRG?si=zQuhFwvHQlS47GCS4qh0Pg'
    $scope.apple = 'https://itunes.apple.com/us/album/rewind/1258795909?i=1258797393'
    $scope.soundcloud = 'https://soundcloud.com/luna/rewind'
    $scope.bandcamp = ''
    $scope.youtube = ''
  }
);

app.controller('ridin',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'RIDIN IN MY FORK'
    $scope.pic = '../media/art/loveinthemorning.jpg'
    $scope.spotify = 'https://open.spotify.com/track/2CSzv5m8D5gYPnzAHD9XoY?si=gj2F1UtxRu6Kcstdg5gVgw'
    $scope.apple = 'https://itunes.apple.com/us/album/ridin-in-my-fork-feat-grandace-chris-chain/1258795909?i=1258797390'
    $scope.soundcloud = 'https://soundcloud.com/luna/ridin-in-my-fork-feat-grandace'
    $scope.bandcamp = ''
    $scope.youtube = ''
  }
);

app.controller('loversquarrel',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'LOVERS QUARREL'
    $scope.pic = '../media/art/loveinthemorning.jpg'
    $scope.spotify = 'https://open.spotify.com/track/3ChMNfhvS98NFNOGadeUyl?si=MdESktrKR-Kp-_j0ReYXIA'
    $scope.apple = 'https://itunes.apple.com/us/album/lovers-quarrel-feat-grandace/1258795909?i=1258797123'
    $scope.soundcloud = 'https://soundcloud.com/luna/lovers-quarrel-feat-grandace'
    $scope.bandcamp = ''
    $scope.youtube = ''
  }
);

app.controller('atnight',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'AT NIGHT(INTRO)'
    $scope.pic = '../media/art/loveinthemorning.jpg'
    $scope.spotify = 'https://open.spotify.com/track/66hPqeFQ9g724seHZh8y85?si=VD4ejAVfR_-PRlLZPzz2-w'
    $scope.apple = 'https://itunes.apple.com/us/album/at-night-intro/1258795909?i=1258797121'
    $scope.soundcloud = 'https://soundcloud.com/luna/at-night-intro'
    $scope.bandcamp = ''
    $scope.youtube = ''
  }
);

app.controller('medy',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'MEDY'
    $scope.pic = '../media/art/loveinthemorning.jpg'
    $scope.spotify = 'https://open.spotify.com/track/6PRVhTHxxcTEfBNyU20QaT?si=OgAHl2omSDm9lzQ3PuuQSg'
    $scope.apple = 'https://itunes.apple.com/us/album/medy/1258795909?i=1258797122'
    $scope.soundcloud = 'https://soundcloud.com/luna/medy'
    $scope.bandcamp = ''
    $scope.youtube = ''
  }
);

app.controller('itililt',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'I THINK I LIKE IT LIKE THAT'
    $scope.pic = '../media/art/loveinthemorning.jpg'
    $scope.spotify = 'https://open.spotify.com/track/5DOmBQ25jBjDGYyU3Cj0Tg?si=IB4dgZbbT62-O0t-Sn29gg'
    $scope.apple = 'https://itunes.apple.com/us/album/i-think-i-like-it-like-that/1258795909?i=1258797388'
    $scope.soundcloud = 'https://soundcloud.com/luna/i-think-i-like-it-like-that-love-in-the-morning-ep-single'
    $scope.bandcamp = ''
    $scope.youtube = ''
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
    $scope.youtube = ''
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
    $scope.youtube = ''
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
    $scope.youtube = ''
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
    $scope.youtube = ''
  }
);

app.controller('itsokaytobesad',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'ITS OKAY TO BE SAD'
    $scope.pic = '../media/art/itsokay.jpg'
    $scope.spotify = null
    $scope.apple = null
    $scope.soundcloud = 'https://soundcloud.com/luna/its-okay-to-be-sad'
    $scope.bandcamp = ''
    $scope.youtube = ''
  }
);

app.controller('litinaforest',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'LIT IN A FOREST'
    $scope.pic = '../media/art/lit.jpg'
    $scope.spotify = null
    $scope.apple = null
    $scope.soundcloud = 'https://soundcloud.com/luna/lit-in-a-forest'
    $scope.bandcamp = ''
    $scope.youtube = ''
  }
);

app.controller('wakapella',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'WAKAPELLA'
    $scope.pic = '../media/art/wakapella.jpg'
    $scope.spotify = null
    $scope.apple = null
    $scope.soundcloud = 'https://soundcloud.com/luna/wakapella-luna-flip'
    $scope.bandcamp = ''
    $scope.youtube = ''
  }
);
