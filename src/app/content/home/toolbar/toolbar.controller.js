define([], function () {
    'use strict';

    function ToolbarController($scope, $state) {

        $scope.toolbar = {
            logo: 'REFRESH',
            run: 'RUN',
            settings: 'SETTINGS'
        };

        $scope.refreshPage = refreshPage;

        function refreshPage() {
            $state.reload();
        }

    }

    ToolbarController.$inject = ['$scope', '$state'];
    return ToolbarController;
});
