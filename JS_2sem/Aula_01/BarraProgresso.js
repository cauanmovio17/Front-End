//Declarar variavel e atribuir valor, para esconder a barra de progresso
var BarraProgresso = document.querySelector(".progress");
BarraProgresso.style.display = "none";

function animarBarraProgresso() {
    var Progresso = 0;
    var Barra = document.querySelector(".progress-bar");
    BarraProgresso.style.display = "block";

    var intervalo = setInterval(function () {
        if (Progresso > 100) {
            clearInterval(intervalo);
            BarraProgresso.style.display = "none";
            document.querySelector("#mostrar").innerHTML =
            `<div class="alert alert-success fade show" role="alert">
            <span> Olá, Bem-Vindo ao Sesi</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>`
        }
        else{
            Progresso++;
            Barra.style.width = Progresso + "%"
        }



    },50);
}