"use strict";
const home = {
    template: `
        <button ng-click= "$ctrl.getPlaylists();">Get info</button>
        <section ng-repeat= "playlist in $ctrl.playlists">
            <p>{{playlist.name}}</p>
        </section>

      
    `,

    controller: ["ProjectService", function(ProjectService) {
        const vm = this; 
        vm.getPlaylists = () => {
            ProjectService.getPlaylists().then((response) => {
                console.log(response);
                vm.playlists = response.data.playlists.items; 
            })
        }
        
    }]
}; 


angular
    .module("App")
    .component("home", home)