"use strict";

function jiggle() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $element.on("click", (event) => {
                if(event.target.classList.length < 3){
                event.target.classList += " animated jello ";
                }
            });
        }
    };
}

angular
.module("App")
.directive("jiggle", jiggle);