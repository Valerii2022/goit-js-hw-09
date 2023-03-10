import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  timePickerRef: document.querySelector('#datetime-picker'),
  daysTimerRef: document.querySelector('[data-days]'),
  hoursTimerRef: document.querySelector('[data-hours]'),
  minutesTimerRef: document.querySelector('[data-minutes]'),
  secondsTimerRef: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

const currentDate = new Date();
let timerId = null;
let deltaTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    deltaTime = selectedDates[0] - currentDate;

    if (deltaTime < 0) {
      return Notiflix.Notify.failure('Please choose a date in the future');
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

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function startTimer() {
  refs.startBtn.disabled = true;
  refs.timePickerRef.disabled = true;

  timerId = setInterval(() => {
    deltaTime -= 1000;
    if (deltaTime <= 0) {
      clearInterval(timerId);
      return;
    }

  const convertTime = convertMs(deltaTime);
  refs.daysTimerRef.textContent = convertTime.days;
  refs.hoursTimerRef.textContent = convertTime.hours;
  refs.minutesTimerRef.textContent = convertTime.minutes;
  refs.secondsTimerRef.textContent = convertTime.seconds;
  }, 1000);
}
