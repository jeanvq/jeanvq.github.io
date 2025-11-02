// Zoom effect for Project 2 Demo button

document.addEventListener('DOMContentLoaded', function() {
  const demoBtn = document.getElementById('demo-zoom');
  if (!demoBtn) return;
  const project2Img = demoBtn.closest('.card').querySelector('.thumb img');
  demoBtn.addEventListener('click', function(e) {
    e.preventDefault();
    project2Img.classList.toggle('zoomed');
  });
});

// Handle stacking transition on mobile when cards switch to single column
document.addEventListener('DOMContentLoaded', function() {
  const grid = document.querySelector('.grid');
  if (!grid) return;

  function updateStacked() {
    if (window.matchMedia('(max-width: 640px)').matches) {
      grid.classList.add('stacked');
      // Add visible after a small timeout to allow initial style application
      setTimeout(() => grid.classList.add('stacked--visible'), 40);
    } else {
      grid.classList.remove('stacked--visible');
      grid.classList.remove('stacked');
    }
  }

  updateStacked();
  window.addEventListener('resize', updateStacked);
});

// Mobile-specific optimizations
document.addEventListener('DOMContentLoaded', function() {
  // Detect if device supports touch
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (isTouchDevice) {
    document.body.classList.add('touch-device');
    
    // Improve scroll performance on mobile
    let ticking = false;
    function updateScrollPosition() {
      // Add subtle parallax or scroll effects if needed
      ticking = false;
    }
    
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Handle orientation changes
    window.addEventListener('orientationchange', function() {
      setTimeout(() => {
        window.scrollTo(0, window.scrollY);
      }, 500);
    });
  }
  
  // Smooth scroll for navigation links on mobile
  const navLinks = document.querySelectorAll('.nav .links a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed nav
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
