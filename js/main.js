/* =======================================================
   main.js — Jeancarlo Ricardo Portfolio
   Footer year, image gallery modal, theme toggle and
   analytics events. Loaded with `defer` on every page.
   ======================================================= */

/* ---------- Footer year ---------- */
const yearEl = document.getElementById('y');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Image gallery modal ---------- */
let currentGallery = [];
let currentImageIndex = 0;

// Opens a single image (used by images without their own gallery)
function openImageModal(imageId) {
  const image = document.getElementById(imageId);
  if (!image) return;
  currentGallery = [image];
  currentImageIndex = 0;
  showModalImage();
}

// Opens a gallery of several images, starting with the first one
function openImageGallery(imageIds) {
  const images = imageIds
    .map(id => document.getElementById(id))
    .filter(Boolean);
  if (images.length === 0) return;
  currentGallery = images;
  currentImageIndex = 0;
  showModalImage();
}

function showModalImage() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const counter = document.getElementById('modalCounter');
  const prevBtn = document.getElementById('modalPrev');
  const nextBtn = document.getElementById('modalNext');
  if (!modal || currentGallery.length === 0) return;

  const image = currentGallery[currentImageIndex];
  modal.style.display = 'block';
  modalImg.src = image.src;
  modalImg.alt = image.alt;

  const isGallery = currentGallery.length > 1;
  counter.style.display = isGallery ? 'block' : 'none';
  prevBtn.style.display = isGallery ? 'block' : 'none';
  nextBtn.style.display = isGallery ? 'block' : 'none';

  if (isGallery) {
    counter.textContent = `${currentImageIndex + 1} / ${currentGallery.length}`;
    prevBtn.disabled = currentImageIndex === 0;
    nextBtn.disabled = currentImageIndex === currentGallery.length - 1;
  }
}

function nextImage() {
  if (currentImageIndex < currentGallery.length - 1) {
    currentImageIndex++;
    showModalImage();
  }
}

function prevImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    showModalImage();
  }
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  if (modal) modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imageModal');
  if (!modal) return;

  // Images that don't open a gallery open on their own.
  // Images with an onclick in the HTML keep their gallery.
  document.querySelectorAll('.zoomable-image').forEach(img => {
    if (img.hasAttribute('onclick')) return;
    img.addEventListener('click', () => {
      currentGallery = [img];
      currentImageIndex = 0;
      showModalImage();
    });
  });

  const closeBtn = modal.querySelector('.close');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  const prevBtn = document.getElementById('modalPrev');
  const nextBtn = document.getElementById('modalNext');
  if (prevBtn) prevBtn.addEventListener('click', prevImage);
  if (nextBtn) nextBtn.addEventListener('click', nextImage);

  // Close when clicking outside the image
  modal.addEventListener('click', event => {
    if (event.target === modal) closeModal();
  });

  // Keyboard: Escape closes, arrows navigate
  document.addEventListener('keydown', event => {
    if (modal.style.display !== 'block') return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowLeft') prevImage();
    if (event.key === 'ArrowRight') nextImage();
  });
});

/* ---------- Theme toggle (dark / light) ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');

  body.setAttribute('data-theme', localStorage.getItem('theme') || 'dark');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      if (typeof gtag !== 'undefined') {
        gtag('event', 'theme_toggle', { theme: newTheme });
      }
    });
  }
});

/* ---------- Analytics: contact clicks ---------- */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.contact-card a, .social-link').forEach(link => {
    link.addEventListener('click', () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'contact_click', { contact_type: link.textContent.trim() });
      }
    });
  });
});
