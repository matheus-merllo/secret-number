const button = document.getElementById('play-again');
const attemptsLeft = 2;
const attempts = [];

function validateAttempt(attempt){
    const number = parseInt(attempt);

    if(invalidAttempt(number)){
        elementAttempt.innerHTML += '<div class="text">Valor inválido! Não é um número</div>';
        return
    }

    if(numberOutOfBounds(number)) {
        elementAttempt.innerHTML += `
        <div class="text">Valor inválido! Diga um número entre ${lowerNumber} e ${higherNumber}</div>
        `
        return
    }

    if(number === secretNumber){
        document.body.innerHTML = `
        <h1 class="title">Você acertou!</h1>
        <h2 class="subtitle">O número secreto era ${secretNumber}</h2>
        <button id="play-again">Jogar novamente</button>
        <p class="text">Aperte o botão ou diga "jogar novamente" para tentar de novo.</p>
        `
    } else if (number < secretNumber){
        elementAttempt.innerHTML += `
        <div>O número secreto é maior <span class="material-symbols-outlined">arrow_upward</span></div>
        `
    } else {
        elementAttempt.innerHTML += `
        <div>O número secreto é menor <span class="material-symbols-outlined">arrow_downward</span></div>
        `
    }

    if(gameOver(number) && number != secretNumber){
        document.body.style.backgroundColor = 'var(--game-over-color)'
        document.body.innerHTML = `
        <h1 class="title">Fim de jogo!</h1>
        <h2 class="subtitle">O número secreto era ${secretNumber}</h2>
        <button id="play-again">Jogar novamente</button>
        <p class="text">Aperte o botão ou diga "jogar novamente" para tentar de novo.</p>
        `
        return
    }
}

function numberOutOfBounds(number){
    return number > higherNumber || number < lowerNumber
}

function invalidAttempt(number){
    return Number.isNaN(number);
}

function playAgain(attempt){
    if(attempt === 'jogar novamente'){
        window.location.reload(); 
    }
}

function gameOver(number){
    attempts.push(number);
    return attempts.length == attemptsLeft
}

document.body.addEventListener('click', (event) => {
    if(event.target.id == 'play-again'){
        window.location.reload();
    }
})




