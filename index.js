import{a as y,S as g,i as h}from"./assets/vendor-tnUJPedx.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const D="47645926-4f20cb40ce83f0e6b3764c4b6";y.defaults.baseURL="https://pixabay.com/api/";const m=async(e,n=1,o=15)=>{const a=new URLSearchParams({key:D,q:e,image_type:"photo",orientaiton:"horizontal",safesearch:"true",page:n,per_page:o});try{return await y.get("",{params:a})}catch(t){throw t}};let d;const v=e=>{const n=document.querySelector(".gallery"),o=e.map(({webformatURL:a,largeImageURL:t,tags:r,likes:i,views:q,comments:$,downloads:P})=>`<div class='photo-card'>
        <a href="${t}">
          <img src="${a}" alt="${r}" loading="lazy" />
        </a>
        <div class="info">
          <div>
            <p>Likes</p>
            <p>${i}</p>
          </div>
          <div>
            <p>Views</p>
            <p>${q}</p>
          </div>
          <div>
            <p>Comments</p>
            <p>${$}</p>
          </div>
          <div>
            <p>Downloads</p>
            <p>${P}</p>
          </div>
        </div>
      </div>`).join("");n.insertAdjacentHTML("beforeend",o),d?d.refresh():d=new g(".gallery a",{captionsData:"alt",captionDelay:250})},E=()=>{const e=document.querySelector(".gallery");e.innerHTML=""},w=document.querySelector(".search-form"),M=document.querySelector(".loader"),b=document.querySelector(".load-more");let s=1,f="";const c=15;let L=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});w.addEventListener("submit",O);b.addEventListener("click",R);async function O(e){e.preventDefault();const n=w.elements.search.value.trim();if(!n){x("Search query cannot be empty!");return}f=n,s=1,E(),l(!0),u(!1);try{const{data:o}=await m(f,s,c);if(o.hits.length===0){p("Sorry, there are no images matching your search query. Please try again!");return}v(o.hits),L.refresh(),s*c>=o.totalHits?S("We're sorry, but you've reached the end of search results."):u(!0)}catch(o){p(`Something went wrong: ${o.message}`)}finally{l(!1)}}async function R(){s+=1,u(!1),l(!0);try{const{data:e}=await m(f,s,c);v(e.hits),L.refresh(),s*c>=e.totalHits?S("We're sorry, but you've reached the end of search results."):u(!0),I()}catch(e){p(`Something went wrong: ${e.message}`)}finally{l(!1)}}function x(e){h.warning({title:"Warning",message:e,position:"topRight"})}function p(e){h.error({title:"Error",message:e,position:"topRight"})}function S(e){h.info({title:"Info",message:e,position:"topRight"})}function I(){const e=document.querySelector(".photo-card");e&&window.scrollBy({top:e.getBoundingClientRect().height*2,behavior:"smooth"})}function l(e){M.style.display=e?"block":"none"}function u(e){b.style.display=e?"block":"none"}
//# sourceMappingURL=index.js.map
