"use strict";

const orbs = {
    templateUrl: "js/components/6-orbs/orbs.html",
    controller: ["ProjectService", "$location", "$timeout", "$scope", function (ProjectService, $location, $timeout, $scope) {
        const vm = this;
        $timeout(function () {
            vm.dragItem = document.querySelector("#item");
            vm.container = document.querySelector("#container");

            vm.active = false;
            vm.currentX;
            vm.currentY;
            vm.initialX;
            vm.initialY;
            vm.xOffset = 0;
            vm.yOffset = 0;

            vm.container.addEventListener("touchstart", vm.dragStart, false);
            vm.container.addEventListener("touchend", vm.dragEnd, false);
            vm.container.addEventListener("touchmove", vm.drag, false);

            vm.container.addEventListener("mousedown", vm.dragStart, false);
            vm.container.addEventListener("mouseup", vm.dragEnd, false);
            vm.container.addEventListener("mousemove", vm.drag, false);

            vm.dragStart = (event) => {
                if (event.type === "touchstart") {
                    vm.initialX = event.touches[0].clientX - xOffset;
                    vm.initialY = event.touches[0].clientY - yOffset;
                } else {
                    vm.initialX = event.clientX - xOffset;
                    vm.initialY = event.clientY - yOffset;
                }

                if (event.target === vm.dragItem) {
                    vm.active = true;
                }
            }

            vm.dragEnd = (event) => {
                vm.initialX = vm.currentX;
                vm.initialY = vm.currentY;

                vm.active = false;
            }

            vm.drag = (event) => {
                if (active) {

                    vm.event.preventveventntDefault();

                    if (event.type === "touchmove") {
                        vm.currentX = event.touches[0].clientX - initialX;
                        vm.currentY = event.touches[0].clientY - initialY;
                    } else {
                        vm.currentX = event.clientX - initialX;
                        vm.currentY = event.clientY - initialY;
                    }

                    vm.xOffset = vm.currentX;
                    vm.yOffset = vm.currentY;

                    setTranslate(vm.currentX, vm.currentY, vm.dragItem);
                }
            }

            vm.setTranslate = (xPos, yPos, el) => {
                el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
            }


            vm.nextUp = () => {
                $timeout(function () {
                    $scope.$apply(function () {
                        $location.path("/results");
                    });
                }, 700);
            }
            vm.getLinks = () => {
                ProjectService.playlistList();
            };
        }, 1600);

        $timeout(function () {
            vm.addScore1 = () => {
                ProjectService.addScore1();
            };
            vm.addScore2 = () => {
                ProjectService.addScore2();
            };
            vm.addScore3 = () => {
                ProjectService.addScore3();
            };
        }, 1600);


    }]
};

angular
    .module("App")
    .component("orbs", orbs);