'use strict';

/**
 * @ngdoc overview
 * @name fisrtAppApp
 * @description
 * # fisrtAppApp
 *
 * Main module of the application.
 */
angular
  .module('fisrtAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/register/_register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
