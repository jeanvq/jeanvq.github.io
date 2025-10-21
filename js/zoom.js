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

// Image Modal functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing modal...');
  
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.close');
  const zoomableImages = document.querySelectorAll('.zoomable-image');

  console.log('Modal elements found:', { modal, modalImage, closeBtn, zoomableImages: zoomableImages.length });

  if (!modal || !modalImage || !closeBtn || zoomableImages.length === 0) {
    console.error('Missing modal elements!');
    return;
  }

  // Abrir modal al hacer clic en imagen
  zoomableImages.forEach(img => {
    img.addEventListener('click', function() {
      console.log('Image clicked!', this.src);
      modal.style.display = 'block';
      modalImage.src = this.src;
      modalImage.alt = this.alt;
      document.body.style.overflow = 'hidden'; // Evitar scroll del body
    });
  });

  // Cerrar modal al hacer clic en X
  closeBtn.addEventListener('click', function() {
    console.log('Close button clicked');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll del body
  });

  // Cerrar modal al hacer clic fuera de la imagen
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      console.log('Clicked outside image');
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Cerrar modal con tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      console.log('Escape key pressed');
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
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
