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
  showLoader();
  clearGallery();
  eve.preventDefault();
  let value = eve.target.elements['search-text'].value;
  if (!value) {
    iziToast.error({
      title: 'Error',
      message: 'Write a text',
    });
  } else {
    axios
      .get(getImagesByQuery(value))
      .then(response => {
        createGallery(response.data.hits);
        if (response.data.hits.length === 0) {
          throw new Error('No images found');
        }
      })
      .catch(error => {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      })
      .finally(() => {
        hideLoader();
      });
  }
});
