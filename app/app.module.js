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
                    '': {
                        templateUrl: "app/main.tpl.html",
                        controller: "MainController"
                    }
                }
            })
            .state('main.home', {
                url: 'home/',
                views: {
                    'toolbar': {
                        templateUrl: "app/content/toolbar/toolbar.tpl.html",
                        controller: "ToolbarController"
                    },
                    'blocks': {
                        templateUrl: "app/content/blocks/blocks.tpl.html",
                        controller: "BlocksController"
                    },
                    'program': {
                        templateUrl: "app/content/program/program.tpl.html",
                        controller: "ProgramController"
                    },
                    'output': {
                        templateUrl: "app/content/output/output.tpl.html",
                        controller: "OutputController"
                    },
                    'files': {
                        templateUrl: "app/content/files/open.tpl.html"
                    }
                }
            });
    }]);

    angular.bootstrap(document, ['app']);

});
