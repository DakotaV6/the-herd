"use strict";

const results = {
    templateUrl: "js/components/results/results.html",
    controller: ["ProjectService", function(ProjectService) {
        const vm = this; 
        vm.getPlaylists = () => {
            ProjectService.getPlaylists().then((response) => {
                console.log(response);
                vm.playlists = response.data.playlists.items; 
            });
        };
    }]
}; 


angular
    .module("App")
    .component("results", results);