"use strict";

const colors = {
    templateUrl: "js/components/1-colors/1-colors.html",
    controller: ["ProjectService", "$location", "$timeout", "$scope", function(ProjectService,$location, $timeout, $scope) {
        const vm = this;
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