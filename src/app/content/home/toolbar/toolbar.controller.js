define([], function () {
    'use strict';

    function ToolbarController($scope, $state) {

        $scope.toolbar = {
            logo: 'L2C',
            run: 'play_arrow',
            settings: 'menu'
        };

        $scope.refreshPage = refreshPage;

        function refreshPage() {
            $state.reload();
        }

    }

    ToolbarController.$inject = ['$scope', '$state'];
    return ToolbarController;
});
