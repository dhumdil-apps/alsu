define([], function(){
    'use strict';

    function block() {

        var directive =  {
            restrict: 'E',
            templateUrl: 'src/app/content/home/blocks/elements/block.tpl.html',
            transclude: true,
            scope: {
                'model': '='
            }
        };

        return directive;

    }

    return block;
});
