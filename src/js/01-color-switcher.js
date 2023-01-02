const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]')
};

let timerId = null;

refs.btnStart.addEventListener('click', onBtnStart);
refs.btnStop.addEventListener('click', onBtnStop);
refs.btnStop.disabled = true;

function onBtnStart(){
  //console.log(refs.btnStart);
  timerId = setInterval(() => {
    onChangeBodyColor()
  }, 1000);
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
}

function onBtnStop(){
  //console.log(refs.btnStop);
  clearInterval(timerId);
  refs.btnStart.disabled = false;

}

function onChangeBodyColor(){
  //console.log(refs.btnStart);
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
