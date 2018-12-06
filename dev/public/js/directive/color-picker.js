"use strict";

function colorPicker($timeout) {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $timeout(function() {
                $scope.$apply(function(){
                $element
                    .on("click", (event) => {
                        document.querySelector("body").classList = event.target.classList[1];
                })
                
            })}, 1500);
            
        }
    };
}

//$timeout(function() {
//     $scope.$apply(function() {
//         $location.path("/nextview");
//     });
// }, 2000);


angular
.module("App")
.directive("colorPicker", colorPicker);