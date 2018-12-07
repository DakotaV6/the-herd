"use strict";

const results = {
    templateUrl: "js/components/results/results.html",
    controller: ["ProjectService", "$location", function(ProjectService, $location) {
        const vm = this; 
        vm.getMyPlaylist = () => {
            vm.playlist = ProjectService.getOne();
        };
        vm.nextUp = () => {
            $location.path("/new-playlist");
        };
        vm.getMyPlaylist();
        
        vm.saveToFavorites = () => {
            ProjectService.saveToFavorites(vm.playlist); 
        }; 
    }]
}; 


angular
    .module("App")
    .component("results", results);