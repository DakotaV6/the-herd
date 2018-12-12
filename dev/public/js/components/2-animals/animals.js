"use strict";

const animals = {
    templateUrl: "js/components/2-animals/animals.html",
    controller: ["ProjectService", "$location", "$timeout", "$scope", function (ProjectService, $location, $timeout, $scope) {
        const vm = this;
        $timeout(function () {
            vm.addScore = () => {
                var num = Math.floor(Math.random() * 3);
                ProjectService.addScore(num);
            };
        }, 1600);


    }]
};
angular
    .module("App")
    .component("animals", animals);