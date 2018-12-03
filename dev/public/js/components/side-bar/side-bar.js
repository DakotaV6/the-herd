"use strict";
const sideBar = {
    templateUrl: "js/components/side-bar/side-bar.html",
    controller: [function() {
        const vm = this; 
    }]
}; 


angular
    .module("App")
    .component("sideBar", sideBar);