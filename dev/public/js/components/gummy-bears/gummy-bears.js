"use strict";

const gummyBears = {
    templateUrl: "js/components/gummy-bears/gummy-bears.html",
    controller: ["ProjectService", "$location", function(ProjectService, $location){
        const vm = this;
        // vm.nextUp = () => {
        //     $location.path("/component-2");
        // }; 
        vm.bounceOutBool = false;
        vm.bounceOut = () => {
            vm.bounceOutBool= true;
            $location.path("/component-2")
        };

        // vm.fadeInLeft = () => {
        //     vm.bounceOutBool= true; 
        // }
    }]
}

angular
.module("App")
.component("gummyBears", gummyBears);