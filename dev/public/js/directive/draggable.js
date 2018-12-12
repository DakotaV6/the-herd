"use strict";

function draggable($timeout, $document, $location) {
    return {
        restrict: "A",
        link: function ($scope, $element, $attrs) {
            // var startX = 0, startY = 0, endY = 0, x = 0, y = 0;
            var currentX, currentY, initialX, initialY, xOffset, yOffset;
            $timeout(function () {
                $scope.$apply(function () {
                    $element.on("touchstart", dragStart, false);
                    $element.on("touchend", dragEnd, false);
                    $element.on("touchmove", drag, false);

                    $element.on("mousedown", dragStart, false);
                    $element.on("mouseup", dragEnd, false);
                    $element.on("mousemove", drag, false);

                    function dragStart(event) {
                        if (event.type === "touchstart") {
                            initialX = event.touches[0].clientX - xOffset;
                            initialY = event.touches[0].clientY - yOffset;
                        } else {
                            $element.css({ cursor: "grabbing" });

                            initialX = event.clientX - xOffset;
                            initialY = event.clientY - yOffset;
                        }
                    };

                    function drag(event) {
                        event.preventDefault();
                        if (event.type === "touchmove") {
                            currentX = event.touches[0].clientX - initialX;
                            currentY = event.touches[0].clientY - initialY;
                        } else {
                            currentX = event.clientX - initialX;
                            currentY = event.clientY - initialY;
                        }

                        xOffset = currentX;
                        yOffset = currentY;

                        $element.css({
                            zIndex: 2,
                            position: "relative",
                            top: currentY + "px",
                            left: currentX + "px"
                        });
                    };

                    function dragEnd(event) {
                        $element.css({ cursor: "grab" });
                        var distanceTraveled = initialY - currentY;
                        if (distanceTraveled >= 200) {
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
                        } else if (distanceTraveled < 200) {
                            $element.css({
                                top: "0%",
                                left: "0%"
                            })
                        }
                    };

                    // $element
                    //     .on("mousedown", (event) => {
                    //         event.preventDefault();
                    //         startX = event.screenX;
                    //         startY = event.screenY;
                    //         $element.css({cursor: "grabbing"})
                    //         $document.on("mousemove", mousemove);
                    //         $document.on("mouseup", mouseup);
                    //     })
                    // .on("touchstart", (event) => {
                    //     event.preventDefault();
                    //     startX = event.screenX;
                    //     startY = event.screenY;
                    //     $document.on("touchmove", mousemove);
                    //     $document.on("touchend", mouseup);
                    // })
                    //     function mousemove(event) {
                    //         y = event.screenY - startY;
                    //         x = event.screenX - startX;
                    //         $element.css({
                    //             zIndex: 2,
                    //             position: "relative",
                    //             top: y + "px",
                    //             left: x + "px"
                    //         })
                    //     }
                    //     function mouseup(event) {
                    //         $element.css({ cursor: "grab" })
                    //         endY = event.screenY;
                    //         var distanceTraveled = startY - endY;
                    //         if (distanceTraveled >= 200) {
                    //             const options = event.target.attributes[3].value;
                    //             const icon = event.target.parentElement.children;
                    //             let i;
                    //             for (i = 0; i < icon.length; i++) {
                    //                 if (icon[i].attributes[3].value === options) {
                    //                     icon[i].hidden = false;
                    //                 } else {
                    //                     icon[i].hidden = true;
                    //                 }
                    //             }
                    //             $element.css({
                    //                 left: "0%",
                    //                 top: "0%",
                    //             });
                    //             $timeout(function () {
                    //                 $scope.$apply(function () {
                    //                     $location.path("/3");
                    //                 });
                    //             }, 1600);
                    //         } else if (distanceTraveled < 200) {
                    //             $element.css({
                    //                 top: "0%",
                    //                 left: "0%"
                    //             })
                    //         }

                    //         $document.unbind("mousemove", mousemove);
                    //         // $document.unbind("touchmove", mousemove);
                    //         $document.unbind("mouseup", mouseup);
                    //         // $document.unbind("touchend", mouseup);
                    //     }
                    // })
                }, 1600);
            });
        }
    }
}
angular
    .module("App")
    .directive("draggable", draggable);
