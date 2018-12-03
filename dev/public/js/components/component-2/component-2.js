"use strict";

const component2 = {
    templateUrl: "js/components/component-2/component-2.html",
    controller: [function() {
        const vm = this;
    }]
};

angular 
    .module("App")
    .component("component2", component2);