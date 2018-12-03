"use strict";

const gummyBears = {
    templateUrl: "js/components/gummy-bears/gummy-bears.html",
    controller: ["ProjectService", "$location", function(ProjectService, $location){
        const vm = this;
        vm.nextUp = () => {
            $location.path("/component-2");
        }; 
    }]
}

angular
.module("App")
.component("gummyBears", gummyBears);