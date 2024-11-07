const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');


function openLightbox(imageSrc) {
    lightbox.style.display = 'flex';
    lightboxImage.src = imageSrc;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (e) => {
        openLightbox(e.target.src);
    });
});



lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});
