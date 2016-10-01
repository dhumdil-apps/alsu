define([], function () {
    'use strict';

    /**
     * The controller doesn't do much more than setting the initial data model
     */
    function CodeController($scope) {
        $scope.showHelper = false;

        $scope.swapHelper = function() {
            $scope.showHelper = !$scope.showHelper;
        }
    }

    CodeController.$inject = ['$scope'];
    return CodeController;
});

