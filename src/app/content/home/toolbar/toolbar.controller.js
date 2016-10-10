define([], function () {
    'use strict';

    function ToolbarController($scope, $state) {

        $scope.toolbar = {
            logo: 'REFRESH',
            run: {
                name: 'RUN',
                icon: 'play_arrow',
                isActive: false
            },
            settings: 'SETTINGS'
        };

        $scope.refreshPage = refreshPage;
        $scope.run = run;

        /**
         * Reinitialize the variables
         */
        function refreshPage() {
            $state.reload();
        }

        /**
         * It should:
         * - show/hide output.tpl
         * - hide/show blocks.tpl
         * - 'update'/'ignore'' json
         */
        function run() {

            if ($scope.toolbar.run.isActive) {
                hideOutput();
            } else {
                hideBlocks()
            }

        }

        /**
         * Swap run-icon to stop-icon
         */
        function hideOutput() {
            $scope.$emit('HIDE_OUTPUT');
            $scope.$emit('SHOW_BLOCKS');

            $scope.toolbar.run.isActive = false;
            $scope.toolbar.run.icon = 'play_arrow';
        }

        function hideBlocks() {
            $scope.$emit('SHOW_OUTPUT');
            $scope.$emit('HIDE_BLOCKS');
            $scope.$emit('UPDATE_JSON');

            $scope.toolbar.run.isActive = true;
            $scope.toolbar.run.icon = 'stop';
        }

    }

    ToolbarController.$inject = ['$scope', '$state'];
    return ToolbarController;
});
