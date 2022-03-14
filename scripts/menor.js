let resultadoNumeroMenor = document.getElementById("resultadoNumeroMenor")
let resultadorNumerosIguales = document.getElementById("resultadorNumerosIguales")

document.addEventListener('DOMContentLoaded', () => {
    let primerNumero = localStorage.getItem('numberFirst')
    let segundoNumero = localStorage.getItem('numberSecond')
    let resulNumeroMenor = Math.min(primerNumero, segundoNumero);
    if (Object.is(primerNumero,segundoNumero)){
        resultadorNumerosIguales.textContent = 'Los numeros no deben ser iguales'
    } else {    
    }
    
    resultadoNumeroMenor.textContent = `El menor entre los dos numeros es ${resulNumeroMenor}`;
}) 