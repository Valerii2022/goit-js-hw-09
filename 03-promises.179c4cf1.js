function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},t=o.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in l){var o=l[e];delete l[e];var t={id:e,exports:{}};return n[e]=t,o.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){l[e]=o},o.parcelRequired7c6=t);var r=t("7Y9D8");const i={form:document.querySelector(".form")};i.form.addEventListener("submit",(function(o){o.preventDefault();let n=Number(i.form.elements.delay.value);const l=Number(i.form.elements.amount.value),t=Number(i.form.elements.step.value);s=setInterval((()=>{var o,i;a+=1,(o=a,i=n,new Promise(((e,n)=>{Math.random()>.3?e({position:o,delay:i}):n({position:o,delay:i})}))).then((({position:o,delay:n})=>{e(r).Notify.success(`Fulfilled promise ${o} in ${n}ms`),console.log(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{e(r).Notify.failure(`Rejected promise ${o} in ${n}ms`),console.log(`❌ Rejected promise ${o} in ${n}ms`)})),a==l&&(clearInterval(s),a=0),n+=t}),t)}));let s=null,a=0;
//# sourceMappingURL=03-promises.179c4cf1.js.map
