import{i as d,S as g,a as y}from"./assets/vendor-BBSqv8W6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();function p(r){r.innerHTML='<p class="loading-text">Loading images, please wait...</p><span class="loader"></span>'}function c(r){const e=r.querySelector(".loading-text"),n=r.querySelector(".loader");e&&e.remove(),n&&n.remove()}function h(r){const e=r.data.hits,n=document.querySelector(".gallery");if(e.length===0){d.show({messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:errorIcon,transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0,message:"Sorry, there are no images matching your search query. Please, try again!"}),n.innerHTML="";return}const s=e.map(t=>`<li class='gallery-item'>
                    <a class='gallery-link' href="${t.largeImageURL}">
                        <img class='gallery-img' src="${t.webformatURL}" alt="${t.tags}" />
                        <div class="grid">
                            <p>Likes</p>
                            <p>Views</p>
                            <p>Comment</p>
                            <p>Downloads</p>
                            <span>${t.likes}</span>
                            <span>${t.views}</span>
                            <span>${t.comments}</span>
                            <span>${t.downloads}</span>
                        </div>
                    </a>
                </li>`).join(" ");n.insertAdjacentHTML("beforeend",s),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}async function L(r){return await y.get("https://pixabay.com/api/",{params:{key:"49113920-f9af0cc3a936c3f1f6e808981",q:encodeURIComponent(r),image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:m}})}let i=1;const m=15;function S(){i=1}function b(){i+=1}function v(r,e){const n=r.data.totalHits,s=document.querySelector(".load-more-button");if(n<i*m)c(e),s.classList.add("hide"),e.innerHTML=`<p class="loading-text">We're sorry, but you've reached the end of search results.</p>`;else if(i>=2){const t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}}const w=document.querySelector(".form"),q=document.querySelector(".gallery"),a=document.querySelector(".load-message-box"),u=document.querySelector(".load-more-button");w.addEventListener("submit",x);u.addEventListener("click",M);function x(r){r.preventDefault();const e=document.querySelector(".user-input").value.trim();e!==""&&(q.innerHTML="",p(a),u.classList.add("hide"),S(),f(e))}function M(r){const e=document.querySelector(".user-input").value.trim();b(),p(a),f(e)}function f(r){L(r).then(e=>{h(e),c(a),u.classList.remove("hide"),v(e,a)}).catch(e=>{d.show({messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:errorIcon,transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0,message:"Something went wrong. Please, try again."}),console.log(e),c(a)})}
//# sourceMappingURL=index.js.map
