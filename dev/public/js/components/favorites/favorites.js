"use strict";

const favorites = {
    templateUrl: "js/components/favorites/favorites.html",
    controller: ["ProjectService", "$location", function(ProjectService, $location) {
        const vm = this;
        vm.favePlaylists = ProjectService.favePlaylists;
        vm.deletePlaylist = ($index) => {
            ProjectService.deleteFavorite($index, 1);
        };
        vm.viewFavorite = () => {
            $location.path("/fav-results");
        };
    }]
};


angular
    .module("App")
    .component("favorites", favorites);