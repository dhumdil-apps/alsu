define([], function(){
    'use strict';

    function item() {

        var directive =  {
            restrict: 'E',
            templateUrl: 'src/app/content/home/code/item/item.tpl.html',
            scope: {
                'item': '='
            }
        };

        return directive;

    }

    return item;
});
