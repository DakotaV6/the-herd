"use strict";

const shapes = {
    templateUrl: "js/components/4-shapes/shapes.html",
    controller: ["$location", function($location) {
        const vm = this;
        vm.nextUp = () => {
            $location.path("/results");
        };
        vm.toSquare = () => { anime({
            targets: '#circleOption',
            opacity: .7,
            backgroundColor: '#F00',
            borderRadius: ['5em', '0em'],
            easing: 'easeInOutQuad'
          });
        };
        vm.toCircle = () => {
            anime({
            targets: '#squareOption',
            opacity: .7,
            backgroundColor: '#00F',
            borderRadius: ['0em', '5em'],
            easing: 'easeInOutQuad'
          });
        };
    }]
};

angular 
    .module("App")
    .component("shapes", shapes);