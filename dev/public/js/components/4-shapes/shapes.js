"use strict";

const shapes = {
    templateUrl: "js/components/4-shapes/shapes.html",
    controller: ["ProjectService", "$location", "$timeout", "$scope", function(ProjectService, $location, $timeout, $scope) {
        const vm = this;
        vm.nextUp = () => {
            $location.path("/results");
        };
        vm.toSquare = () => { 
            anime({
            targets: '#circleOption',
            opacity: .7,
            backgroundColor: '#66b572',
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
        vm.toPolygon = () => {
            anime({
            targets: '.star',
            points: '310.89 255.66 175.92 333.57 40.96 255.63 40.98 99.79 175.95 21.88 310.9 99.81 310.89 255.66',
            fill: ['rgb(167, 234, 229)', 'rgb(198, 14, 142)'],
            easing: 'easeInOutExpo'
          });
        };
        vm.toTriangle = () => {
            anime({
            targets: '.diamond',
            points: '64 128 8.574 331 272 175.59 46.22 20.18 272',
            fill: ['rgb(163, 125, 183)', 'rgb(229, 167, 44)'],
            easing: 'easeInOutExpo'
          });
        };
        $timeout (function() {
            vm.addScore1 = () => {
                ProjectService.addScore1();
            };
            vm.addScore2 = () => {
                ProjectService.addScore2();
            };
            vm.addScore3 = () => {
                ProjectService.addScore3();
            };
        }, 1600);
    }]
};

angular 
    .module("App")
    .component("shapes", shapes);