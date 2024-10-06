
document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('hover-sound');
  let isPlaying = false;
  document.addEventListener('mouseenter', (event) => {
    const target = event.target;

    if (target.matches('.navigation a, .button, .p1, .p2, .names a')) {
      if (!isPlaying) {
        audio.currentTime = 0.5; 
        audio.play();
        isPlaying = true;
      }
    }
  }, true);
  document.addEventListener('mouseleave', (event) => {
    const target = event.target;

    if (target.matches('.navigation a, .button, .p1, .p2, .names a')) {
      audio.pause();
      isPlaying = false;
    }
  }, true);
});

