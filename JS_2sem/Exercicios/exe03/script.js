//Atribuir valor dos elementos

const PaisSelecionado = document.querySelector("#PaisSelecionado");
const PaisInfo = document.querySelector("#PaisInfo");
const informaçoesPaises = {
    Brasil: {
        nome:"Brasil",
        capital:"Brasilia",
        populaçao:"210 milhões",
        idioma: "Português BR"

    },
    Argentina: {
        nome:"Brasil",
        capital:"Brasilia",
        populaçao:"210 milhões",
        idioma: "Português BR"

    },
    Belgica: {
        nome:"Brasil",
        capital:"Brasilia",
        populaçao:"210 milhões",
        idioma: "Português BR"

    },
    Uruguai: {
        nome:"Brasil",
        capital:"Brasilia",
        populaçao:"210 milhões",
        idioma: "Português BR"

    },
    México: {
        nome:"Brasil",
        capital:"Brasilia",
        populaçao:"210 milhões",
        idioma: "Português BR"

    },
};


function atualizarInformacoesPais()
{

    const paisSelecionadoValor = PaisSelecionado.value;
    const Info = informaçoesPaises[paisSelecionadoValor];
    
    PaisInfo.textContent = `Pais: ${Info.nome}, Capital: ${Info.capital}, populaçao: ${Info.populaçao}, Idioma ${Info.idioma}`

    
}


PaisSelecionado.addEventListener("change", atualizarInformacoesPais);