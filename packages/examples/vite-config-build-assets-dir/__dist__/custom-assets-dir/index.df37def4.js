import{v as i}from"./env.js";const s=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))o(x);new MutationObserver(x=>{for(const e of x)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(x){const e={};return x.integrity&&(e.integrity=x.integrity),x.referrerpolicy&&(e.referrerPolicy=x.referrerpolicy),x.crossorigin==="use-credentials"?e.credentials="include":x.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(x){if(x.ep)return;x.ep=!0;const e=n(x);fetch(x.href,e)}};s();const l=`Hello ${i.VITE_NAME}!`;document.querySelector("#app").innerHTML=`
  <h1>${l}</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
