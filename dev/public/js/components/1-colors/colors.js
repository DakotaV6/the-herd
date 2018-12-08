"use strict";

const colors = {
    templateUrl: "js/components/1-colors/colors.html",
    controller: ["ProjectService", "$location", "$timeout", "$scope", function(ProjectService,$location, $timeout, $scope) {
        const vm = this;
        $timeout(function() {
            vm.rippleEffect = () => {
                anime({
                targets: event.target,
                opacity: {
                    value: [1, 0],
                    duration: 2000
                  },
                  scale: {
                    value: 10,
                    duration: 2000
                  },
                });
            };
            vm.nextUp = () => {
                $timeout(function() {
                    $scope.$apply(function() {
                        $location.path("/2");
                    });
                }, 700);
            }
            vm.getLinks = () => {
                ProjectService.playlistList(); 
            };
        }, 1600);

        $timeout (function() {
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
    .component("colors", colors);