import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', createPromise);

let timerId = null;

// let delay;
// let position = 0;
// let amount;

// function handleFormSubmit(event) {
//   event.preventDefault();
//   delay = Number(refs.form.elements.delay.value);

//   timerId = setInterval(() => {
//     const shouldResolve = Math.random() > 0.3;
//     amount = Number(refs.form.elements.amount.value);
//     delay += Number(refs.form.elements.step.value);
//     position += 1;
//     if (position === amount) {
//       clearInterval(timerId);
//     }
//     if (shouldResolve) {
//       Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
//       console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     } else {
//       Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
//       console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//     }
//   }, delay);
// }

// let delay = refs.form.elements.delay.value + refs.form.elements.step.value

// timerId = setInterval(() => {
// console.log('hi')
// }, delay);

// clearInterval(timerId);

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   amount = Number(refs.form.elements.amount.value);
//   delay += Number(refs.form.elements.step.value);
//   position += 1;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// ------------------------------------------------------------
// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
//     }
//     reject('Промис выполнился с ошибкой (отклонён, rejected)');
//   }, 500);
// });

// promise.then(onFulfilled).catch(onRejected);

// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   Notiflix.Notify.success(`${result}`);
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   Notiflix.Notify.failure(`${error}`);
//   console.log(`❌ ${error}`);
// }

// ---------------------------------------------------------------

let position = 0;
let amount = Number(refs.form.elements.amount.value);
const delay = Number(refs.form.elements.delay.value);
const step = Number(refs.form.elements.step.value);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    timerId = setInterval(() => {});

    if (shouldResolve) {
      // Fulfill
    } else {
      // Reject
    }
  });
}
