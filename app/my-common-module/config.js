define([

  'angular',
  'angularUiRouter',
  'my-common-module/controllers/myHomeViewCtrl'

], function(angular) {

  'use strict';

  angular.module('my-common-module-config', [
    'ui.router'
  ]).config([
    '$stateProvider',
    '$urlRouterProvider',
    '$urlMatcherFactoryProvider',
    function($stateProvider,
             $urlRouterProvider,
             $urlMatcherFactoryProvider
        ) {

      $stateProvider
          .state('app', {
            abstract: true,
            template: '<ui-view/>'
          })
          .state('app.home', {
            url: '/',
            templateUrl: 'my-common-module/views/home.html',
            controller: 'myHomeViewCtrl'
          });
    }
  ]);
});