define([

  'my-common-module/module'

], function(module) {

  'use strict';

  var controller = function($rootScope, $scope, $state, $timeout) {
    $scope.message = 'Welcome to my application';

    $scope.gotoState = function(state) {
      $state.go(state);
    };
  };

  module.controller('myHomeViewCtrl', ['$rootScope', '$scope', '$timeout', controller]);
});