"use strict";

const favorites = {
    templateUrl: "js/components/favorites/favorites.html",
    controller: ["ProjectService", "$location", function(ProjectService, $location) {
        const vm = this;
        vm.favePlaylists = ProjectService.favePlaylists;
        vm.deletePlaylist = (playlist, $index) => {
            ProjectService.deletePlaylist(playlist, $index);
        };
    }]
};


angular
    .module("App")
    .component("favorites", favorites);