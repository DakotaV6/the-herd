"use strict";

const favResults = {
    templateUrl: "js/components/fav-results/fav-results.html",
    controller: ["ProjectService", function(ProjectService) {

    }]
};

angular 
    .module("App")
    .component("favResults", favResults);