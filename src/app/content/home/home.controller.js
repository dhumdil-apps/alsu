define([], function () {
    'use strict';

    function HomeController($scope) {

        $scope.models = {
            selected: null,
            templates: [
                {
                    id: 1,
                    type: "item",
                    role: "assign"
                },
                {
                    id: 2,
                    type: "item",
                    role: "write"
                },
                {
                    id: 3,
                    type: "item",
                    role: "read"
                },
                {
                    id: 4,
                    type: "container",
                    role: "ifElse",
                    columns: [[], []]
                }
            ],
            dropzones: {
                "A": [
                    {
                        "id": "1",
                        "type": "item",
                        "role": "assign"
                    },
                    {
                        "id": "2",
                        "type": "item",
                        "role": "read"
                    },
                    {
                        "id": "3",
                        "type": "container",
                        "role": "if",
                        "columns": [
                            [[
                                {
                                    "id": "4",
                                    "type": "item",
                                    "role": "assign"
                                },
                                {
                                    "id": "5",
                                    "type": "item",
                                    "role": "write"
                                }
                            ]],
                            [[
                                {
                                    "id": "6",
                                    "type": "item",
                                    "role": "write"
                                }
                            ]]
                        ]
                    },
                    {
                        "id": "7",
                        "type": "item",
                        "role": "write"
                    }
                ]
            }
        };
        $scope.home = {
            toolbar: {},
            blocks: {
                isActive: true
            },
            code: {},
            output: {
                isActive: false
            }
        };

        init();

        function init() {
            $scope.goToState('main.home.code');
        }

        $scope.$on('SHOW_OUTPUT', function(){
            $scope.home.output.isActive = true;
        });
        $scope.$on('HIDE_OUTPUT', function(){
            $scope.home.output.isActive = false;
        });

        $scope.$on('SHOW_BLOCKS', function(){
            $scope.home.blocks.isActive = true;
        });
        $scope.$on('HIDE_BLOCKS', function(){
            $scope.home.blocks.isActive = false;
        });

        $scope.$on('UPDATE_JSON', function(){
            $scope.modelAsJson = angular.toJson($scope.models.dropzones, true);
            /** this watch is watching for changes and 'precompiles' after the change...
             *  can be used as error/warninng insector ;)
             */
            // $scope.$watch('models.dropzones', function(model) {
            //     $scope.modelAsJson = angular.toJson(model, true);
            // }, true);
        });

    }

    HomeController.$inject = ['$scope'];
    return HomeController;
});
