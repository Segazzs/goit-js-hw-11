import getImagesByQuery from './js/pixabay-api';
import createGallery from './js/render-functions';
import clearGallery from './js/render-functions';
import showLoader from './js/render-functions';
import hideLoader from './js/render-functions';

console.log('MAIN');

getImagesByQuery();
createGallery();
clearGallery();
showLoader();
hideLoader();
