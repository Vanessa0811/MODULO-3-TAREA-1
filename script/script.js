let btn = document.getElementById('taza');

let moneda1 = document.getElementById('moneda-uno')
const fragmento1 = document.createDocumentFragment();

let moneda2 = document.getElementById('moneda-dos')
const fragmento2 = document.createDocumentFragment();

let moneda = ['Elige tu Moneda', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euro', 'Libra Esterlina'];
let monedacambio = ['Elige tu Moneda', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euro', 'Libra Esterlina'];

moneda.forEach((moneda, value) => {

    let option = document.createElement('option')
    option.setAttribute('value', value)
    option.textContent = moneda
    fragmento1.appendChild(option)

})

moneda1.appendChild(fragmento1)

monedacambio.forEach((moneda, value) => {

    let option = document.createElement('option')
    option.setAttribute('value', value)
    option.textContent = moneda
    fragmento2.appendChild(option)

})

moneda2.appendChild(fragmento2)

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let monedaInicial = document.getElementById('moneda-uno')
    let monedaInicialSelect = monedaInicial.options[monedaInicial.selectedIndex].value
    let monedaFinal = document.getElementById('moneda-dos')
    let monedaFinalSelect = monedaFinal.options[monedaFinal.selectedIndex].value

    let valor = document.getElementById('numero-1').value

    if (monedaInicialSelect == 1) {
        if (monedaFinalSelect == 2) {
            valorFinal = valor * 20.48;
            mostrar(valorFinal)
        }
    }

    if (monedaInicialSelect == 1) {
        if (monedaFinalSelect == 3) {
            valorFinal = valor * 4070;
            mostrar(valorFinal)
        }
    }

    if (monedaInicialSelect == 1) {
        if (monedaFinalSelect == 4) {
            valorFinal = valor * 0.88;
            mostrar(valorFinal)
        }
    }

    if (monedaInicialSelect == 1) {
        if (monedaFinalSelect == 5) {
            valorFinal = valor * 0.74;
            mostrar(valorFinal)
        }
    }
})

function mostrar() {
    let resultado = document.getElementById('resultado')
    resultado.value = valorFinal
}

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let monedaInicial = document.getElementById('moneda-uno')
    let monedaInicialSelect = monedaInicial.options[monedaInicial.selectedIndex].value
    let monedaFinal = document.getElementById('moneda-dos')
    let monedaFinalSelect = monedaFinal.options[monedaFinal.selectedIndex].value

    let valor = document.getElementById('numero-1').value


    if (monedaInicialSelect == 2) {
        if (monedaFinalSelect == 1) {
            valorFinal = valor * 0.049;
            mostrar(valorFinal)
        }
    }
    if (monedaInicialSelect == 2) {
        if (monedaFinalSelect == 3) {
            valorFinal = valor * 198.93;
            mostrar(valorFinal)
        }
    }

    if (monedaInicialSelect == 2) {
        if (monedaFinalSelect == 4) {
            valorFinal = valor * 0.043;
            mostrar(valorFinal)
        }

    }
    if (monedaInicialSelect == 2) {
        if (monedaFinalSelect == 5) {
            valorFinal = valor * 0.036;
            mostrar(valorFinal)
        }
    }
})

function mostrar() {
    let resultado = document.getElementById('resultado')
    resultado.value = valorFinal
}

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let monedaInicial = document.getElementById('moneda-uno')
    let monedaInicialSelect = monedaInicial.options[monedaInicial.selectedIndex].value
    let monedaFinal = document.getElementById('moneda-dos')
    let monedaFinalSelect = monedaFinal.options[monedaFinal.selectedIndex].value

    let valor = document.getElementById('numero-1').value

    if (monedaInicialSelect == 3) {
        if (monedaFinalSelect == 1) {
            valorFinal = valor * 0.00025;
            mostrar(valorFinal)
        }
    }
    if (monedaInicialSelect == 3) {
        if (monedaFinalSelect == 2) {
            valorFinal = valor * 0.0051;
            mostrar(valorFinal)
        }
    }

    if (monedaInicialSelect == 3) {
        if (monedaFinalSelect == 4) {
            valorFinal = valor * 0.00022;
            mostrar(valorFinal)
        }

    }
    if (monedaInicialSelect == 3) {
        if (monedaFinalSelect == 5) {
            valorFinal = valor * 0.00018;
            mostrar(valorFinal)
        }
    }
})

function mostrar() {
    let resultado = document.getElementById('resultado')
    resultado.value = valorFinal
}

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let monedaInicial = document.getElementById('moneda-uno')
    let monedaInicialSelect = monedaInicial.options[monedaInicial.selectedIndex].value
    let monedaFinal = document.getElementById('moneda-dos')
    let monedaFinalSelect = monedaFinal.options[monedaFinal.selectedIndex].value

    let valor = document.getElementById('numero-1').value

    if (monedaInicialSelect == 4) {
        if (monedaFinalSelect == 1) {
            valorFinal = valor * 1.13;
            mostrar(valorFinal)
        }
    }
    if (monedaInicialSelect == 4) {
        if (monedaFinalSelect == 2) {
            valorFinal = valor * 23.18;
            mostrar(valorFinal)
        }
    }

    if (monedaInicialSelect == 4) {
        if (monedaFinalSelect == 3) {
            valorFinal = valor * 4604;
            mostrar(valorFinal)
        }

    }
    if (monedaInicialSelect == 4) {
        if (monedaFinalSelect == 5) {
            valorFinal = valor * 0.84;
            mostrar(valorFinal)
        }
    }
})

function mostrar() {
    let resultado = document.getElementById('resultado')
    resultado.value = valorFinal
}

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let monedaInicial = document.getElementById('moneda-uno')
    let monedaInicialSelect = monedaInicial.options[monedaInicial.selectedIndex].value
    let monedaFinal = document.getElementById('moneda-dos')
    let monedaFinalSelect = monedaFinal.options[monedaFinal.selectedIndex].value

    let valor = document.getElementById('numero-1').value

    if (monedaInicialSelect == 5) {
        if (monedaFinalSelect == 1) {
            valorFinal = valor * 1.35;
            mostrar(valorFinal)
        }
    }
    if (monedaInicialSelect == 5) {
        if (monedaFinalSelect == 2) {
            valorFinal = valor * 27.63;
            mostrar(valorFinal)
        }
    }

    if (monedaInicialSelect == 5) {
        if (monedaFinalSelect == 3) {
            valorFinal = valor * 5489;
            mostrar(valorFinal)
        }

    }
    if (monedaInicialSelect == 5) {
        if (monedaFinalSelect == 4) {
            valorFinal = valor * 1.19;
            mostrar(valorFinal)
        }
    }
})

function mostrar() {
    let resultado = document.getElementById('resultado')
    resultado.value = valorFinal
}




