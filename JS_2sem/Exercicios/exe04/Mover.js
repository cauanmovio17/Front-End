
canvas = document.querySelector("Canvas");


canvas.width = 800;
canvas.height = 600;


ctx = canvas.getContext('2d');

var x = canvas.width / 2;
var y = canvas.height / 2;
var quadrado = 50;

desenhar();

function desenhar()

document.querySelector('#coordenada').textContent = `x = ${x} y = ${y}`

document.addEventListener('keydown' , (event) =>{
    .key === "a" || event.key === "A" || event.key === "ArrowLeft"
})


else if (event.key === "d" || event.key === "D" || event.key === "ArrowLeft")


else if (event.key === "w" || event.key === "W"|| event.key === "ArrowLeft")

else if (event.key === "s" || event.key === "S"|| event.key === "ArrowLeft")