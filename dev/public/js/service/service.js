"use strict";
function ProjectService($http, $location, $timeout) {
    const self = this;
    self.playlists = [];
    self.playlistLinks = [];
    self.scoreBoard = 0;
    self.getPlaylists = () => {
        return $http({
            method: "GET",
            url: `/playlists`
        }).then((response) => {
            self.playlists = response.data.playlists.items;
        });
    };

    // SCORE ADDING METHODS

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
        self.playlists = [];
        self.playlistLinks = [];
        console.log(`score is ${self.scoreBoard}`)
    };

    self.playlistList = () => {
        for (let playlist of self.playlists) {
            self.playlistLinks.push("https://open.spotify.com/embed/user/spotify/playlist/" + playlist.id);
        }
        console.log(self.playlistLinks);
    };
    self.getOne = () => {
        if (self.scoreBoard > self.playlistLinks.length) {
            return "https://open.spotify.com/embed/track/7GhIk7Il098yCjg4BQjzvb";
        } else {
            return self.playlistLinks[self.scoreBoard];
        }
    };
    self.getAnother = () => {
        if (self.playlistLinks.length === 1) {
            return "https://open.spotify.com/embed/track/7GhIk7Il098yCjg4BQjzvb";
        } else {
            self.playlistLinks.splice(self.scoreBoard, 1);
            self.scoreBoard = Math.floor(Math.random() * self.playlistLinks.length);
            return self.playlistLinks[self.scoreBoard];
        }
    };
}


angular
    .module("App")
    .service("ProjectService", ProjectService); 