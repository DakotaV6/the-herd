"use strict";

const animals = {
    templateUrl: "js/components/2-animals/animals.html",
    controller: ["ProjectService", "$location", "$timeout", "$scope", function(ProjectService, $location, $timeout, $scope) {
        const vm = this;
        vm.btnDisplay = false;
        $timeout(function() {
            vm.showBtn = () => {
                vm.btnDisplay = true;
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
        vm.nextUp = () => {
            $location.path("/3");
        };

    }]
};
angular 
    .module("App")
    .component("animals", animals);