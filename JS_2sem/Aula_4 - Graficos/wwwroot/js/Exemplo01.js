//Dados para o grafico
var data = {
    //Array de rotulos do grafico
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],

    //Propriedade do grafico
    datasets: [{
        label: 'Vendas 2023',
        data:[12, 19, 5, 9, 22, 5]
    }]
};

//Configurações do grafico
var options = {
    scales: {
        y:{
            beginAtZero: true
        }
    }
};

//Criar o grafico de barras

var ctx = document.querySelector('#grafico').getContext('2d');

var barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
})