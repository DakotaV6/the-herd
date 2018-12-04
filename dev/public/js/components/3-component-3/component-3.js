"use strict";

const component3 = {
    templateUrl: "js/components/3-component-3/component-3.html",
    controller: ["ProjectService", "$location", "$timeout", "$scope", function(ProjectService, $location, $timeout, $scope) {
        const vm = this;
        vm.btnDisplay = false;
        vm.showBtn = () => {
            vm.btnDisplay = true;
        };
        vm.nextUp = () => {
            $location.path("/component-4");
        };
    }]
};
angular 
    .module("App")
    .component("component3", component3);