//Atribuir a uma variavel o elemento selecionado.
canvas = document.querySelector("#pintarCanvas");

//Definir o tamanho do canvas
canvas.width = 800;
canvas.height = 600;

//A variavel ctx se torna um objeto onde pode ser atribuido métodos

const ctx = canvas.getContext('2d');
const corEscolhida = document.querySelector('#corEscolhida');
const botao = document.querySelector('#limpar');
let desenhando = false;

//Define a variavel como true indicando que o usuario começou a pintar
canvas.addEventListener('mousedown', () => {
    desenhando = true;
});

//Define a variavel como false quando interrompe o clique

canvas.addEventListener('mouseup', () => {
    desenhando = false;
    ctx.beginPath(); //Começa uma nova trajetória
});

//A ação é iniciada assim que o mouse se move, desde que mousedown continue pressionado
//Desde que o mousedown continue pressionando.
canvas.addEventListener('mousemove', desenhar);

//Seleciona a cor a ser utilizada
corEscolhida.addEventListener('input', atualizaCor);

//Chamamos a função desenhar e passamos o event como parametro
//O event é um objeto que contém atributos que são acionados de
//Acordo com o evento ocorrido

function desenhar(event) {
    if (!desenhando) return;

    //Retornam a posição do elemento na tela
    const { clientX, clientY } = event;
    //Obtem as coordenadas do canto esquerdo do topo
    const { left, top } = canvas.getBoundingClientRect();

    //Subitrai as coordenadas do canvas, relativizando com o canvas

    const x = clientX - left;
    const y = clientY - top;



    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

function atualizaCor(event)
{
    ctx.strokeStyle = event.target.value
}

function limpar()
{
     ctx.clearRect(0,0, canvas.width, canvas.height)
     ctx.beginPath();
}

botao.addEventListener('click', limpar);