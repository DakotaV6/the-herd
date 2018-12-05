"use strict";
function ProjectService($http, $location) {
    const self = this; 
    self.getPlaylists = () => {
        return $http({
            method: "GET",
            url: `/playlists`
        }).then((data) => {
            return data; 
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

}


angular
    .module("App")
    .service("ProjectService", ProjectService); 