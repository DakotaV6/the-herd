"use strict";

const shapes = {
    templateUrl: "js/components/4-shapes/shapes.html",
    controller: ["ProjectService", "$location", function(ProjectService,$location) {
        const vm = this;
        vm.nextUp = () => {
            $location.path("/results");
        };
        vm.toSquare = () => { 
            anime({
                targets: '#circleOption',
                opacity: .7,
                backgroundColor: '#F00',
                borderRadius: ['5em', '0em'],
                easing: 'easeInOutQuad'
            });
            ProjectService.addScore2();

        };
        vm.toCircle = () => {
            anime({
                targets: '#squareOption',
                opacity: .7,
                backgroundColor: '#00F',
                borderRadius: ['0em', '5em'],
                easing: 'easeInOutQuad'
            });
            ProjectService.addScore1();
        };
        vm.toPoly = () => {
            anime({
                targets: 'polygon',
                points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96'
            });
            ProjectService.addScore3();  
        };
    }]
};

angular 
    .module("App")
    .component("shapes", shapes);