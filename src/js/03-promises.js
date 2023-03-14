import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};
refs.form.addEventListener('submit', createPromise);

let timerId = null;
let position = 0;

function createPromise(event) {
  event.preventDefault();
  const amount = Number(refs.form.elements.amount.value);
  let delay = Number(refs.form.elements.delay.value);
  let step = 0;

  timerId = setInterval(() => {
    position += 1;
    step = Number(refs.form.elements.step.value);
    delay += step;

    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }
      if (position === amount) {
        position = 0;
        clearInterval(timerId);
        return;
      }
    });
  }, delay + step);
}

// timerId = setInterval(() => {}, delay + step);
