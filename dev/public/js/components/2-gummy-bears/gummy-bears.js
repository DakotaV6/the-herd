"use strict";

const gummyBears = {
    templateUrl: "js/components/2-gummy-bears/gummy-bears.html",
    controller: ["ProjectService", "$location","$timeout", "$scope", function(ProjectService, $location, $timeout, $scope){
        const vm = this;
        vm.btnDisplay = false;
        vm.showBtn = () => {
            vm.btnDisplay = true;
        };
        vm.bounceOut = () => {
            $location.path("/component-3");
        };

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