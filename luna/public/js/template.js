var app = angular.module('angularRouting', ['ngRoute']);

app.config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        template: '<h1>This is home</h1>'
      })
      .when('/applestore', {
            url: "/applestore",
            templateUrl: 'song.html',
            controller: 'applestore'
      })
      .when('/coldcoffee', {
            url: "/coldcoffee",
            templateUrl: 'song.html',
            controller: 'coldcoffee'
      })
      .when('/applestore', {
            url: "/applestore",
            templateUrl: 'song.html',
            controller: 'applestore'
      })
      .otherwise({
        redirectTo: '/',
        template: '<h1>does not exist</h1>'
      })
  }
);

app.controller('applestore',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'APPLE STORE'
    $scope.pic = '../media/art/applestore.jpg'
    $scope.spotify = 'https://open.spotify.com/artist/0p4LXtBStUxPgbYYcJr4FA?si=rUj1tWkZRxyWmPomumNIow',
    $scope.apple = 'https://itunes.apple.com/us/artist/luna/id887327590'
    $scope.soundcloud = 'https://www.soundcloud/luna/apple-store'
    $scope.bandcamp = 'https://www.soundcloud/luna/apple-store'
    $scope.youtube = 'https://www.soundcloud/luna/apple-store'
  }
);

app.controller('coldcoffee',
  function ParamsController($scope, $routeParams) {
    $scope.name = 'COLD COFFEE'
    $scope.pic = '../media/art/coldCoffee.jpg'
    $scope.spotify = '',
    $scope.apple = ''
    $scope.soundcloud = ''
    $scope.bandcamp = ''
    $scope.youtube = ''
  }
);
