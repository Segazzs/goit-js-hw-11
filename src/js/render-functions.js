export function createGallery(images) {
  let item = images
    .map(elem => {
      let imgUrl = elem.webformatURL;
      let bigImg = elem.largeImageURL;

      return `<li class="gallery-item"><a href="${bigImg}"><img src="${imgUrl}"></a></li>`;
    })
    .join('');

  const ul = document.createElement('ul');
  ul.classList.add('gallery');
  ul.insertAdjacentHTML('beforeend', item);
  return ul;
}
export function clearGallery() {
  const oldGallery = document.querySelector('.gallery');
  if (oldGallery) {
    oldGallery.remove();
  }
}
export function showLoader() {
  let loader = document.createElement('p');
  loader.classList.add('loader');
  return loader;
}
export function hideLoader() {
  let p = document.querySelector('.loader');
  p.remove();
}
