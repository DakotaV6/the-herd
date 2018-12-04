"use strict";

const gummyBears = {
    templateUrl: "js/components/2-gummy-bears/gummy-bears.html",
    controller: ["ProjectService", "$location","$timeout", "$scope", function(ProjectService, $location, $timeout, $scope){
        const vm = this;
        vm.btnDisplay = false;
        vm.showBtn = () => {
            vm.btnDisplay = true;
        };
        vm.bounceOut = () => {
            // $timeout(function() {
            //     $scope.$apply(function() {
            //         $location.path("/component-3");
            //     });
            // }, 1000);
            $location.path("/component-3");
        };
    }]
}

angular
.module("App")
.component("gummyBears", gummyBears);