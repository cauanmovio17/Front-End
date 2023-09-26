//Atribuir a uma variavel o elemento selecionado.
canvas = document.querySelector("canvas");

//Definir o tamanho do canvas
canvas.width = 800;
canvas.height = 600;

//A variavel ctx se torna um objeto onde pode ser atribuido métodos

ctx = canvas.getContext('2d');

//Atribuimos propriedade e metodos ao nosso objeto
//Posições (X, Y, Width, Height)

ctx.fillStyle = "red";
ctx.fillRect(100,80,150,200);
ctx.fillStyle = "yellow";
ctx.fillRect(200,100,500,100);
ctx.fillStyle = "pink";
ctx.fillRect(100,400,350,200);


//Desenhando uma linha
//Inicio do desenho

ctx.beginPath();
//Posição de inicio da linha
ctx.moveTo(50,450);
ctx.lineTo(700,50);
ctx.lineTo(500,300);
ctx.lineTo(700,300);
ctx.strokeStyle ="black";
ctx.stroke();

//Criando um circulo
//Posições para criação
//X, Y, Raio, AnguloInicial, AnguloFinal

/*
ctx.beginPath();
ctx.arc(400, 450, 100, 0, Math.PI * 2);
ctx.fillStyle ="green";
ctx.stroke();
ctx.fill();
ctx.closePath();
*/





for(var i = 0; i < 10; i++)
{
    ctx.beginPath();
    ctx.arc(500, 150, 80, 0, Math.PI * 2);
    ctx.fillStyle ="blue";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();  
}

//Deixando as posições radomicas

for(var i = 0; i < 10; i++)
{
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    ctx.beginPath();
    ctx.arc(x, y, Math.random() * 100, 0, Math.PI * 2)
    ctx.fillStyle ="rgba(0,0,255,0.5)";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

