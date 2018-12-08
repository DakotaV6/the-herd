"use strict";

function hideAnimal($timeout) {
    return {
        restrict: "A",
        link: function ($scope, $element, $attrs) {
            $timeout(function () {
                $scope.$apply(function () {
                    $element
                        .on("click", (event) => {
                            const options = event.target.attributes[3].value;
                            const icon = event.target.parentElement.children;
                            let i;
                            for (i = 0; i < icon.length; i++) {
                                if (icon[i].attributes[3].value === options) {
                                    icon[i].hidden = false;
                                } else {
                                    icon[i].hidden = true;
                                }
                            }
                            event.target.classList.add("animal-anim");
                        });
                })
            }, 1600);

        }
    };
}

angular
    .module("App")
    .directive("hideAnimal", hideAnimal);