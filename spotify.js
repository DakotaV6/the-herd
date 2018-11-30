"use strict";
require("dotenv").config();
const express = require("express");
const routes = express.Router();
var SpotifyWebApi = require("spotify-web-api-node");

var clientId = process.env.CLIENT_ID,
    clientSecret = process.env.CLIENT_SECRET_ID;

// Create the api object with the credentials
var spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret
});

routes.get("/playlists", (req, res) => {
    // Retrieve an access token.
    spotifyApi.clientCredentialsGrant().then(
        function (data) {
            // console.log('The access token expires in ' + data.body['expires_in']);
            // console.log('The access token is ' + data.body['access_token']);

            // Save the access token so that it's used in future calls
            spotifyApi.setAccessToken(data.body["access_token"]);
            return spotifyApi.getFeaturedPlaylists();
        })
        .then(function (data) {
            res.send(data.body);
        })
        .catch(function (err) {
            console.log("Unfortunately, something has gone wrong.", err.message);
        });
});

module.exports = routes;
