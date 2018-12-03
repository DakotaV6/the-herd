"use strict";

const component3 = {
    templateUrl: "js/components/3-component-3/component-3.html",
    controller: ["$location", function($location) {
        const vm = this;
        vm.nextUp = () => {
            $location.path("/component-4");
        };
    }]
};

angular 
    .module("App")
    .component("component3", component3);