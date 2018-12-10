"use strict";

const elements = {
    templateUrl: "js/components/5-elements/elements.html",
    controller: ["$location", function($location) {
        const vm = this;
        vm.nextUp = () => {
            $location.path("/6");
        };
    }]
};

angular 
    .module("App")
    .component("elements", elements);