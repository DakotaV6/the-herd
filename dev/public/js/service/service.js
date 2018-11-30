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

}


angular
    .module("App")
    .service("ProjectService", ProjectService); 