define([], function () {
    'use strict';

    function HomeController($scope) {

        $scope.models = {
            selected: null,
            templates: [
                {
                    type: "item",
                    id: 2
                },
                {
                    type: "container",
                    id: 1,
                    columns: [[], []]
                }
            ],
            dropzones: {
                "A": [
                    {
                        "type": "item",
                        "id": "1"
                    },
                    {
                        "type": "container",
                        "id": 1,
                        "columns": [
                            [
                                {
                                    "type": "item",
                                    "id": "2"
                                },
                                {
                                    "type": "item",
                                    "id": "3"
                                }
                            ],
                            [
                                {
                                    "type": "item",
                                    "id": "4"
                                }
                            ]
                        ]
                    }
                ]
            }
        };

        $scope.$watch('models.dropzones', function(model) {
            $scope.modelAsJson = angular.toJson(model, true);
        }, true);
        init();

        function init() {
            $scope.goToState('main.home.code');
        }

    }

    HomeController.$inject = ['$scope'];
    return HomeController;
});
