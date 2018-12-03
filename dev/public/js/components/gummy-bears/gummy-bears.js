"use strict";

const gummyBears = {
    templateUrl: "js/components/gummy-bears/gummy-bears.html",
    controller: [function() {
        const vm = this;
    }]
}

angular
.module("App")
.component("gummyBears", gummyBears);