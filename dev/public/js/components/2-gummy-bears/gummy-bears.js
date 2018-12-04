"use strict";

const gummyBears = {
    templateUrl: "js/components/2-gummy-bears/gummy-bears.html",
    controller: ["ProjectService", "$location","$timeout", "$scope", function(ProjectService, $location, $timeout, $scope){
        const vm = this;
        vm.bounceInBool= true;
        vm.bounceOutBool = false;
        vm.bounceOut = () => {
            vm.bounceOutBool= true;
            $timeout(function() {
                $scope.$apply(function() {
                    $location.path("/component-3");
                });
            }, 500);
        };
    }]
}

angular
.module("App")
.component("gummyBears", gummyBears);