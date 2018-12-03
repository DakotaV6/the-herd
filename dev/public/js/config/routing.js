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
            .when("/component-3", {
                template: "<component-3></component-3>"
            })
            .when("/component-4", {
                template: "<component-4></component-4>"
            })
            .when("/component-5", {
                template: "<component-5></component-5>"
            })
            .when("/results", {
                template: "<results></results>"
            })
            .otherwise({ redirectTo: "/about" });
    }]);