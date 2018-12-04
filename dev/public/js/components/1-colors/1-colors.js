"use strict";

const colors = {
    templateUrl: "js/components/1-colors/1-colors.html",
    controller: ["$location", "$timeout", "$scope", function($location, $timeout, $scope) {
        const vm = this;
        vm.bounceInBool= true;
        vm.bounceOutBool = false;
        vm.bounceOut = () => {
            vm.bounceOutBool= true;
            $timeout(function() {
                $scope.$apply(function() {
                    $location.path("/component-2");
                });
            }, 500);
        };
    }]
};

angular 
    .module("App")
    .component("colors", colors);