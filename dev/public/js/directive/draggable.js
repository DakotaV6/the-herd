"use strict";

function draggable($timeout, $document, $location, $window) {
    return {
        restrict: "A",
        link: function ($scope, $element, $attrs) {
            if ($window.innerWidth < 768) {
                $element.on("click", (event) => {
                    hideAnimals();
                })
            } else {
                var startX = 0, startY = 0, endY = 0, x = 0, y = 0;
                $timeout(function () {
                    $scope.$apply(function () {
                        $element
                            .on("mousedown", (event) => {
                                event.preventDefault();
                                startX = event.screenX;
                                startY = event.screenY;
                                $element.css({ cursor: "grabbing" })
                                $document.on("mousemove", mousemove);
                                $document.on("mouseup", mouseup);
                            });
                        function mousemove(event) {
                            y = event.screenY - startY;
                            x = event.screenX - startX;
                            $element.css({
                                zIndex: 2,
                                position: "relative",
                                top: y + "px",
                                left: x + "px"
                            })
                        };
                        function mouseup(event) {
                            $element.css({ cursor: "grab" })
                            endY = event.screenY;
                            var distanceTraveled = startY - endY;
                            if (distanceTraveled >= 200) {
                                $element.addClass("animal-anim");
                                hideAnimals();
                            } else if (distanceTraveled < 200) {
                                $element.css({
                                    top: "0%",
                                    left: "0%"
                                })
                            }
                            $document.unbind("mousemove", mousemove);
                            $document.unbind("mouseup", mouseup);
                        };
                    })
                }, 1600);
            }
            function hideAnimals() {
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
                $element.css({
                    left: "0%",
                    top: "0%",
                });
                $timeout(function () {
                    $scope.$apply(function () {
                        $location.path("/3");
                    });
                }, 1600);
            }
        }
    }
}
angular
    .module("App")
    .directive("draggable", draggable);
