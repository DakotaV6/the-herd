"use strict";

function backgroundReset() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $element
            .on("click", (event) => {
                event.target.offsetParent.classList = "";
            });
        }
    };
}

angular
.module("App")
.directive("backgroundReset", backgroundReset);
