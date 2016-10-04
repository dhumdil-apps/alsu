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
                    role: "if",
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

        // $scope.$watch('models.dropzones', function(model) {
        //     $scope.modelAsJson = angular.toJson(model, true);
        // }, true);

        $scope.compileAndRun = compileAndRun;

        init();

        function init() {
            $scope.goToState('main.home.code');
        }

        function compileAndRun() {
            $scope.modelAsJson = angular.toJson($scope.models.dropzones, true);
        }
    }

    HomeController.$inject = ['$scope'];
    return HomeController;
});
