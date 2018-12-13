"use strict";

const favResults = {
    templateUrl: "js/components/fav-results/fav-results.html",
    controller: ["ProjectService", "$location", function (ProjectService, $location) {
        const vm = this;
        vm.favePlaylists = ProjectService.favePlaylists;
        vm.getPlaylist = () => {
            vm.playlist = ProjectService.setFavorite();
        };
        vm.getPlaylist();
        vm.nextUp = () => {
            $location.path("/new-playlist");
        };
        vm.goToFavorites = () => {
            $location.path("/favorites");
        };
    }]
};

angular
    .module("App")
    .component("favResults", favResults);