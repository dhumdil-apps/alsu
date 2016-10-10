define([], function(){
    'use strict';

    function blockElement() {

        var directive =  {
            restrict: 'E',
            templateUrl: 'src/app/content/home/blocks/elements/block.tpl.html',
            transclude: true,
            scope: {
                'role': '='
            },
            link: link
        };

        function link(scope, element, attrs) {

            console.log(scope.role);
            

        }

        return directive;

    }

    return blockElement;
});
