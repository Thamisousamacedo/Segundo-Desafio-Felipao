// Criei a variável com nome da heroína e a função com dois parâmetros: vitorias e derrotas e depois é calculado com a variável SaldoVitorias
let nomeDoHeroi = "Arya Stark"

function calcularNivel(vitorias, derrotas){

let saldoVitorias = vitorias - derrotas

let nivel = "";

// Foi criado as faixas com o limite das vitorias e o nome do nível e logo em seguida utilizei o laço de repetição FOR para percorrer as faixas
let faixas = [
        { limite: 10, nome: "Ferro" },
        { limite: 20, nome: "Bronze" },
        { limite: 50, nome: "Prata" },
        { limite: 80, nome: "Ouro" },
        { limite: 90, nome: "Diamante" },
        { limite: 100, nome: "Lendário" }
    ];

    for (let i = 0; i < faixas.length; i++) {
        if (vitorias <= faixas[i].limite) {
            nivel = faixas[i].nome;
            break;
            }
}

// O if foi utilizado para determinar a faixa imortal se caso a pontuação for maior que 100
if (nivel === "") {
        nivel = "Imortal";
    }

// Mensagem de retorno e saída e logo em seguida o calculo do nivel da heroina e resultado    
    return `A heroína de nome ${nomeDoHeroi} tem saldo de ${saldoVitorias} está no rank de ${nivel}`;
}
let resultado = calcularNivel(200,70);

console.log(resultado);

// mesagem de saída: A heroína de nome Arya Stark tem saldo de 130 está no rank de Imortal







