const e={form:document.querySelector(".form")};e.form.addEventListener("submit",(function(n){n.preventDefault(),t=Number(e.form.elements.delay.value)+Number(e.form.elements.step.value),r=setInterval((()=>{l=Number(e.form.elements.amount.value),m+=1,m==l&&clearInterval(r),console.log(l,m,t)}),t)}));let t,l,r=null,m=0;
//# sourceMappingURL=03-promises.aff3ed1b.js.map
