"use strict";

const gummyBears = {
    templateUrl: "js/components/3-gummy-bears/gummy-bears.html",
    controller: ["ProjectService", "$location","$timeout", "$scope", function(ProjectService, $location, $timeout, $scope){
        const vm = this;
        $timeout(function() {
            vm.nextUp = () => {
                $timeout(function() {
                    $scope.$apply(function() {
                        $location.path("/4");
                    });
                }, 800);
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
}

angular
.module("App")
.component("gummyBears", gummyBears);