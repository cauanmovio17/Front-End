//Atribuir valor dos elementos

const corSelecionada = document.querySelector("#corSelecionada");
const exibirCor = document.querySelector("#exibirCor");

//Função para atualizar a cor exibida, quando alterar a seleção
function atualizarCor()
{
    const corSelecionadaValor = corSelecionada.value;
    exibirCor.textContent = `Cor Selecionada: ${corSelecionada.value}`;
    exibirCor.style.color = corSelecionadaValor; 
}

//Adicionando um ouvinte de evento change ao select

corSelecionada.addEventListener("change", atualizarCor);