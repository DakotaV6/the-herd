"use strict";

angular
    .module("App")
    .config (["$routeProvider", "$sceDelegateProvider", ($routeProvider, $sceDelegateProvider) => {
        $sceDelegateProvider.resourceUrlWhitelist(['self', "https://open.spotify.com/embed/**"]);
        $routeProvider
            .when("/about", {
                template: "<about></about>"
            })
            .when("/1", {
                template: "<colors></colors>" 
            })
            .when("/2", {
                template: "<animals></animals>"
            })
            .when("/3", {
                template: "<gummy-bears></gummy-bears>"
            })
            .when("/4", {
                template: "<shapes></shapes>"
            })
            .when("/5", {
                template: "<wheel></wheel>"
            })
            .when("/6", {
                template: "<orbs></orbs>"
            })
            .when("/results", {
                template: "<results></results>"
            })
            .when("/new-playlist", {
                template: "<new-results></new-results>"
            })
            .when("/favorites", {
                template: "<favorites></favorites>"
            })
            .when("/fav-results", {
                template: "<fav-results></fav-results>"
            })
            .when("/extra-playlist", {
                template: "<extra-results></extra-results>"
            })
            .otherwise({ redirectTo: "/about" });
    }]);