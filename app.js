const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key=${e.key}]`);
    const kit = document.querySelector(`.kit[data-key=${e.key}]`);
    if (!audio) return; // stop
    audio.currentTime = 0; // rewind to the start (click multiple times)
    audio.play();
    kit.classList.add('playing');
};

const removeClass = (e) => {
    const kit = document.querySelector(`.kit[data-key=${e.key}]`);
    if (!kit) return;
    kit.classList.remove('playing');
};

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeClass);
