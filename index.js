const PIEDRA = 'Piedra'
const PAPEL = 'Papel'
const TIJERA = 'Tijera'

const gameOptions = {
    1: PIEDRA,
    2: PAPEL,
    3: TIJERA
}

function starGame(optionUser){
    const numComputer = Math.floor(Math.random() * (4 - 1)) + 1
    const optionComp = gameOptions[numComputer]


    const deadHeat =
    optionUser===optionComp
    
    const userWin =
    optionUser===PIEDRA && optionComp===TIJERA || 
    optionUser===PAPEL  && optionComp===PIEDRA || 
    optionUser===TIJERA && optionComp===PAPEL
    
    const compWin =
    optionComp===PIEDRA && optionUser===TIJERA ||
    optionComp===PAPEL  && optionUser===PIEDRA || 
    optionComp===TIJERA && optionUser===PAPEL
    
    if(deadHeat){
        showResult(`«Yo ${optionComp} y tú ${optionUser}. ¡Hemos empatado!»`)
    }
    if(userWin){
        showResult(`«Yo ${optionComp} y tú ${optionUser}. ¡Has ganado!»`)
    }
    if(compWin){
        showResult(`«Yo ${optionComp} y tú ${optionUser}. ¡He ganado!»`)
    }
}

function showResult(result){
    document.getElementById('result').innerHTML = result
}

function letsPlay(){
    const userNumber = parseInt(document.getElementById('user-number').value)
    const optionUser = gameOptions[userNumber]
    
    optionUser ? starGame(optionUser) : showResult('Entiendo que no quieres jugar. Adiós')  //ternario

    /* if(!optionUser){
        showResult('Entiendo que no quieres jugar. Adiós')
    }
    if(optionUser){
        starGame(optionUser)
    } */


}