const sounds = document.querySelectorAll('audio');

function playAudio(index) {
    sounds.forEach(sound => {
        sound.pause()
        sound.currentTime = 0
    });
    sounds[index].play()
};