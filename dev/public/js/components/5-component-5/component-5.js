"use strict";

const component5 = {
    templateUrl: "js/components/5-component-5/component-5.html",
    controller: ["$location", function($location) {
        const vm = this;
        vm.nextUp = () => {
            $location.path("/results");
        };
    }]
};

angular 
    .module("App")
    .component("component5", component5);