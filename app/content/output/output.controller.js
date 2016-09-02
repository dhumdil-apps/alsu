define([], function () {
    'use strict';

    function OutputController($scope) {

        //
        $scope.output = '';

        //
        $scope.showOutput = showOutput;

        //
        $scope.$on('run-output', function(event, args) {

            showOutput(args.any);
        });


        /**
         * tralalla
         * @param x
         */
        function showOutput(x) {
            $scope.output = x;
        }
        
    }

    OutputController.$inject = ['$scope'];
    return OutputController;
});
