"use strict";

function hideOptions() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $element
            .on("click", (event) => {
                console.log($element);
                const selectedOption = event.target.src;
                const allOptions = event.target.parentElement.children;
                let i;
                for (i = 0; i < allOptions.length; i++) {
                    if (allOptions[i].src === selectedOption) {
                        allOptions[i].hidden = false;
                        allOptions[i].addClass = "continuous-jello";
                    } else {
                    allOptions[i].hidden = true;
                    }
                }
            });
        }
    };
}

angular
.module("App")
.directive("hideOptions", hideOptions);
