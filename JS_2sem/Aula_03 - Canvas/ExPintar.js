//Atribuir a uma variavel o elemento selecionado.
canvas = document.querySelector("#pintarCanvas");

//Definir o tamanho do canvas
canvas.width = 800;
canvas.height = 600;

//A variavel ctx se torna um objeto onde pode ser atribuido métodos

const ctx = canvas.getContext('2d');
const corEscolhida = document.querySelector('#corEscolhida');
const botao = document.querySelector('#limpar');
let pintando = false;

//Define a variavel como true indicando que o usuario começou a pintar
canvas.addEventLister('mousedown', () =>
{
    pintando = true;
});

//Define a variavel como false quando interrompe o clique

canvas.addEventLister('mouseup', () =>
{
    pintando = false;
    ctx.beginPath(); //Começa uma nova trajetória
});

//A ação é iniciada assim que o mouse se move, desde que mousedown continue pressionado