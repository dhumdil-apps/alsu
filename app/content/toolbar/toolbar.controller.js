define([], function () {
    'use strict';

    function ToolbarController($scope) {

        $scope.saveCode = saveCode;
        $scope.openSavedCode = openSavedCode;

        /**
         * Save your work
         */
        function saveCode() {
            console.log('Sorry, just partially implemented:');
        }

        function openSavedCode() {
            console.log('Sorry, not yet implemented...');
        }

    }

    ToolbarController.$inject = ['$scope'];
    return ToolbarController;
});
