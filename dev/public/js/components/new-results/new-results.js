"use strict";

const newResults = {
    templateUrl: "js/components/new-results/new-results.html",
    controller: ["ProjectService", "$location", function(ProjectService, $location) {
        const vm = this; 
        vm.getMyPlaylist = () => {
            vm.link = ProjectService.getAnother();
        };
        vm.nextUp = () => {
            $location.path("/extra-playlist");
        };
        vm.getMyPlaylist();
    }]
}; 


angular
    .module("App")
    .component("newResults", newResults);