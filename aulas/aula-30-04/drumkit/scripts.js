const teclas = document.querySelectorAll(".key");
for(let t of teclas){
    console.log(t);
    t.addEventListener('transitionend', () => {
        t.classList.remove('playing');
    });
}

function playSound(event){
    const tecla = event.key;
    //console.log(`audio[data-key=${tecla}]`);
    const audio = document.querySelector(`audio[data-key=${tecla}]`);
    const div = document.querySelector(`div[data-key=${tecla}]`)
    if(!audio){
        return
    }
    div.classList.add('playing');
    audio.currentTime=0;
    audio.play();
}

window.addEventListener("keyup", playSound);