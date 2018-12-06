"use strict";

function hideAnimal() {
    return {
        restrict: "A",  
        link: function($scope, $element, $attrs) {
            $element
            .on("click", (event) => {
                console.log($element);
                const options = event.target.attributes[3].value;
                console.log(options);
                const icon = event.target.parentElement.children;
                console.log(icon);
                let i;
                for (i = 0; i < icon.length; i++) {
                    if (icon[i].attributes[3].value === options) {
                        icon[i].hidden = false;
                    } else {
                    icon[i].hidden = true;
                    }
                }
            });
        }
    };
}

angular
.module("App")
.directive("hideAnimal", hideAnimal);