/* =======================================================
   zoom.js — layout helpers
   - Animates project cards when the grid stacks on mobile
   - Smooth scroll for in-page nav links (offset for the fixed header)
   ======================================================= */

// Stack animation for project cards on small screens
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  if (!grid) return;

  function updateStacked() {
    if (window.matchMedia('(max-width: 640px)').matches) {
      grid.classList.add('stacked');
      setTimeout(() => grid.classList.add('stacked--visible'), 40);
    } else {
      grid.classList.remove('stacked', 'stacked--visible');
    }
  }

  updateStacked();
  window.addEventListener('resize', updateStacked);
});

// Smooth scroll for nav links that point to a section on this page
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav .links a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    });
  });
});
