"use strict";

const colors = {
    templateUrl: "js/components/2-component-2/component-2.html",
    controller: ["ProjectService", "$location", "$timeout", "$scope", function(ProjectService,$location, $timeout, $scope) {
        const vm = this;
        vm.btnDisplay = false;
        vm.showBtn = () => {
            vm.btnDisplay = true;
        };
        vm.bounceOut = () => {
            $location.path("/component-2");
        };
        vm.addScore1 = () => {
            ProjectService.addScore1();
        };
        vm.addScore2 = () => {
            ProjectService.addScore2();
        };
        vm.addScore3 = () => {
            ProjectService.addScore3();
        };
        vm.getLinks = () => {
            ProjectService.playlistList(); 
        };
    }]
};

angular 
    .module("App")
    .component("colors", colors);