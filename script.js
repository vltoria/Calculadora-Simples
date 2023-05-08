function inserir(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
};

function apagar() {
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = eval(resultado);
}

let resultado = document.getElementById('resultado').innerHTML;
