"use strict";

function hideGummy() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $element
            .on("click", (event) => {
                console.log($element);
                const img = event.target.attributes[3].value;
                const gummyBears = event.target.parentElement.children;
                let i;
                for (i = 0; i < gummyBears.length; i++) {
                    if (gummyBears[i].attributes[3].value === img) {
                        gummyBears[i].hidden = false;
                    } else {
                    gummyBears[i].hidden = true;
                    }
                }
            });
        }
    };
}

angular
.module("App")
.directive("hideGummy", hideGummy);