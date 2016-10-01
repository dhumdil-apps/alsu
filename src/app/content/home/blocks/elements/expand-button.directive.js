define([], function(){
    'use strict';

    function expandButton($timeout) {

        var directive =  {
            restrict: 'E',
            templateUrl: 'src/app/content/home/blocks/elements/expand-button.tpl.html',
            scope: {
                'expand': '='
            },
            link: link
        };

        /**
         * The BUTTON that should:
         * - make possible swapping the side-panel
         */
        function link(scope, element, attrs) {

            scope.sidePanel = {
                expanded: false,
                iconDirection: 'keyboard_arrow_right'
            };

            // expressions
            var animation = [];
            scope.activeClass = '';
            // methods
            scope.swapVisibility = swapVisibility;

            init();

            /**
             * Expand/collapse side panel &
             * - change the button's icon
             */
            function swapVisibility() {

                scope.sidePanel.expanded = !scope.sidePanel.expanded;
                scope.expand = scope.sidePanel.expanded;

                changeIcon();

                function changeIcon() {

                    animate(function(){
                        return (scope.sidePanel.expanded) ? 'left' : 'right';
                    }());

                    function animate(direction) {

                        scope.activeClass = animation[2];
                        $timeout(function() {
                            renameIcon(direction);
                            scope.activeClass = animation[1];
                        }, 400);

                        function renameIcon(direction) {
                            scope.sidePanel.iconDirection = 'keyboard_arrow_' + direction;
                        }

                    }

                }
            }

            function init() {
                animation = ['', 'flipInY', 'flipOutY'];
                scope.activeClass = animation[0];
            }

        }

        return directive;

    }

    expandButton.$inject = ['$timeout'];
    return expandButton;
});
