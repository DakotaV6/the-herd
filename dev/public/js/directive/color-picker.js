"use strict";

function colorPicker() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $element
            .on("click", (event) => {
                event.target.offsetParent.classList = event.target.classList[1];
            });
        }
    };
}

angular
.module("App")
.directive("colorPicker", colorPicker);