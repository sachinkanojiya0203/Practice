let startTime = 0;
let elapsed = 0;
let running = false;
let timerInterval = null;
let lapCount = 0;

const timeEl = document.getElementById('time');
const msEl = document.getElementById('ms');
const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapsEl = document.getElementById('laps');

function formatTime(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centis = Math.floor((ms % 1000) / 10);
    const pad = (n) => String(n).padStart(2, '0');
    return {
        main: `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`,
        ms: `.${pad(centis)}`
    };
}

function updateDisplay() {
    const currentElapsed = running ? elapsed + (Date.now() - startTime) : elapsed;
    const { main, ms } = formatTime(currentElapsed);
    timeEl.textContent = main;
    msEl.textContent = ms;
}

function start() {
    running = true;
    startTime = Date.now();
    timerInterval = setInterval(updateDisplay, 10);
    startStopBtn.textContent = 'Stop';
    startStopBtn.classList.add('running');
    lapBtn.disabled = false;
}

function stop() {
    running = false;
    elapsed += Date.now() - startTime;
    clearInterval(timerInterval);
    startStopBtn.textContent = 'Start';
    startStopBtn.classList.remove('running');
    lapBtn.disabled = true;
}

function reset() {
    running = false;
    clearInterval(timerInterval);
    elapsed = 0;
    lapCount = 0;
    startStopBtn.textContent = 'Start';
    startStopBtn.classList.remove('running');
    lapBtn.disabled = true;
    lapsEl.innerHTML = '';
    updateDisplay();
}

function addLap() {
    lapCount++;
    const currentElapsed = running ? elapsed + (Date.now() - startTime) : elapsed;
    const { main, ms } = formatTime(currentElapsed);
    const lapDiv = document.createElement('div');
    lapDiv.textContent = `Lap ${lapCount}: ${main}${ms}`;
    lapsEl.prepend(lapDiv);
}

startStopBtn.addEventListener('click', () => {
    if (running) {
        stop();
    } else {
        start();
    }
});

resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', addLap);

updateDisplay();