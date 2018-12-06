"use strict";
const about = {
  templateUrl: "js/components/about/about.html"
  ,

  controller: ["ProjectService", "$location", function (ProjectService, $location) {
    const vm = this;

    vm.startQuestions = () => {
      $location.path("/1");
    };

    vm.getPlaylists = () => {
      ProjectService.getPlaylists();
  };

    anime({
      targets: '.sound-line',
      strokeDashoffset: function (el) {
        var pathLength = el.getTotalLength();
        el.setAttribute('stroke-dasharray', pathLength);
        return [-pathLength, 0];
      },
      stroke: {
        value: function (el, i) {
          return 'rgb(100,' + i * 10 + ', 200)';
        },
        easing: 'linear',
        duration: 2000,
      },
      strokeWidth: {
        value: 6,
        easing: 'linear',
        delay: function (el, i) {
          return 1200 + (i * 40);
        },
        duration: 800,
      },
      delay: function (el, i) {
        return i * 60;
      },
      duration: 1200,
      easing: 'easeOutExpo',
      loop: true,
      direction: 'alternate'
    });

  }]
};


angular
  .module("App")
  .component("about", about);

    // need to call $ctrl.getPlaylist();
    // <section ng-repeat= "playlist in $ctrl.playlists">
    //     <p>{{playlist.name}}</p>
    // </section>`
