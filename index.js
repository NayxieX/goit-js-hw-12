import{a as h,S as g,i as y}from"./assets/vendor-hwdYKDic.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const $="47645926-4f20cb40ce83f0e6b3764c4b6";h.defaults.baseURL="https://pixabay.com/api/";const m=async(e,n=1,o=15)=>{const a=new URLSearchParams({key:$,q:e,image_type:"photo",orientaiton:"horizontal",safesearch:"true",page:n,per_page:o});try{return await h.get("",{params:a})}catch(t){throw t}},v=e=>{const n=document.querySelector(".gallery"),o=e.map(({webformatURL:a,largeImageURL:t,tags:r,likes:i,views:S,comments:q,downloads:P})=>`<div class='photo-card'>
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
            <p>${S}</p>
          </div>
          <div>
            <p>Comments</p>
            <p>${q}</p>
          </div>
          <div>
            <p>Downloads</p>
            <p>${P}</p>
          </div>
        </div>
      </div>`).join("");n.insertAdjacentHTML("beforeend",o)},D=()=>{const e=document.querySelector(".gallery");e.innerHTML=""},w=document.querySelector(".search-form"),E=document.querySelector(".loader"),b=document.querySelector(".load-more");let s=1,p="";const l=15;let c=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});w.addEventListener("submit",M);b.addEventListener("click",O);async function M(e){e.preventDefault();const n=w.elements.search.value.trim();if(!n){R("Search query cannot be empty!");return}p=n,s=1,D(),u(!0),d(!1);try{const{data:o}=await m(p,s,l);if(o.hits.length===0){f("Sorry, there are no images matching your search query. Please try again!");return}v(o.hits),c?c.refresh():c=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),s*l>=o.totalHits?L("We're sorry, but you've reached the end of search results."):d(!0)}catch(o){f(`Something went wrong: ${o.message}`)}finally{u(!1)}}async function O(){s+=1,d(!1),u(!0);try{const{data:e}=await m(p,s,l);v(e.hits),c.refresh(),s*l>=e.totalHits?L("We're sorry, but you've reached the end of search results."):d(!0),I()}catch(e){f(`Something went wrong: ${e.message}`)}finally{u(!1)}}function R(e){y.warning({title:"Warning",message:e,position:"topRight"})}function f(e){y.error({title:"Error",message:e,position:"topRight"})}function L(e){y.info({title:"Info",message:e,position:"topRight"})}function I(){const e=document.querySelector(".photo-card");e&&window.scrollBy({top:e.getBoundingClientRect().height*2,behavior:"smooth"})}function u(e){E.style.display=e?"block":"none"}function d(e){b.style.display=e?"block":"none"}
//# sourceMappingURL=index.js.map
