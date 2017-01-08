define([], function () {
    'use strict';

    function MainController($scope, $state) {

        // methods
        $scope.goToState = goToState;

        init();

        /**
         * Initialize the APP accessing home-page
         */
        function init() {
            goToState('main.home');
        }

        /**
         * Go to a specific state
         * @param state {string}
         */
        function goToState(state) {
            $state.go(state);
        }

    }

    MainController.$inject = ['$scope', '$state'];
    return MainController;
});
