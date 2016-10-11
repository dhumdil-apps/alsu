define([
    'src/app/content/main.controller',
    'src/app/content/home/home.controller',
    'src/app/content/home/home.directive',
    'src/app/content/home/toolbar/toolbar.controller',
    'src/app/content/home/blocks/blocks.controller',
    'src/app/content/home/blocks/elements/block.directive',
    'src/app/content/home/code/code.controller',
    'src/app/content/home/code/list/list.directive',
    'src/app/content/home/code/container/container.directive',
    'src/app/content/home/code/item/item.directive',
    'src/app/content/home/output/output.controller'
], function(
    MainController,
        HomeController, homeContainer,
            ToolbarController,
            BlocksController, block,
            CodeController, list, container, item,
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
        .directive('block', block)
        .controller('CodeController', CodeController)
        .directive('list', list)
        .directive('container', container)
        .directive('item', item)
        .controller('OutputController', OutputController);

});
