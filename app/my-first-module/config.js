define([

    'angularUiRouter',
    'my-first-module/module',
    'my-first-module/controllers/myFirstViewCtrl',
    'uiRouterExtrasStatevis',
    'css!/my-first-module/css/my-first-module'

], function() {

    'use strict';

    angular.module('my-first-module-config', [
        'ui.router',
        'my-first-module',
        'ct.ui.router.extras.examples.statevis'
    ]).config([
            '$stateProvider',
            '$urlRouterProvider',
            '$urlMatcherFactoryProvider',
            function($stateProvider,
                     $urlRouterProvider,
                     $urlMatcherFactoryProvider
                ) {

        $stateProvider            
            .state('app.my-first-module', {
                url: '/module1',
                templateUrl: 'my-first-module/views/view1.html',
                controller: 'myFirstViewCtrl'
            });            
        }
    ]);
});