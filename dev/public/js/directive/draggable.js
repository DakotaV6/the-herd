"use strict";

function draggable($timeout) {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $timeout(function() {
                $scope.$apply(function(){
                $element
                    .on("mousedown", (event) => {
                       

                })
            })}, 1600);
            
        }
    };
}

angular
.module("App")
.directive("draggable", draggable);
