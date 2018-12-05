"use strict";

const component4 = {
    templateUrl: "js/components/4-component-4/component-4.html",
    controller: ["$location", function($location) {
        const vm = this;
        vm.nextUp = () => {
            $location.path("/component-5");
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
    .component("component4", component4);