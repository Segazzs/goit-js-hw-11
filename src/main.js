import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

console.log('MAIN');

getImagesByQuery();
createGallery();
clearGallery();
showLoader();
hideLoader();
