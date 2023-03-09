import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startBtn: document.querySelector('[data-start]'),
};

refs.startBtn.disabled = true;

const currentDate = new Date();
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedTime = selectedDates[0];
    const deltaTime = selectedTime - currentDate;
    if (deltaTime < 0) {
      return alert('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
      refs.startBtn.addEventListener('click', startTimer);
    }
  },
};

flatpickr('input[type="text"]', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function startTimer() {
  timerId = setInterval(() => {}, 1000);
}
