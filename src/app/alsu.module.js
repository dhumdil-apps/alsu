define([
    'src/app/content/main.controller',
    'src/app/content/home/home.controller',
    'src/app/content/home/home.directive',
    'src/app/content/home/toolbar/toolbar.controller',
    'src/app/content/home/blocks/blocks.controller',
    'src/app/content/home/blocks/elements/block.directive',
    'src/app/content/home/code/code.controller',
    'src/app/content/home/output/output.controller'
], function(
    MainController,
        HomeController, homeContainer,
            ToolbarController,
            BlocksController, blockElement,
            CodeController,
            OutputController
) {
    'use strict';

    angular
        .module('app.alsu', ['app']);

    angular
        .module('app.alsu')
        .controller('MainController', MainController)
        .controller('HomeController', HomeController)
        .controller('ToolbarController', ToolbarController)
        .directive('homeContainer', homeContainer)
        .controller('BlocksController', BlocksController)
        .directive('blockElement', blockElement)
        .controller('CodeController', CodeController)
        .controller('OutputController', OutputController);

});
