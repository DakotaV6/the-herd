"use strict";

function jiggle() {
    return {
        restrict: "A",
        link: function ($scope, $element, $attrs) {
            $element
                .on("mouseenter", (event) => {
                    event.target.classList.add("animated", "jello");
                })
                .on("mouseleave", (event) => {
                    event.target.classList.remove("animated", "jello");
                })
                .on("click", (event) => {
                    event.target.classList.add("cont-jello");
                });
        }
    };
}

angular
    .module("App")
    .directive("jiggle", jiggle);
