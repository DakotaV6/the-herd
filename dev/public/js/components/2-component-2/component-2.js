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
            // $timeout(function() {
            //     $scope.$apply(function() {
            //         $location.path("/component-2");
            //     });
            // }, 1000);
            $location.path("/component-2");
        };
        vm.getLinks = () => {
            ProjectService.playlistList(); 
        }
    }]
};

angular 
    .module("App")
    .component("colors", colors);