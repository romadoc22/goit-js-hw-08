import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEOCURTIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

if (localStorage.getItem(VIDEOCURTIME)) {
  const playedTime = Number(localStorage.getItem(VIDEOCURTIME));
  player.setCurrentTime(playedTime);
}

player.on(
  'timeupdate',
  throttle(data => localStorage.setItem(VIDEOCURTIME, data.seconds), 1000)
);
