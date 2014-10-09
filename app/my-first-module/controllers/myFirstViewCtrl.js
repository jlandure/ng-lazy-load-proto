define([

    'my-first-module/module'

], function(module) {

    'use strict';

    var controller = function($rootScope, $scope, $timeout) {
    	$scope.message = 'I am the first module controller';
        
    };

    module.controller('myFirstViewCtrl', ['$rootScope', '$scope', '$timeout', controller]);
});