// js/touch-interactions.js
document.addEventListener('DOMContentLoaded', () => {
  let touchStartX = 0;
  const swipeThreshold = 50;

  document.body.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.body.addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].screenX;
    const diffX = touchStartX - touchEndX;

    if (Math.abs(diffX) > swipeThreshold) {
      const menu = document.querySelector('.nav-menu');
      menu.classList.toggle('active', diffX > 0);
    }
  });
});
