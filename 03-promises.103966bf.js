!function(){var e={form:document.querySelector(".form")};e.form.addEventListener("submit",(function(m){m.preventDefault(),n=Number(e.form.elements.delay.value)+Number(e.form.elements.step.value),t=setInterval((function(){r=Number(e.form.elements.amount.value),(l+=1)==r&&clearInterval(t),console.log(r,l,n)}),n)}));var n,r,t=null,l=0}();
//# sourceMappingURL=03-promises.103966bf.js.map
