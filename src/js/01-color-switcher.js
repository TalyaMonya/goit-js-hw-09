const ref = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('button[data-start'),
    btnStop: document.querySelector('button[data-stop]')
}

const CHANGE_COLOR_DELAY = 1000;
let idInterval = null;


ref.btnStop.disabled = true;
ref.btnStart.addEventListener('click', handlerStartChangeColor);
ref.btnStop.addEventListener('click', handlerStopChangeColor)

function handlerStartChangeColor() {
    ref.btnStart.disabled = true;
    ref.btnStop.disabled = false;

    idInterval = setInterval(() => {
        ref.body.style.backgroundColor = getRandomHexColor();
    }, CHANGE_COLOR_DELAY);
}



function handlerStopChangeColor() {
    ref.btnStart.disabled = false;
    ref.btnStop.disabled = true;

    clearInterval(idInterval);
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}