"use strict";

function jiggle() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $element
            .on("mouseenter", (event) => {
                event.target.classList += " animated jello";
            })
            .on("mouseleave", (event) => {
                event.target.removeClass = "animated jello";
            });
            // .on("click", (event) => {
            //     event.target.classList += "continuous-jello";
            // });
        }
    };
}

angular
.module("App")
.directive("jiggle", jiggle);