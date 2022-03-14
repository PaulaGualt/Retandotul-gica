let form = document.querySelector('form');
let divAdvertencia = document.getElementById("advertencias");
let botonNumeroMenor = document.getElementById("botonNumeroMenor");
let botonIguales = document.getElementById ("botonIguales");
let botonAlternarNumeros = document.getElementById("botonAlternarNumeros")
let botonSumarNumeros = document.getElementById("botonSumarNumeros")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let numero1 = Number(document.getElementById("primerNumero").value);
    let numero2 = Number(document.getElementById("segundoNumero").value);
  
    if ((Number.isInteger(numero1) && numero1 > 0) && (Number.isInteger(numero2) && numero2 > 0)){
        divAdvertencia.textContent =`Elige la opción que deseas calcular`;
    } else if (numero1 <= 0 || numero2 <= 0 ){
        divAdvertencia.textContent =`Los numeros deben ser postivos (0 se considera un numero neutro)`;
    } else {
        divAdvertencia.textContent =`Los numeros deben ser enteros`;
    } 

    localStorage.setItem("numberFirst", numero1 );
    localStorage.setItem("numberSecond", numero2 );
})

//Redirección hacia la página donde se mostrará cual de los dos numeros es el mejor//
botonNumeroMenor.addEventListener("click", () => {
    window.location.href= './pages/menor.html'   
})

//Redirección hacia la página donde se mostrará si los dos numeros enteros son iguales//
botonIguales.addEventListener('click', () => {
    window.location.href = './pages/iguales.html'

})
//Redirección hacia la página donde se mostrará el intercambio de numeros//
botonAlternarNumeros.addEventListener('click', () => {
    window.location.href = './pages/alternar.html'

})
//Redirección hacia la página donde se sumaran los numeros//
botonSumarNumeros.addEventListener('click', () => {
    window.location.href = './pages/sumar.html'

})