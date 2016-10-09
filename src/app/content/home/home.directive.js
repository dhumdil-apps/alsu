define([], function(){
    'use strict';

    function homeContainer($window) {

        var directive =  {
            restrict: 'E',
            templateUrl: 'src/app/content/home/home.tpl.html',
            transclude: true,
            link: link
        };

        function link(scope, element, attrs) {

            var activeClass = {
                classCategory: 0,
                allClasses: ['home_sm', 'home_md', 'home_lg']
            };
            scope.home_cat = '';

            init();
            function init() {
                activeClass.classCategory = getSizeCategory($window.innerWidth);
                scope.home_cat = getActiveClass();
            }

            /**
             * Verify current class, if needed update it
             */
            function checkCategory(cat) {
                if (cat !== activeClass.classCategory) {
                    activeClass.classCategory = cat;
                    scope.home_cat = getActiveClass();
                }
            }

            /**
             * Select a category based on width
             * @param width
             * @returns {number}
             */
            function getSizeCategory(width) {
                switch(width) {
                    case 600: return 0;
                    case 1200: return 1;
                    default: return 2;
                }
            }

            /**
             * Attempt to stay DRY :)
             * @returns {*}
             */
            function getActiveClass() {
                return activeClass.allClasses[activeClass.classCategory];
            }

            /**
             * Update local variables upon resize event
             * @param width
             */
            angular.element($window).bind('resize', function(){
                checkCategory(getSizeCategory($window.innerWidth));
                scope.$digest(); // manuall $digest required as resize event is outside of angular
            });

        }

        return directive;

    }

    homeContainer.$inject = ['$window'];
    return homeContainer;
});
