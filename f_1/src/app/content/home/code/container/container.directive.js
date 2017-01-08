define([], function(){
    'use strict';

    function container() {

        var directive =  {
            restrict: 'E',
            templateUrl: 'src/app/content/home/code/container/container.tpl.html',
            scope: {
                'container': '='
            }
        };

        return directive;

    }

    return container;
});
