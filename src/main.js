import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let form = document.querySelector('.form');

let lightbox;

form.addEventListener('submit', eve => {
  const loader = showLoader();
  eve.preventDefault();
  clearGallery();
  let value = eve.target.elements['search-text'].value;
  if (!value) {
    iziToast.error({
      title: 'Error',
      message: 'Write a text',
    });
  } else {
    form.insertAdjacentElement('beforeend', loader);
    axios
      .get(getImagesByQuery(value))
      .then(response => {
        hideLoader();

        form.insertAdjacentElement(
          'afterend',
          createGallery(response.data.hits)
        );
        console.log(response.data);
        if (!lightbox) {
          lightbox = new SimpleLightbox('.gallery a', {
            captions: true,
            captionsData: 'alt',
            captionDelay: 250,
          });
        } else {
          lightbox.refresh();
        }
      })
      .catch(error => {})
      .finally(() => {});
  }
});
