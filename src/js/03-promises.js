const refs = {
  form: document.querySelector('.form'),
}

refs.form.addEventListener('submit', handleFormSubmit);

let timerId = null;

let delay;
let position = 0;
let amount;

function handleFormSubmit(event) {
  event.preventDefault();
  delay = Number(refs.form.elements.delay.value) + Number(refs.form.elements.step.value);
  
  timerId = setInterval(() => {
    amount = Number(refs.form.elements.amount.value);
    position += 1;
    if (position == amount) {
    clearInterval(timerId);
  }
    console.log(amount, position, delay)
  }, delay);

  
 }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// let delay = refs.form.elements.delay.value + refs.form.elements.step.value

// timerId = setInterval(() => {
// console.log('hi')
// }, delay);

// clearInterval(timerId);