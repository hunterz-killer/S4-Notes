const galleryImages = document.querySelectorAll('.gallery img');
const previewImage = document.querySelector('.preview img');

galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
        previewImage.src = image.src;
        previewImage.alt = image.alt;
    });
});
