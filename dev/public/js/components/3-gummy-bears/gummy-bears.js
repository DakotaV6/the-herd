"use strict";

const gummyBears = {
    templateUrl: "js/components/3-gummy-bears/gummy-bears.html",
    controller: ["ProjectService", "$location", "$timeout", "$scope", function (ProjectService, $location, $timeout, $scope) {
        const vm = this;
        $timeout(function () {
            vm.nextUp = () => {
                $timeout(function () {
                    $scope.$apply(function () {
                        $location.path("/4");
                    });
                }, 1600);
            };
        }, 1600);
        $timeout(function () {
            vm.addScore = (num) => {
                ProjectService.addScore(num);
            };
        }, 1600);
    }]
}

angular
    .module("App")
    .component("gummyBears", gummyBears);