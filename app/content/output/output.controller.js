define([], function () {
    'use strict';

    function OutputController($scope) {

        //
        $scope.output = [];

        //
        $scope.showOutput = showOutput;

        //
        $scope.$on('run-output', function(event, args) {

            $scope.output = [];

            args.forEach(function(x){
                showOutput(x.content[1][0]);
            });

        });

        /**
         * tralalla
         * @param x
         */
        function showOutput(x) {
            $scope.output.push(x);
        }
        
    }

    OutputController.$inject = ['$scope'];
    return OutputController;
});
