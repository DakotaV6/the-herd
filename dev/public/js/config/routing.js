"use strict";

angular
    .module("App")
    .config (["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/about", {
                template: "<about></about>"
            })
            .when("/component-1", {
                template: "<gummy-bears></gummy-bears>"
            })
            .when("/component-2", {
                template: "<component-2></component-2>"
            })
            .otherwise({ redirectTo: "/about" });
    }]);