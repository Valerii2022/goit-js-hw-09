import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', createPromise);

// let timerId = null;
// let position = 10;
// const delay = Number(refs.form.elements.delay.value);

// function createPromise() {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     if (shouldResolve) {
//       resolve({ position, delay });
//     }
//     reject({ position, delay });
//   }, delay);
// }

// createPromise()
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

let timerId = null;

  let position = 0;
  const delay = 1000;
  const amount = 5;


const p = new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;


  setInterval(() => {
    position += 1;
 if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, delay)
   
    


});

function createPromise(event) {
  event.preventDefault();


}


  const step = 500;


   timerId = setInterval(() => {
    

  p.then(({ position, delay }) => {
  Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
}).catch(({ position, delay }) => {
  Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
});
  }, step);

if (position === amount) {
      clearInterval(timerId);
    }
  
  