
const botao = document.querySelector("#botao");
const botaob = document.querySelector("#diminuir");
const zerar = document.querySelector("#zerar");
const contadorElemento = document.querySelector("#contador");

let contador = 0;

function aumentarContador() {
    contador++;
    contadorElemento.textContent = contador;

}

function TirarContador() {
    contador--;
    contadorElemento.textContent = contador;
}

function IniciarContador() {
    contador = 0;
    contadorElemento.textContent = contador;
}


botao.addEventListener("click", aumentarContador);

diminuir.addEventListener("click", TirarContador);

zerar.addEventListener("click", IniciarContador);