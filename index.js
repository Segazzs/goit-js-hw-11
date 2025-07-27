import{i as f,a as p,S as m}from"./assets/vendor-Dlc6jZjm.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();function g(t){let i="51493488-12143edce1099078d847fb8bb";const l=encodeURIComponent(t);return`https://pixabay.com/api/?key=${i}&q=${l}&orientation=horizontal&image_type=photo&safesearch=true&max_height=200&min_width=400`}function y(t){console.log(t);let i=t.map(r=>{let e=r.webformatURL,o=r.largeImageURL,n=r.likes,c=r.views,d=r.comments,u=r.downloads;return`<ul>
      <li class="gallery-item">
      <a href="${o}">
        <img src="${e}" alt="" />
        <ul class="img_info">
          <li>
            <p class="info_title">Likes</p>
            <p>${n}</p>
          </li>
          <li>
            <p class="info_title">Views</p>
            <p>${c}</p>
          </li>
          <li>
            <p class="info_title">Comments</p>
            <p>${d}</p>
          </li>
          <li>
            <p class="info_title">Downloads</p>
            <p>${u}</p>
          </li>
        </ul>
      </a>
    </li>
      </ul>
      
      `}).join("");const l=document.createElement("ul");return l.classList.add("gallery"),l.insertAdjacentHTML("beforeend",i),l}function h(){const t=document.querySelector(".gallery");t&&t.remove()}function L(){let t=document.createElement("span");return t.classList.add("loader"),t}function b(){document.querySelector(".loader").remove()}let a=document.querySelector(".form"),s;a.addEventListener("submit",t=>{const i=L();t.preventDefault(),h();let l=t.target.elements["search-text"].value;l?(a.insertAdjacentElement("beforeend",i),p.get(g(l)).then(r=>{b(),a.insertAdjacentElement("afterend",y(r.data.hits)),console.log(r.data),s?s.refresh():s=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}).catch(r=>{}).finally(()=>{})):f.error({title:"Error",message:"Write a text"})});
//# sourceMappingURL=index.js.map
