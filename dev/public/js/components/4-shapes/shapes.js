"use strict";

const shapes = {
    templateUrl: "js/components/4-shapes/shapes.html",
    controller: ["ProjectService", "$location", "$timeout", "$scope", function (ProjectService, $location, $timeout, $scope) {
        const vm = this;
        vm.btnDisplay = false;
        $timeout(function () {
            vm.showBtn = () => {
                vm.btnDisplay = true;
            };
        }, 1600);
        vm.nextUp = () => {
            $location.path("/results");
        };
        $timeout(function () {
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
                    points: '333.11 166.74 248.81 316 102.31 316 18 166.74 175.56 21.62 333.11 166.74',
                    fill: ['rgb(167, 234, 229)', 'rgb(198, 14, 142)'],
                    easing: 'easeInOutExpo'
                });
            };
            vm.toStarFleet = () => {
                anime({
                    targets: '.diamond',
                    d: 'M170.1,3,69.36,333,206.69,208.41l76.38,100.24L170.1,3Z',
                    fill: ['rgb(163, 125, 183)', 'rgb(229, 167, 44)'],
                    easing: 'easeInOutExpo'
                });
            };
        }, 1600);

        $timeout(function () {
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
