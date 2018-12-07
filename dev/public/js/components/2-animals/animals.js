"use strict";

const animals = {
    templateUrl: "js/components/2-animals/animals.html",
    controller: ["ProjectService", "$location", "$timeout", "$scope", function(ProjectService, $location, $timeout, $scope) {
        const vm = this;
        $timeout(function() {
            vm.danceAnimal = () => {
                anime({
                    targets: event.target,
                    
                    });
            };
            vm.nextUp = () => {
                $timeout(function() {
                    $scope.$apply(function() {
                        $location.path("/3");
                    });
                }, 800);
            };
        }, 1600);

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
    .component("animals", animals);