import{a as g,S as m,i as y}from"./assets/vendor-tnUJPedx.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const x="47645926-4f20cb40ce83f0e6b3764c4b6";g.defaults.baseURL="https://pixabay.com/api/";const b=async(e,n=1,o=15)=>{const i=new URLSearchParams({key:x,q:e,image_type:"photo",orientaiton:"horizontal",safesearch:"true",page:n,per_page:o});try{return await g.get("",{params:i})}catch(t){throw t}};let d;const v=e=>{const n=document.querySelector(".gallery"),o=e.map(({webformatURL:i,largeImageURL:t,tags:r,likes:s,views:q,comments:$,downloads:P})=>`<div class='photo-card'>
        <a href="${t}">
          <img src="${i}" alt="${r}" loading=""lazy/>
        </a>
        <div class="info">
          <div>
            <p>Likes</p>
            <p>${s}</p>
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
      </div>`).join("");n.insertAdjacentHTML("beforeend",o),d?d.refresh():d=new m(".gallery a",{captionsData:"alt",captionDelay:250})},D=()=>{const e=document.querySelector(".gallery");e.innerHTML=""},w=document.querySelector(".search-form"),E=document.querySelector(".loader"),L=document.querySelector(".load-more");let a=1,f="";const c=15;let p=null;w.addEventListener("submit",M);L.addEventListener("click",O);async function M(e){e.preventDefault();const n=w.elements.search.value.trim();if(!n){R("Search query cannot be empty!");return}f=n,a=1,D(),l(!0),u(!1);try{const{data:o}=await b(f,a,c);if(o.hits.length===0){h("Sorry, there are no images matching your search query. Please try again!");return}v(o.hits),z(),a*c>=o.totalHits?S("We're sorry, but you've reached the end of search results."):u(!0)}catch(o){h(`Something went wrong: ${o.message}`)}finally{l(!1)}}async function O(){a+=1,u(!1),l(!0);try{const{data:e}=await b(f,a,c);v(e.hits),H(),a*c>=e.totalHits?S("We're sorry, but you've reached the end of search results."):u(!0),I()}catch(e){h(`Something went wrong: ${e.message}`)}finally{l(!1)}}function R(e){y.warning({title:"Warning",message:e,position:"topRight"})}function h(e){y.error({title:"Error",message:e,position:"topRight"})}function S(e){y.info({title:"Info",message:e,position:"topRight"})}function I(){const e=document.querySelector(".photo-card");e&&window.scrollBy({top:e.getBoundingClientRect().height*2,behavior:"smooth"})}function l(e){E.style.display=e?"block":"none"}function u(e){L.style.display=e?"block":"none"}function z(){p=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function H(){p&&p.refresh()}
//# sourceMappingURL=index.js.map
