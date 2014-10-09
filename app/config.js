'use strict';

require.config({

  deps: ['main'],

  // Cache busting
  // Enable for production only
  //urlArgs: '_=' + (new Date()).getTime(),

  paths: {
    angular: './bower_components/angular/angular',
    angularUiRouter: './bower_components/angular-ui-router/release/angular-ui-router',
    d3: './bower_components/d3/d3.min',
//        async: '../bower_components/requirejs-plugins/src/async',
    jquery: './bower_components/jquery/dist/jquery.min',
    lodash: './bower_components/lodash/dist/lodash.min',
    ocLazyLoad: './bower_components/ocLazyLoad/dist/ocLazyLoad.min',
    uiRouterExtras: './bower_components/ui-router-extras/release/ct-ui-router-extras.min',
    uiRouterExtrasStatevis: './external_components/ui-router-extras-statevis/statevis',
    // Alias for CSS plugin
    css: './external_components/requirecss/css.min'
  },

  shim: {
    angular: { deps: ['jquery'], exports: 'angular' },
    angularResource: { deps: ['angular'] },
    angularSanitize: { deps: ['angular'] },
    angularUiRouter: {deps: ['angular']},
    d3: {deps: []},
    jquery: { exports: '$' },
    lodash: { exports: '_' },
    ocLazyLoad: {deps: ['angular']},
    uiRouterExtras: {deps: ['angularUiRouter']},
    uiRouterExtrasStatevis: {deps: ['uiRouterExtras']}
  }

});