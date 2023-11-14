//Obtem todos os elemento com a classe "Column"
const colunas = document.querySelectorAll(".column");

//variaval para armazenar o item atualmente arrastado
let ItemArrastado = null;

// Adiciona um ouvinte de evento "dragstart" a cada elemento com a classe
colunas.forEach((item) =>{
    item.addEventListener("dragstart", (e) =>{

        //define o item a ser arrastado
        ItemArrastado = e.target;

        //Adicionar a classe "dragging" ao item para destaca-lo visualmente
        ItemArrastado.classList.add("dragging");
    });

    //adiciona um ouvinte ao evento "dragend"
    item.addEventListener("dragend", () =>{
  
        ItemArrastado.classList.remove("dragging");
        ItemArrastado = null;
    });
});

//adiciona um ouvinte de evento"dragover" a cada elemento com classe "column"
colunas.forEach((item) =>{
        item.addEventListener("dragover", (e) =>{
            e.preventDefault();//previne o comportamento padrao do dragover
            //Verifica se há um item sendo arrastado
            if(ItemArrastado == false) return;

            //Calcula a nova posição do item em relação à coluna atual
            const aplicarDepois = getNewPosition(item, e.clientY);
            if(aplicarDepois)
            {
                aplicarDepois.insertAdjacentElement("afterend", ItemArrastado)
            }else{
                item.prepend(ItemArrastado);
            }
        });
});

//Função para calcular nova posição no item na coluna

function getNewPosition(column, posY)
{
    const cards = column.querySelectorAll(".item:not(.dragging)");
    let result;

    for (let refer_card of cards) {
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.top + box.height / 2;

        // Verifica se a posição do mouse está acima do centro do item de referência
        if (posY >= boxCenterY) result = refer_card;
    }
    return result;
}