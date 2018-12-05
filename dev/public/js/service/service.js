"use strict";
function ProjectService($http, $location) {
    const self = this;
    self.playlists = [];
    self.playlistLinks = [];
    self.getPlaylists = () => {
        return $http({
            method: "GET",
            url: `/playlists`
        }).then((response) => {
            self.playlists = response.data.playlists.items;
        });
    };
    self.scoreBoard= 0;
    self.addScore1 = () => {
        self.scoreBoard += 1;
        console.log(`score is ${self.scoreBoard}`)
    };
    self.addScore2 = () => {
        self.scoreBoard += 2;
        console.log(`score is ${self.scoreBoard}`)
    };
    self.addScore3 = () => {
        self.scoreBoard += 3;
        console.log(`score is ${self.scoreBoard}`)
    };
    self.resetScore = () => {
        self.scoreBoard = 0;
        console.log(`score is ${self.scoreBoard}`)
    };
    self.playlistList = () => {
        // console.log(self.playlists);
        for (let playlist of self.playlists) {
            self.playlistLinks.push("https://open.spotify.com/embed/user/spotify/playlist/" + playlist.id);
        }
        console.log(self.playlistLinks);
    }
    self.getOne = () => {
        return playlistLinks[self.scoreBoard];
    }
}


angular
    .module("App")
    .service("ProjectService", ProjectService); 