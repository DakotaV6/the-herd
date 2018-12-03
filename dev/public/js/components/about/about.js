"use strict";
const about = {
    templateUrl: "js/components/about/about.html"
    ,

    controller: ["ProjectService", "$location", function(ProjectService, $location) {
        const vm = this; 
        // vm.getPlaylists = () => {
        //     ProjectService.getPlaylists().then((response) => {
        //         console.log(response);
        //         vm.playlists = response.data.playlists.items; 
        //     });
        // };

        vm.startQuestions = () => {
            $location.path("/component-1");
        };
    }]
}; 


angular
    .module("App")
    .component("about", about);

    // need to call $ctrl.getPlaylist();
    // <section ng-repeat= "playlist in $ctrl.playlists">
    //     <p>{{playlist.name}}</p>
    // </section>`
    