define([], function () {
    'use strict';

    function MainController($scope) {

        $scope.models = {
            selected: null,
            templates: [
                {
                    type: "item",
                    id: "Write('Hello World!');",
                    content: [
                        "Write",
                        [
                            "(",
                            "Hello World",
                            ", var",
                            ")"
                        ]
                    ]
                }
            ],
            dropzones: {
                "Program Hello_World;": {},
                "Begin": [
                    {
                        "type": "item",
                        "id": "Write('Hello World!');"
                    },
                    {
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
