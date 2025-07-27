export function createGallery(images) {
  console.log(images);
  let item = images
    .map(elem => {
      let imgUrl = elem.webformatURL;
      let bigImg = elem.largeImageURL;
      let likes = elem.likes;
      let views = elem.views;
      let comments = elem.comments;
      let downloads = elem.downloads;

      return `<ul>
      <li class="gallery-item">
      <a href="${bigImg}">
        <img src="${imgUrl}" alt="" />
        <ul class="img_info">
          <li>
            <p class="info_title">Likes</p>
            <p>${likes}</p>
          </li>
          <li>
            <p class="info_title">Views</p>
            <p>${views}</p>
          </li>
          <li>
            <p class="info_title">Comments</p>
            <p>${comments}</p>
          </li>
          <li>
            <p class="info_title">Downloads</p>
            <p>${downloads}</p>
          </li>
        </ul>
      </a>
    </li>
      </ul>
      
      `;
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
  let loader = document.createElement('span');
  loader.classList.add('loader');
  return loader;
}
export function hideLoader() {
  let span = document.querySelector('.loader');
  span.remove();
}
