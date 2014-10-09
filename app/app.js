define([

  'angular',
  'angularUiRouter',
  'uiRouterExtras',
  'ocLazyLoad',
  'my-common-module/config'
], function (angular) {

  'use strict';

  return angular.module('myApp',
      [
        'ui.router',
        'ct.ui.router.extras',
        'oc.lazyLoad',
        'my-common-module',
        'my-common-module-config'
      ]).config([
        '$ocLazyLoadProvider',
        '$futureStateProvider',
        function($ocLazyLoadProvider,
                 $futureStateProvider) {

          $ocLazyLoadProvider.config ({
            debug: true,
            jsLoader: requirejs,
            loadedModules: ['myApp'],
            modules: [{
              reconfig: true,
              name: 'my-first-module-config',
              files: ['my-first-module/config']
            }, {
              reconfig: true,
              name: 'future-my-second-module'
              //files: ['my-second-module/config']
            }]
          });

          var ocLazyLoadStateFactory = function ($q, $ocLazyLoad, futureState) {
            var deferred = $q.defer();
            $ocLazyLoad.load(futureState.module).then(function(name) {
              deferred.resolve();
            }, function() {
              deferred.reject();
            });
            return deferred.promise;
          };

          $futureStateProvider.stateFactory('ocLazyLoad', ocLazyLoadStateFactory);

          $futureStateProvider.addResolve(function ($injector) {
            /**
             * NOTE: resolves can be used for determining
             * which future states you actually want.
             * Here, we register both apples and oranges.
             * Try uncommenting the if/else to see
             * the magic of provider injected logic
             *
             * Important thing to remember: in addResolve, you have
             * to "return" the thenable promise chain if you want it
             * to actually wait on your provider's resolution.
             */
            return $injector.invoke(
                function () {
                  $futureStateProvider.futureState({
                    stateName: 'app.my-first-module',
                    urlPrefix: '/module1',
                    type: 'ocLazyLoad',
                    module: 'my-first-module-config'
                  });
                  $futureStateProvider.futureState({
                    stateName: 'app.my-second-module',
                    urlPrefix: '/module2',
                    type: 'ocLazyLoad',
                    module: 'future-my-second-module'
                  });
                }
            );
          });
        }]);
});