"use strict";

const wheel = {
    templateUrl: "js/components/5-wheel/wheel.html",
    controller: ["ProjectService", "$location", "$timeout", function(ProjectService, $location, $timeout) {
        const vm = this;
        vm.userName= ProjectService.userName;
        $timeout(function () {
            vm.nextUp = () => {
                $timeout(function() {
                    $scope.$apply(function() {
                        $location.path("/5");
                    });
                }, 900);
            };
        }, 1600);
    }]
        
};

angular
    .module("App")
    .component("wheel", wheel);