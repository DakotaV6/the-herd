"use strict";
function ProjectService($http, $location) {
    const self = this;
    self.playlists = [];
    self.getPlaylists = () => {
        return $http({
            method: "GET",
            url: `/playlists`
        }).then((response) => {
            self.playlists = response.data.playlists.items;
        });
    };
    self.playlistLinks = [];
    self.playlistList = () => {
        // console.log(self.playlists);
        for (let playlist of self.playlists) {
            self.playlistLinks.push("https://open.spotify.com/embed/user/spotify/playlist/" + playlist.id);
        }
        console.log(self.playlistLinks);
    }
    self.scoreBoard = 0;
    self.addScore10 = () => {
        self.scoreBoard += 10;
    }
    self.getOne = () => {
        return playlistLinks[self.scoreBoard];
    }




}


angular
    .module("App")
    .service("ProjectService", ProjectService); 