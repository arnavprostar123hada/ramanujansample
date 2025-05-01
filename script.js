
  const video = document.getElementById('bg-video');
  const btn = document.getElementById('unmute-btn');

  btn.addEventListener('click', () => {
    video.muted = false;
    video.play();
    btn.style.display = 'none';
  });

