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

form.addEventListener('submit', eve => {
  eve.preventDefault();
  clearGallery();
  let value = eve.target.elements['search-text'].value;
  if (!value) {
    iziToast.error({
      title: 'Error',
      message: 'Write a text',
    });
  } else {
    const loader = showLoader();
    form.insertAdjacentElement('beforeend', loader);
    axios
      .get(getImagesByQuery(value))
      .then(response => {
        form.insertAdjacentElement(
          'afterend',
          createGallery(response.data.hits)
        );
        const lightbox = new SimpleLightbox('.gallery a', {
          captions: true,
          captionsData: 'alt',
          captionDelay: 250,
        });

        lightbox.on('shown.simplelightbox', function () {
          console.log('Зображення видно');
        });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        hideLoader();
      });
  }
});
