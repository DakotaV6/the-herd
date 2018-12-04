"use strict";
const sideBar = {
    templateUrl: "js/components/side-bar/side-bar.html",
    controller: ["$location", function($location) {
        const vm = this;
        vm.goHome = () => {
            $location.path("/about");
        };
    }]
}; 


angular
    .module("App")
    .component("sideBar", sideBar);