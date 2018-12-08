"use strict";

const extraResults = {
    templateUrl: "js/components/extra-results/extra-results.html",
    controller: ["ProjectService", "$location", function(ProjectService, $location) {
        const vm = this; 
        vm.getMyPlaylist = () => {
            vm.playlist = ProjectService.getAnother();
        };
        vm.nextUp = () => {
            $location.path("/new-playlist");
        };
        vm.getMyPlaylist();

        vm.saveToFavorites = () => {
            ProjectService.saveToFavorites(vm.playlist); 
        }
    }]
}; 


angular
    .module("App")
    .component("extraResults", extraResults);