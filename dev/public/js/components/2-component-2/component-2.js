"use strict";

const colors = {
    templateUrl: "js/components/2-component-2/component-2.html",
    controller: ["ProjectService", "$location", "$timeout", "$scope", function(ProjectService,$location, $timeout, $scope) {
        const vm = this;
        vm.bounceInBool = true
        vm.bounceOutBool = false;
        vm.bounceOut = () => {
            vm.bounceOutBool= true;
            $timeout(function() {
                $scope.$apply(function() {
                    $location.path("/component-2");
                });
            }, 1000);
        };
    }]
};

angular 
    .module("App")
    .component("colors", colors);