"use strict"

function turn ($timeout,$document, $location) {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            var offsetTop = $element.prop("offsetTop");
            var offsetLeft = $element.prop("offsetLeft");
            $timeout(function() {
                var R2D, active, angle, center, init, rotate, rotation, start, startAngle, stop;
                
                active = false;
                
                angle = 0;
                
                rotation = 0;
                
                startAngle = 0;
                
                center = {
                    x: 0,
                    y: 0
                };
                
                document.ontouchmove = function(e) {
                    return e.preventDefault();
                };
                
                // function removeAll() {
                //     const target = document.querySelector(".dial");
                //     target.removeEventListener("mousedown", start);
                //     target.removeEventListener("mouseup", rotate);
                //     target.removeEventListener("mousemouse", stop);
                // }

                init = function() {
                    const target = document.querySelector(".dial");
                    target.addEventListener("mousedown", start, false);
                    target.addEventListener("mousemove", rotate, false);
                    return target.addEventListener("mouseup", stop, false);
                };
                
                R2D = 180 / Math.PI;
                
                start = function(e) {
                    var height, left, top, width, x, y, _ref;
                    e.preventDefault();
                    _ref = this.getBoundingClientRect(), top = _ref.top, left = _ref.left, height = _ref.height, width = _ref.width;
                    center = {
                    x: left + (width / 2),
                    y: top + (height / 2)
                    };
                    x = e.clientX - center.x;
                    y = e.clientY - center.y;
                    startAngle = R2D * Math.atan2(y, x);
                    return active = true;
                };
                
                rotate = function(e) {
                    var d, x, y;
                    e.preventDefault();
                    x = e.clientX - center.x;
                    y = e.clientY - center.y;
                    d = R2D * Math.atan2(y, x);
                    rotation = d - startAngle;
                    if (active) {

                        console.log(this.style.transform);
                        let originalValue = this.style.transform.split("");         
                        let newValue = originalValue.slice(7);
                        newValue.pop();
                        newValue.pop();
                        newValue.pop();
                        newValue.pop();
                        let finalValue = Math.floor(Number(newValue.join("")));
                        console.log(finalValue);
                        if (finalValue === 180 || finalValue === -180) {
                            location.hash = "#/results";
                        }
                        return this.style.webkitTransform = "rotate(" + (angle + rotation) + "deg)";
                    }
                };
                
                stop = function() {
                    angle += rotation;
                    return active = false;
                };
                
                init();
            }, 1600);
        }
    };
}


angular
    .module("App")
    .directive("turn", turn);



// "use strict"

// function turn ($timeout,$document, $location) {
//     return {
//         restrict: "A",
//         link: function($scope, $element, $attrs) {
//             var offsetTop = $element.prop("offsetTop");
//             var offsetLeft = $element.prop("offsetLeft")
//             $timeout(function() {
//                 $scope.$apply(function(){
//                     $element
//                         .on("mousedown", (event)=> {
//                             event.preventDefault();
//                             $element.css({cursor: "grabbing"})
//                             $document.on("mousemove", mousemove);
//                             $document.on("mouseup", mouseup);
//                         })
//                         .on("touchstart", (event)=> {
//                             event.preventDefault();
//                             $element.css({cursor: "grabbing"})
//                             $document.on("touchmove", mousemove);
//                             $document.on("touchend", mouseup);
//                         })
//                     function mousemove(event) {
//                         console.log(event.clientX, event.clientY);
//                         var w = ($element[0].scrollHeight)/2;
//                         var h = ($element[0].scrollHeight)/2;
//                         var center_x = ($element[0].offsetLeft) +w;
//                         var center_y = ($element[0].offsetTop) +h;       
//                         var mouse_x = event.clientX;
//                         var mouse_y = event.clientY; 
//                         var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y); 
//                         var degree = ((radians * (180 / Math.PI)* -1)) + 90;
//                         // var degree = -((radians * (180 / Math.PI))+ 90);
//                         $element.css({transform: `rotate(${degree}deg)`});
//                     }    
//                     function mouseup() {
//                         $element.css({cursor: "grab"});

//                         $document.unbind("mousemove", mousemove);
//                         $document.unbind("mouseup", mouseup);
//                         $document.unbind("touchmove",mousemove);
//                         $document.unbind ("touchend", mouseup);
//                     }
                
//                 })
//             }, 1600);
//         }
//     };
// }


// angular
//     .module("App")
//     .directive("turn", turn);