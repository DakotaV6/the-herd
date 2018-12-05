"use strict";
const sideBar = {
    templateUrl: "js/components/side-bar/side-bar.html",
    controller: ["ProjectService", "$location", function(ProjectService, $location) {
        const vm = this;
        vm.goHome = () => {
            $location.path("/about");
        };
        vm.resetScore = () => {
            ProjectService.resetScore();
        };
    }]
}; 


angular
    .module("App")
    .component("sideBar", sideBar);