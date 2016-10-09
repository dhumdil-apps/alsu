define([], function () {
    'use strict';

    function ToolbarController($scope, $state) {

        $scope.toolbar = {
            logo: 'REFRESH',
            run: {
                name: 'RUN',
                isClicked: false
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
            
            $scope.toolbar.run.isClicked = ($scope.toolbar.run.isClicked) ? function(){
                $scope.$emmit('SHOW_OUTPUT');
                $scope.$emmit('HIDE_BLOCKS');
                $scope.$emmit('UPDATE_JSON');
                return false;
            }(): function() {
                $scope.$emmit('HIDE_OUTPUT');
                $scope.$emmit('SHOW_BLOCKS');
                return true;
            }();

        }

    }

    ToolbarController.$inject = ['$scope', '$state'];
    return ToolbarController;
});
