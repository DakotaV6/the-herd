"use strict";

const gummyBears = {
    templateUrl: "js/components/gummy-bears/gummy-bears.html",
    controller: ["ProjectService", "$location","$timeout", "$scope", function(ProjectService, $location, $timeout, $scope){
        const vm = this;
        // vm.nextUp = () => {
        //     $location.path("/component-2");
        // }; 
        vm.bounceOutBool = false;
        vm.bounceOut = () => {
            vm.bounceOutBool= true;
            $timeout(function() {
                $scope.$apply(function() {
                    $location.path("/component-2");
                });
            }, 500);
        };

        // vm.fadeInLeft = () => {
        //     vm.bounceOutBool= true; 
        // }
    }]
}

angular
.module("App")
.component("gummyBears", gummyBears);