define([], function(){
    'use strict';

    function homeContainer($window) {

        var directive =  {
            restrict: 'E',
            templateUrl: 'src/app/content/home/home.tpl.html',
            transclude: true,
            link: linker
        };

        function linker(scope, element, attrs) {

            // breakPoints
            var h0 = function(w) { return ( (w < 300) ); },
                h1  = function(w) { return ( (w >= 300) && (w < 430) ) },
                h2  = function(w) { return ( (w >= 430) && (w < 530) ) },
                h3  = function(w) { return ( (w >= 530) && (w < 960) ) },
                h4  = function(w) { return ( (w >= 960) && (w < 1280) ) },
                h5 = function(w) { return ( (w >= 1280) && (w < 1920) ) };

            var activeClass = {
                classCategory: 0,
                allClasses: ['home_0', 'home_1', 'home_2', 'home_3', 'home_4', 'home_5', 'home_6']
            };
            scope.homeStyle = '';

            init();
            function init() {
                activeClass.classCategory = getSizeCategory($window.innerWidth);
                scope.homeStyle = getActiveClass();
            }

            /**
             * Verify current class, if needed update it
             */
            function checkCategory(cat) {
                if (cat !== activeClass.classCategory) {
                    activeClass.classCategory = cat;
                    scope.homeStyle = getActiveClass();
                }
            }

            /**
             * Select a category based on width
             * @param w
             * @returns {number}
             */
            function getSizeCategory(w) {

                if ( h0(w) ) {
                    return 0;
                } else if ( h1(w) ) {
                    return 1;
                } else if ( h2(w) ) {
                    return 2;
                } else if ( h3(w) ) {
                    return 3;
                } else if ( h4(w) ) {
                    return 4;
                } else if ( h5(w) ) {
                    return 5;
                } else {
                    return 7;
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
