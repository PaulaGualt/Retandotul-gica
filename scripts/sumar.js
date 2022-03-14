let resulSumarNumeros = document.getElementById("contenedorResulSuma")

document.addEventListener('DOMContentLoaded', () => {
    let primerNumero = localStorage.getItem('numberFirst')
    let segundoNumero = localStorage.getItem('numberSecond')
    let suma = primerNumero-(-segundoNumero)
    resulSumarNumeros.textContent = `La suma de los dos numeros es  ${suma}`
    
})