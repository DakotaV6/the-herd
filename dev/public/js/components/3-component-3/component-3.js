"use strict";

const component3 = {
    templateUrl: "js/components/3-component-3/component-3.html",
    controller: ["ProjectService", "$location", "$timeout", "$scope", function(ProjectService, $location, $timeout, $scope) {
        const vm = this;
        vm.bounceInBoool = true; 
        vm.bounceOutBool = false; 
        vm.bounceOut = () => {
            vm.bounceOutBool = true; 
            $timeout(function() {
                $scope.$apply(function() {
                    $location.path("/component-4");
                });
            }, 1000);
        };
    }]
};
angular 
    .module("App")
    .component("component3", component3);