"use strict";

const results = {
    templateUrl: "js/components/results/results.html",
    controller: ["ProjectService", "$location", function(ProjectService, $location) {
        const vm = this; 
        vm.isDisabled= false;
        vm.getMyPlaylist = () => {
            vm.playlist = ProjectService.getOne();
        };
        vm.nextUp = () => {
            $location.path("/new-playlist");
        };
        vm.getMyPlaylist();

        vm.saveToFavorites = () => {
            ProjectService.saveToFavorites(vm.playlist);
            vm.isDisabled = true;
        }; 

        vm.favePlaylists = ProjectService.favePlaylists; 

        vm.goToFavorites = () => {
            $location.path("/favorites");
        };

    }]
}; 


angular
    .module("App")
    .component("results", results);