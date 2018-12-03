"use strict";

const component4 = {
    templateUrl: "js/components/4-component-4/component-4.html",
    controller: ["$location", function($location) {
        const vm = this;
        vm.nextUp = () => {
            $location.path("/component-5");
        };
    }]
};

angular 
    .module("App")
    .component("component4", component4);