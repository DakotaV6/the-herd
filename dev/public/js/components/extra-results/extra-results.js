"use strict";

const extraResults = {
    templateUrl: "js/components/extra-results/extra-results.html",
    controller: ["ProjectService", "$location", function(ProjectService, $location) {
        const vm = this; 
        vm.getMyPlaylist = () => {
            vm.link = ProjectService.getAnother();
        };
        vm.nextUp = () => {
            $location.path("/new-playlist");
        };
        vm.getMyPlaylist();
    }]
}; 


angular
    .module("App")
    .component("extraResults", extraResults);