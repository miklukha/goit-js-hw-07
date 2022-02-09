import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItem(galleryItems);
galleryRef.innerHTML = galleryItemsMarkup;

const modalMarkup = basicLightbox.create(`<img width="800" height="600">`);
const modalImageRef = modalMarkup.element().querySelector('img');

galleryRef.addEventListener('click', onItemClick);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
      </div>`,
    )
    .join('');
}

function onItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const urlOriginalImage = event.target.dataset.source;

  setSrcImage(urlOriginalImage);
  openModal();
}

function setSrcImage(url) {
  modalImageRef.setAttribute('src', url);
}

function openModal() {
  modalMarkup.show();
  window.addEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

function closeModal() {
  modalMarkup.close();
  window.removeEventListener('keydown', onEscKeyPress);
}
