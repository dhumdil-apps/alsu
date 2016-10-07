define([], function () {
    'use strict';

    function BlocksController($scope) {

        $scope.role = {
            write: 1,
            if: 4,
            trash: 0
        };

    }

    BlocksController.$inject = ['$scope'];
    return BlocksController;
});
