"use strict";
function ProjectService($http, $location, $timeout) {
    const self = this;
    self.playlists = [];
    self.playlistLinks = [];
    self.favePlaylists = [];
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
            self.playlistLinks.push({
                link: "https://open.spotify.com/embed/user/spotify/playlist/" + playlist.id,
                name: playlist.name
            });
        }
    };
    self.getOne = () => {
        if (self.scoreBoard > self.playlistLinks.length) {
            return {
                link: "https://open.spotify.com/embed/track/7GhIk7Il098yCjg4BQjzvb",
                name: "Your score was insane!"
            };
        } else {
            return self.playlistLinks[self.scoreBoard];
        }
    };
    self.getAnother = () => {
        if (self.playlistLinks.length === 1) {
            return {
                link: "https://open.spotify.com/embed/track/7GhIk7Il098yCjg4BQjzvb",
                name: "No playlists left."
            };
        } else {
            self.playlistLinks.splice(self.scoreBoard, 1);
            self.scoreBoard = Math.floor(Math.random() * self.playlistLinks.length);
            return self.playlistLinks[self.scoreBoard];
        }
    };
    self.saveToFavorites = (playlist) => {
        console.log("Added to favorites");
        self.favePlaylists.push(playlist);
    };

}


angular
    .module("App")
    .service("ProjectService", ProjectService); 
