import{a as h,S as P,i as p}from"./assets/vendor-tnUJPedx.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const $="47645926-4f20cb40ce83f0e6b3764c4b6";h.defaults.baseURL="https://pixabay.com/api/";const y=async(e,n=1,o=15)=>{const a=new URLSearchParams({key:$,q:e,image_type:"photo",orientaiton:"horizontal",safesearch:"true",page:n,per_page:o});try{return await h.get("",{params:a})}catch(t){throw t}},g=e=>{const n=document.querySelector(".gallery"),o=e.map(({webformatURL:a,largeImageURL:t,tags:r,likes:i,views:L,comments:S,downloads:q})=>`<div class='photo-card'>
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
            <p>${L}</p>
          </div>
          <div>
            <p>Comments</p>
            <p>${S}</p>
          </div>
          <div>
            <p>Downloads</p>
            <p>${q}</p>
          </div>
        </div>
      </div>`).join("");n.insertAdjacentHTML("beforeend",o)},E=()=>{const e=document.querySelector(".gallery");e.innerHTML=""},m=document.querySelector(".search-form"),M=document.querySelector(".loader"),v=document.querySelector(".load-more");let s=1,d="";const c=15;let w=new P(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});m.addEventListener("submit",O);v.addEventListener("click",R);async function O(e){e.preventDefault();const n=m.elements.search.value.trim();if(!n){I("Search query cannot be empty!");return}d=n,s=1,E(),l(!0),u(!1);try{const{data:o}=await y(d,s,c);if(o.hits.length===0){f("Sorry, there are no images matching your search query. Please try again!");return}g(o.hits),w.refresh(),s*c>=o.totalHits?b("We're sorry, but you've reached the end of search results."):u(!0)}catch(o){f(`Something went wrong: ${o.message}`)}finally{l(!1)}}async function R(){s+=1,u(!1),l(!0);try{const{data:e}=await y(d,s,c);g(e.hits),w.refresh(),s*c>=e.totalHits?b("We're sorry, but you've reached the end of search results."):u(!0),x()}catch(e){f(`Something went wrong: ${e.message}`)}finally{l(!1)}}function I(e){p.warning({title:"Warning",message:e,position:"topRight"})}function f(e){p.error({title:"Error",message:e,position:"topRight"})}function b(e){p.info({title:"Info",message:e,position:"topRight"})}function x(){const e=document.querySelector(".photo-card");e&&window.scrollBy({top:e.getBoundingClientRect().height*2,behavior:"smooth"})}function l(e){M.style.display=e?"block":"none"}function u(e){v.style.display=e?"block":"none"}
//# sourceMappingURL=index.js.map
