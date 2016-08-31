var modules = [
    'angular',
    'ui-router',
    'angular-animate',
    'angular-aria',
    'angular-messages',
    'angular-material',
    'dnd-lists',
    'code-module'
];

var e = [
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngMaterial',
    'dndLists',
    'app.code'
];

define(modules, function() {
    'use strict';

    angular
        .module('app', e)
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main', {
                url: '/',
                views: {
                    'toolbar': {
                        templateUrl: "app/toolbar/toolbar.tpl.html"
                    },
                    'body': {
                        templateUrl: "app/body/body.tpl.html",
                        controller: "MainController"
                    }
                }
            });
    }]);

    angular.bootstrap(document, ['app']);

});
