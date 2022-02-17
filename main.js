const keys = document.querySelectorAll('.keys');

function playNotes(event){
    
    let keyCode = getKeyCode(event);

    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    if(!key) return;

    playAudio(keyCode);
    
}

function playAudio(keyCode){
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

    audio.currentTime = 0;    
    audio.play();
}
function getKeyCode(event){
    let keyCode;

    const isKeyboard = event.type === 'keydown';

    if(isKeyboard)
        keyCode= event.keyCode;
    else
        keyCode = event.target.dataset.key;

    return keyCode;
}

keys.forEach((key) => {
    key.addEventListener('click',playNotes)    
})

window.addEventListener('keydown',playNotes);