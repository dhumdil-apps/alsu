define([], function () {
    'use strict';

    function HomeController($scope) {

        $scope.models = {
            selected: null,
            templates: [
                {
                    id: 0,
                    type: '',
                    name: 'trash'
                },
                {
                    id: 1,
                    type: "item",
                    name: "assign"
                },
                {
                    id: 2,
                    type: "item",
                    name: "write"
                },
                {
                    id: 3,
                    type: "item",
                    name: "read"
                },
                {
                    id: 4,
                    type: "container",
                    name: "if-else",
                    columns: [
                        [[]],
                        [[]]
                    ]
                }
            ],
            dropzones: {
                "A": [
                    {
                        "id": "1",
                        "type": "item",
                        "name": "assign"
                    },
                    {
                        "id": "3",
                        "type": "item",
                        "name": "read"
                    },
                    {
                        "id": "4",
                        "type": "container",
                        "name": "if",
                        "columns": [
                            [[
                                {
                                    "id": "1",
                                    "type": "item",
                                    "name": "assign"
                                },
                                {
                                    "id": "2",
                                    "type": "item",
                                    "name": "write"
                                }
                            ]],
                            [[
                                {
                                    "id": "2",
                                    "type": "item",
                                    "name": "write"
                                }
                            ]]
                        ]
                    },
                    {
                        "id": "2",
                        "type": "item",
                        "name": "write"
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
