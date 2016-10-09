define([], function () {
    'use strict';

    function BlocksController($scope) {

        $scope.role = {
            write: {
                id: 1,
                name: 'write'
            },
            ifElse: {
                id: 4,
                name: 'if-else'
            },
            trash: {
                id: 0,
                name: 'trash'
            }
        };

    }

    BlocksController.$inject = ['$scope'];
    return BlocksController;
});
