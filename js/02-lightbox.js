import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItem(galleryItems);
galleryRef.innerHTML = galleryItemsMarkup;

let gallery = new SimpleLightbox('.gallery a');

gallery.defaultOptions.captionsData = 'alt';
gallery.defaultOptions.captionDelay = 250;

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>`,
    )
    .join('');
}
