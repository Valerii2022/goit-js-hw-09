import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', handleinputSubmit);

let timerId = null;
let position = 0;

function handleinputSubmit(event) {
  event.preventDefault();

  let delay = Number(formRef.elements.delay.value);
  const step = Number(formRef.elements.step.value);
  const amount = Number(formRef.elements.amount.value);

  setTimeout(() => {
    position += 1;

    createPromise(position, delay).then(onSuccess).catch(onError);

    if (amount <= 1) {
      position = 0;
      return;
    }

    timerId = setInterval(() => {
      position += 1;
      delay += step;

      createPromise(position, delay).then(onSuccess).catch(onError);

      if (position == amount) {
        clearInterval(timerId);
        position = 0;
      }
    }, step);
  }, delay);
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

const onSuccess = ({ position, delay }) => {
  Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

const onError = ({ position, delay }) => {
  Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
};
