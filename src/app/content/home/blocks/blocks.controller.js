define([], function () {
    'use strict';

    function BlocksController($scope) {

        $scope.sidePanel = {
            expanded: false,
            activeClass: ''
        };

        $scope.$watch('sidePanel.expanded', function () {
            $scope.sidePanel.activeClass = ($scope.sidePanel.expanded) ? 'expanded_view' : 'collapsed_view';
        });

    }

    BlocksController.$inject = ['$scope'];
    return BlocksController;
});
