const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', () => {
    key.classList.remove('playing');
}));

window.addEventListener("keyup", event => {

    const audio = document.querySelector(`audio[data-key='${event.key}']`);
    const key = document.querySelector(`div[data-key="${event.key}"]`);

    //permite tocar um audio quando outro ainda nao acabou
    if(!audio){
        return
    }
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    //key.classList.remove('playing');
});