"use strict";

function hideAnimal() {
    return {
        restrict: "A",
        templateNamespace: "svg",
        link: function($scope, $element, $attrs) {
            $element
            .on("click", (event) => {
                console.log($element);
                const options = event.target.attributes[0].value;
                // [
                    
                //     1].innerHTML;
                console.log(options);
                // const icon = event.target.parentElement.children;
                // let i;
                // for (i = 0; i < icon.length; i++) {
                //     if (icon[i].attributes[2].value === options) {
                //         icon[i].hidden = false;
                //     } else {
                //     icon[i].hidden = true;
                //     }
                // }
            });
        }
    };
}

angular
.module("App")
.directive("hideAnimal", hideAnimal);