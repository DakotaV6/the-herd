"use strict";

const component2 = {
    templateUrl: "js/components/2-component-2/component-2.html",
    controller: ["$location", function($location) {
        const vm = this;
        vm.bounceInBool= true;
        vm.nextUp = () => {
            $location.path("/component-3");
        };
    }]
};

angular 
    .module("App")
    .component("component2", component2);