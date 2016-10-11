define([], function(){
    'use strict';

    function list() {

        var directive =  {
            restrict: 'E',
            templateUrl: 'src/app/content/home/code/list/list.tpl.html',
            scope: {
                'list': '='
            }
        };

        return directive;

    }

    return list;
});
