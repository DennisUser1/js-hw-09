function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.body,
};

refs.startBtn.addEventListener('click', startBtnClick);
refs.stopBtn.addEventListener('click', stopBtnClick);
refs.stopBtn.disabled = true;

let intervalId = null;

function startBtnClick() {
    console.log('+1 click to startBtn');
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.startBtn.setAttribute('disabled', 'true');
    refs.stopBtn.removeAttribute('disabled');
}

function stopBtnClick() {
    console.log('+1 click to stopBtn');
    clearInterval(intervalId);
    refs.startBtn.removeAttribute('disabled');
    refs.stopBtn.setAttribute('disabled', 'true');
}