var app;

app = angular.module('app', ['ngRoute', 'ngStorage', 'ngMaterial', 'users']);

app.config([
  '$mdThemingProvider', '$mdIconProvider', function($mdThemingProvider, $mdIconProvider) {
    $mdIconProvider.defaultIconSet('./assets/svg/avatars.svg', 128).icon('menu', './assets/svg/menu.svg', 24).icon('share', './assets/svg/share.svg', 24).icon('google_plus', './assets/svg/google_plus.svg', 512).icon('hangouts', './assets/svg/hangouts.svg', 512).icon('twitter', './assets/svg/twitter.svg', 512).icon('phone', './assets/svg/phone.svg', 512).icon('person_add', './assets/svg/ic_person_add_48px.svg', 48).icon('clear', './assets/svg/ic_clear_48px.svg', 48).icon('plus', './assets/svg/ic_add_48px.svg', 48).icon('cog', './assets/svg/ic_settings_48px.svg', 48).icon('delete', './assets/svg/ic_delete_48px.svg', 48);
    $mdThemingProvider.theme('default').primaryPalette('deep-orange').accentPalette('blue').warnPalette('red').backgroundPalette('grey');
  }
]);

app.config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.when('/blobs', {
      templateUrl: 'js/blobs/blobs.html',
      controller: 'BlobController'
    }).when('/blobs/:id', {
      templateUrl: 'js/blobs/blobs.html',
      controller: 'BlobController'
    }).otherwise({
      redirectTo: '/blobs'
    });
  }
]);

app.config([
  '$localStorageProvider', function($localStorageProvider) {
    $localStorageProvider.setKeyPrefix('app');
  }
]);
