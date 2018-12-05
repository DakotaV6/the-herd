"use strict";

const results = {
    templateUrl: "js/components/results/results.html",
    controller: ["ProjectService", "$location", function(ProjectService, $location) {
        const vm = this; 
    
    }]
}; 


angular
    .module("App")
    .component("results", results);