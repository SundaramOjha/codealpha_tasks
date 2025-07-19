const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const filterButtons = document.querySelectorAll('[data-filter]');

let currentIndex = 0;
let images = Array.from(galleryItems);

function openLightbox(index) {
  currentIndex = index;
  lightbox.classList.add('active');
  lightboxImg.src = images[currentIndex].src;
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    images = [];

    document.querySelectorAll('.gallery-item').forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
        images.push(item.querySelector('img'));
      } else {
        item.style.display = 'none';
      }
    });
  });
});
