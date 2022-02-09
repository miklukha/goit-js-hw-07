import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItem(galleryItems);
galleryRef.innerHTML = galleryItemsMarkup;

galleryRef.addEventListener('click', onItemClick);

let modalMarkup;

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
  modalMarkup = createInstanceModal(urlOriginalImage);

  openModal();
}

function createInstanceModal(url) {
  const instance = basicLightbox.create(
    `<img src="${url}" width="800" height="600">`,
  );

  return instance;
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
