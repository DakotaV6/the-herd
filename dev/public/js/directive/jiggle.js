"use strict";

function jiggle() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $element
            .on("mouseenter", (event) => {
                event.target.classList += " animated jello"
            })
            .on("mouseleave", (event) => {
                event.target.classList= "gummy-bear"
            });

        }
    };
}

angular
.module("App")
.directive("jiggle", jiggle);