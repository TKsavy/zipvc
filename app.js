// Keep comparisons easy to follow by playing only one sample at a time.
document.addEventListener('play', (event) => {
  if (!(event.target instanceof HTMLAudioElement)) return;
  document.querySelectorAll('audio').forEach((audio) => {
    if (audio !== event.target) audio.pause();
  });
}, true);
