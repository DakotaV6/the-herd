"use strict";

angular
    .module("App")
    .config (["$routeProvider", "$sceDelegateProvider", ($routeProvider, $sceDelegateProvider) => {
        $sceDelegateProvider.resourceUrlWhitelist(['self', "https://open.spotify.com/embed/**"]);
        $routeProvider
            .when("/about", {
                template: "<about></about>"
            })
            .when("/component-1", {
                template: "<colors></colors>" 
            })
            .when("/component-2", {
                template: "<gummy-bears></gummy-bears>"
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
            .when("/new-playlist", {
                template: "<new-results></new-results>"
            })
            .when("/extra-playlist", {
                template: "<extra-results></extra-results>"
            })
            .otherwise({ redirectTo: "/about" });
    }]);