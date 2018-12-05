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
    self.addScore10 = () => {
        scoreBoard += 10;
    }

}


angular
    .module("App")
    .service("ProjectService", ProjectService); 