var controllers = [
    'app/main.controller',
    'app/content/blocks/blocks.controller',
    'app/content/output/output.controller',
    'app/content/program/program.controller',
    'app/content/toolbar/toolbar.controller'
];

define(controllers, function(
    MainController,
    BlocksController,
    OutputController,
    ProgramController,
    ToolbarController
) {
    'use strict';

    angular
        .module('app.code', ['app'])
        .config(function(){});

    angular.module('app.code')
        .controller('MainController', MainController)
        .controller('BlocksController', BlocksController)
        .controller('OutputController', OutputController)
        .controller('ProgramController', ProgramController)
        .controller('ToolbarController', ToolbarController);

});
