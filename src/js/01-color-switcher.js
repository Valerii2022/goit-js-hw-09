const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let timerId = null;

refs.startBtn.addEventListener('click', handleStartBtnClick);
refs.stopBtn.addEventListener('click', handleStopBtnClick);

function handleStartBtnClick() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
  }, 1000);
  refs.startBtn.disabled = true;
}

function handleStopBtnClick() {
  clearInterval(timerId);
  if (refs.startBtn.disabled) {
    refs.startBtn.disabled = false;
  }
}
