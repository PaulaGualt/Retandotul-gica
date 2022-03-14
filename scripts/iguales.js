let contenedorResulIguales = document.getElementById ("contenedorResulIguales")


document.addEventListener('DOMContentLoaded', () => {
    let primerNumero = localStorage.getItem('numberFirst')
    let segundoNumero = localStorage.getItem('numberSecond')
    if (Object.is(primerNumero,segundoNumero)){
        contenedorResulIguales.textContent = 'Los numeros son iguales'
    } else {
        contenedorResulIguales.textContent = 'Los numeros no son iguales'
    }
    
}) 