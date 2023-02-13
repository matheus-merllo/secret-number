const elementAttempt = document.getElementById('attempt');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start();
recognition.addEventListener('result', onSpeak);

function onSpeak(event){
    const attempt = (event.results[0][0].transcript);
    showAttempt(attempt);
    validateAttempt(attempt);
    playAgain(attempt);
}

function showAttempt(attempt){
    elementAttempt.innerHTML = 
        `<p class="text">Você disse:</p>
        <span class="box">${attempt}</span>`
}

recognition.addEventListener('end', () => {
    recognition.start();
})