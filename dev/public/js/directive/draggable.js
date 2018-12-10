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
                    $element
                        .on("mousedown", (event) => {
                            event.preventDefault();
                            event.target.draggable = true;
                            var startX = event.screenX;
                            var startY = event.screenY;
                            console.log(startX, startY);
                            return startX, startY;
                        })
                        
                        .on("mouseup", (event) => {
                            event.target.draggable = false;
                            var endX = event.screenX;
                            var endY = event.screenY;
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
