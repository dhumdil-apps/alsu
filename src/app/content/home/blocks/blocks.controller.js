define([], function () {
    'use strict';

    function BlocksController($scope) {

        $scope.sidePanel = {
            expanded: false,
            title: '',
            help: '',
            activeClass: ''
        };

        $scope.$watch('sidePanel.expanded', function () {

            if ($scope.sidePanel.expanded) {
                $scope.sidePanel.title = 'Blocks';
                $scope.sidePanel.help = 'help_outline';
                $scope.sidePanel.activeClass = 'view expanded_view';
            } else {
                $scope.sidePanel.title = '';
                $scope.sidePanel.help = '';
                $scope.sidePanel.activeClass = 'view collapsed_view';
            }

        });

    }

    BlocksController.$inject = ['$scope'];
    return BlocksController;
});
