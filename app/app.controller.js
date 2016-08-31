define([], function () {
    'use strict';

    function MainController($scope) {

        $scope.models = {
            selected: null,
            templates: [
                {type: "item", id: 2},
                {type: "container", id: 1, columns: [[], []]}
            ],
            dropzones: {
                "Lesson1_Program1;": [
                    {
                        "type": "container",
                        "id": "Begin",
                        "columns": [
                            [
                                {
                                    "type": "item",
                                    "id": "Write('Hello World!');"
                                },
                                {
                                    "type": "item",
                                    "id": "Readln;"
                                }
                            ]
                        ]
                    },
                    {
                        "type": "item",
                        "id": "End."
                    }
                ]
            }
        };

        $scope.$watch('models.dropzones', function(model) {
            $scope.modelAsJson = angular.toJson(model, true);
        }, true);

    }

    MainController.$inject = ['$scope'];
    return MainController;
});
