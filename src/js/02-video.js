import Player from '@vimeo/player';
const iframe = document.getElementById('vimeo-player');
// const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe, {
  id: 'vimeo-player',
  src: 'https://player.vimeo.com/video/236203659',
  width: '640',
  height: '360',
  frameborder: '0',
  allowfullscreen: true,
  allow: 'autoplay; encrypted-media',
});

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
