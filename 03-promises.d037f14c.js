!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),l={form:document.querySelector(".form")};l.form.addEventListener("submit",(function(n){n.preventDefault();var o=Number(l.form.elements.delay.value),t=Number(l.form.elements.amount.value),r=Number(l.form.elements.step.value);a=setInterval((function(){var n,l;(n=c+=1,l=o,new Promise((function(e,o){Math.random()>.3?e({position:n,delay:l}):o({position:n,delay:l})}))).then((function(n){var o=n.position,t=n.delay;e(i).Notify.success("Fulfilled promise ".concat(o," in ").concat(t,"ms")),console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(i).Notify.failure("Rejected promise ".concat(o," in ").concat(t,"ms")),console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),c==t&&(clearInterval(a),c=0),o+=r}),r)}));var a=null,c=0}();
//# sourceMappingURL=03-promises.d037f14c.js.map