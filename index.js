import{S as f,i as c,a as m}from"./assets/vendor-DBEUWmFe.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function p(r){const i="51493488-12143edce1099078d847fb8bb",t=encodeURIComponent(r.trim());return`https://pixabay.com/api/?key=${i}&q=${t}&orientation=horizontal&image_type=photo&safesearch=true`}let n=document.querySelector(".gallery");document.querySelector(".loader");let s;function g(r){let i=r.map(t=>{let a=t.webformatURL,e=t.largeImageURL,o=t.likes,l=t.views,u=t.comments,d=t.downloads;return`
      <li class="gallery-item">
      <a href="${e}">
        <img src="${a}" alt="" />
        <ul class="img_info">
          <li>
            <p class="info_title">Likes</p>
            <p>${o}</p>
          </li>
          <li>
            <p class="info_title">Views</p>
            <p>${l}</p>
          </li>
          <li>
            <p class="info_title">Comments</p>
            <p>${u}</p>
          </li>
          <li>
            <p class="info_title">Downloads</p>
            <p>${d}</p>
          </li>
        </ul>
      </a>
    </li>
      `}).join("");n.insertAdjacentHTML("afterbegin",i),s?s.refresh():s=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function y(){n&&(n.innerHTML="")}function h(){const r=document.querySelector(".loader");r&&r.classList.remove("none")}function L(){const r=document.querySelector(".loader");r&&r.classList.add("none")}let b=document.querySelector(".form");b.addEventListener("submit",r=>{h(),y(),r.preventDefault();let i=r.target.elements["search-text"].value;i?m.get(p(i)).then(t=>{if(g(t.data.hits),t.data.hits.length===0)throw new Error("No images found")}).catch(t=>{c.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{L()}):c.error({title:"Error",message:"Write a text"})});
//# sourceMappingURL=index.js.map
