import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// import * as _throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
// const iframe = document.querySelector('#vimeo-player');

// const player = new Player(iframe, {
//   id: 'vimeo-player',
//   src: 'https://player.vimeo.com/video/236203659',
//   width: '640',
//   height: '360',
//   frameborder: '0',
//   allowfullscreen: true,
//   allow: 'autoplay; encrypted-media',
// });

const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (time) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
    console.log(time);
    // data is an object containing properties specific to that event
  }, 1000)
);

const savedSettings = localStorage.getItem('videoplayer-current-time');
const parsedSettings = JSON.parse(savedSettings);

// if (parsedSettings) parsedSettings.seconds = 0;

if (parsedSettings) player.setCurrentTime(parsedSettings.seconds);

// player.setCurrentTime(parsedSettings.seconds).then(function (e) {
//   console.log(e);
//   // seconds = the actual time that the player seeked to
// });
