import Player from '@vimeo/player';
import trottle from 'lodash.throttle';
const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

const LOCALSTORAGE_KAY = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KAY));

player.on('timeupdate', trottle(onTimeUpdate, 1000));
console.log(player.getCurrentTime());

function onTimeUpdate(ev) {
  const currentTime = ev.seconds;
  localStorage.setItem(LOCALSTORAGE_KAY, currentTime);
}
