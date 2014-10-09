require([

      'angular',
      'app'

    ], function (angular) {

      'use strict';

      $(document).ready(function () {

        angular.bootstrap(document, ['myApp']);

        // The following is required if you want AngularJS Scenario tests to work
        $('html').addClass('ng-app: myApp');
      });
    }
);