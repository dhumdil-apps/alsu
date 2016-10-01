var modules = [
    'angular',
    'ui-router',
    'angular-animate',
    'angular-aria',
    'angular-messages',
    'angular-material',
    'alsu-module',
    'dnd-lists'
],
    e = [
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngMaterial',
    'app.alsu',
    'dndLists'
];

define(modules, function() {
    'use strict';

    angular
        .module('app', e)
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('main', {
                url: '/',
                views: {
                    '': {
                        templateUrl: "src/app/content/main.tpl.html",
                        controller: 'MainController'
                    }
                }
            })
            .state('main.home', {
                url: 'home',
                views: {
                    'home': {
                        templateUrl: "src/app/content/home/home.view.html",
                        controller: "HomeController"
                    }
                }
            })
            .state('main.home.code', {
                url: '/',
                views: {
                    'toolbar': {
                        templateUrl: "src/app/content/home/toolbar/toolbar.view.html",
                        controller: "ToolbarController"
                    },
                    'blocks': {
                        templateUrl: "src/app/content/home/blocks/blocks.view.html",
                        controller: "BlocksController"
                    },
                    'code': {
                        templateUrl: "src/app/content/home/code/code.view.html",
                        controller: "CodeController"
                    }
                }
            });
    }]);

    angular.bootstrap(document, ['app']);

});
