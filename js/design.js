  const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxVideo = document.getElementById('lightboxVideo');
    const closeBtn = document.getElementById('closeBtn');

    document.querySelectorAll('.gallery-grid img, .gallery-grid video').forEach(item => {
      item.addEventListener('click', () => {
        lightbox.classList.add('active');
        if (item.tagName === 'IMG') {
          lightboxImg.src = item.src;
          lightboxImg.style.display = 'block';
          lightboxVideo.style.display = 'none';
        } else if (item.tagName === 'VIDEO') {
          lightboxVideo.src = item.currentSrc || item.src;
          lightboxVideo.style.display = 'block';
          lightboxImg.style.display = 'none';
        }
      });
    });

    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
      lightboxVideo.pause();
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        lightboxVideo.pause();
      }
    });