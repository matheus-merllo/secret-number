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
}

function numberOutOfBounds(number){
    return number > higherNumber || number < lowerNumber
}

function invalidAttempt(value){
    return Number.isNaN(value);
}





