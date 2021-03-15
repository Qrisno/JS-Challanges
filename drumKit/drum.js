const keys = document.querySelectorAll('.key')

function playAudio(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.key[data-key="${keyCode}"]`)
    key.classList.add('onPlay')
}
window.addEventListener('keydown', function(e) {
    playAudio(e.keyCode);
})

keys.forEach(key => key.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'transform') return
    key.classList.remove('onPlay')
}))
keys.forEach(key => key.addEventListener('click', (e) => {
    let keyCode;
    const keyValue = e.srcElement.innerHTML;
    if (keyValue.length > 1 && keyValue[18]) {
        keyCode = keyValue[18].charCodeAt(0);
    } else if (keyValue.length > 1) {
        keyCode = e.path[1].getAttribute('data-key')
    } else {
        keyCode = keyValue.charCodeAt(0);
    }
    playAudio(keyCode);

}))