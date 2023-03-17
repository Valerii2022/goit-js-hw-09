import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', handleinputSubmit);

let timerId = null;
let position = 0;

function handleinputSubmit(event) {
  event.preventDefault();
  let delay = Number(refs.form.elements.delay.value);
  const amount = Number(refs.form.elements.amount.value);
  const step = Number(refs.form.elements.step.value);

  // setTimeout(() => {
    timerId = setInterval(() => {
      position += 1;

      createPromise(position, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `Fulfilled promise ${position} in ${delay}ms`
          );
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });

      if (position == amount) {
        clearInterval(timerId);
        position = 0;
      }

      delay += step;
    }, step);
  // }, delay);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}
