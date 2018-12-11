"use strict";

function draggable($timeout) {
    return {
        restrict: "A",
        link: function ($scope, $element, $attrs) {
            var startX = 0;
            var startY = 0;
            var endX = 0;
            var endY = 0;
            $timeout(function () {
                $scope.$apply(function () {
                    console.log($element);
                    $element
                        .on("mousedown", (event) => {
                            event.preventDefault();
                            event.draggable = true;
                            startX = event.screenX;
                            startY = event.screenY;
                            console.log(startX, startY);
                            return startX, startY;
                        })
                        .on("mousemove", (event) => {
                            
                        })
                        .on("mouseup", (event) => {
                            event.draggable = false;
                            endX = event.screenX;
                            endY = event.screenY;
                            console.log(endX, endY);
                            var distanceTraveled = startY - endY;
                            console.log(distanceTraveled);
                            if (distanceTraveled >= 300) {
                                console.log("dakota has a great metabolism");
                            }
                        })
                })
            }, 1600);

        }
    };
}

angular
    .module("App")
    .directive("draggable", draggable);
