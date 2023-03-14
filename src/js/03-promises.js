import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', createPromise);

let timerId = null;
let position = 0;
let step = 0;
let delay = 0;
let amount = 0;
let currentDelay = 0;



function createPromise(event) {
  event.preventDefault();
  amount = Number(refs.form.elements.amount.value);
  delay = Number(refs.form.elements.delay.value);
  step = Number(refs.form.elements.step.value);
  
  setTimeout(() => {
currentDelay = delay + step;
    timerId = setInterval(() => {
    
    const shouldResolve = Math.random() > 0.3;
    position += 1;
    delay += step;
    if (shouldResolve) {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    }
    if (position === amount) {
      clearInterval(timerId);
    }
    }, currentDelay)
    
  },delay)
  
  
}





