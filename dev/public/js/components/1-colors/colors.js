"use strict";

const colors = {
    templateUrl: "js/components/1-colors/colors.html",
    controller: ["ProjectService", "$location", "$timeout", "$scope", function(ProjectService,$location, $timeout, $scope) {
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
        vm.getLinks = () => {
            ProjectService.playlistList(); 
        };
        vm.bounceOut = () => {
            $location.path("/2");
        };
    }]
};

angular 
    .module("App")
    .component("colors", colors);