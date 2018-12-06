"use strict";

const colors = {
    templateUrl: "js/components/2-component-2/component-2.html",
    controller: ["ProjectService", "$location", "$timeout", "$scope", function(ProjectService,$location, $timeout, $scope) {
        const vm = this;
        vm.btnDisplay = false;
        $timeout(function() {
            vm.showBtn = () => {
                vm.btnDisplay = true;
            };
            
        }, 2500);

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
        }, 2500);
        vm.getLinks = () => {
            ProjectService.playlistList(); 
        };
        vm.bounceOut = () => {
            $location.path("/component-2");
        };
    }]
};

angular 
    .module("App")
    .component("colors", colors);