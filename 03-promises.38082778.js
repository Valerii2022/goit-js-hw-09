function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=l);var i=l("7Y9D8");const r=document.querySelector(".form");r.addEventListener("submit",(function(e){e.preventDefault();let t=Number(r.elements.delay.value);const n=Number(r.elements.step.value),o=Number(r.elements.amount.value);if(o<=0)return void alert("Not valid amount!!!");setTimeout((()=>{u+=1,a(u,t).then(d).catch(c),1!=o?s=setInterval((()=>{u+=1,t+=n,a(u,t).then(d).catch(c),u==o&&(clearInterval(s),u=0)}),n):u=0}),t)}));let s=null,u=0;function a(e,t){return new Promise(((n,o)=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}))}const d=({position:t,delay:n})=>{e(i).Notify.success(`Fulfilled promise ${t} in ${n}ms`),console.log(`✅ Fulfilled promise ${t} in ${n}ms`)},c=({position:t,delay:n})=>{e(i).Notify.failure(`Rejected promise ${t} in ${n}ms`),console.log(`❌ Rejected promise ${t} in ${n}ms`)};
//# sourceMappingURL=03-promises.38082778.js.map
