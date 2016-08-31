define([
    'app/app.controller'
], function(MainController) {
    'use strict';

    angular
        .module('app.code', ['app'])
        .config(function(){});

    angular.module('app.code')
        .controller('MainController', MainController);

});
