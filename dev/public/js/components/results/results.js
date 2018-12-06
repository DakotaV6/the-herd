"use strict";

const results = {
    templateUrl: "js/components/results/results.html",
    controller: ["ProjectService", "$location", function(ProjectService, $location) {
        const vm = this; 
        vm.getMyPlaylist = () => {
            vm.link = ProjectService.getOne();
        };
        vm.getMyPlaylist();
    }]
}; 


angular
    .module("App")
    .component("results", results);