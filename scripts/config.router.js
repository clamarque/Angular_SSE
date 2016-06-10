'use strict'

function Config($routeProvider) {
    $routeProvider
    .when('/', { templateUrl: 'partials/home.html'})
    .when('/home', { templateUrl: 'partials/home.html'})
    .when('/broadcast', { templateUrl: 'partials/broadcast.html', controller: 'broadcastCtrl'})
    .otherwise({ redirectTo: '/home'})
}
angular.module('my-app').config(Config);