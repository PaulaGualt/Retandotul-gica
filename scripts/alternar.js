let contenedorAlternarNumeros = document.getElementById("contenedorAlternarNumeros");

document.addEventListener('DOMContentLoaded', () => {
    let primerNumero = localStorage.getItem('numberFirst')
    let segundoNumero = localStorage.getItem('numberSecond')

    primerNumero = (primerNumero ^ segundoNumero)
    segundoNumero = (primerNumero ^segundoNumero)
    primerNumero = (primerNumero ^ segundoNumero)
   
    contenedorAlternarNumeros.textContent = `Ahora el primer numero es ${primerNumero} y segundo numero es ${segundoNumero}`;

})