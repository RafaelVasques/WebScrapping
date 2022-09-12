import { somaLucrosRodada } from './somaLucrosRodada'

export function coletaDadosRodada () {
				
    const queryValorCrash = "#crash-recent > div.crash-previous > div > span:nth-child(1)"; // Valor do último crash
    const queryDivQtdJogadores = "#crash > div > div.crash-bottom > div.totals > div.left > span:nth-child(1)"; //quantidade de jogadores na rodada
    const queryDivVlrApostas = "#crash > div > div.crash-bottom > div.totals > div.right > span"; //valor total das apostas na rodada
    const queryDivLucro1 = "#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(1) > td:nth-child(4) > div"; // lucro 1
    const queryDivLucro2 = "#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(2) > td:nth-child(4) > div"; // lucro 2
    const queryDivLucro3 = "#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(3) > td:nth-child(4) > div"; // lucro 3
    const queryDivLucro4 = "#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(4) > td:nth-child(4) > div"; // lucro 4
    const queryDivLucro5 = "#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(5) > td:nth-child(4) > div"; // lucro 5
    const queryDivLucro6 = "#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(6) > td:nth-child(4) > div"; // lucro 6
    const queryDivLucro7 = "#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(7) > td:nth-child(4) > div"; // lucro 7
    const queryDivLucro8 = "#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(8) > td:nth-child(4) > div"; // lucro 8
    const queryDivLucro9 = "#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(9) > td:nth-child(4) > div"; // lucro 9
    const queryDivLucro10 = "#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(10) > td:nth-child(4) > div"; // lucro 10
    const queryDivLucro11 = "#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(11) > td:nth-child(3) > div > span"; // LUCRO 11
    
    const valorCrash = document.querySelector(queryValorCrash).innerText;
    const divQtdJogadores = document.querySelector(queryDivQtdJogadores).innerText;
    const divVlrApostas = document.querySelector(queryDivVlrApostas).innerText;
    const divLucro1 = document.querySelector(queryDivLucro1);
    const divLucro2 = document.querySelector(queryDivLucro2);
    const divLucro3 = document.querySelector(queryDivLucro3);
    const divLucro4 = document.querySelector(queryDivLucro4);
    const divLucro5 = document.querySelector(queryDivLucro5);
    const divLucro6 = document.querySelector(queryDivLucro6);
    const divLucro7 = document.querySelector(queryDivLucro7);
    const divLucro8 = document.querySelector(queryDivLucro8);
    const divLucro9 = document.querySelector(queryDivLucro9);
    const divLucro10 = document.querySelector(queryDivLucro10);
    const divLucro11 = document.querySelector(queryDivLucro11);
    
    const divLucros = [divLucro1, divLucro2, divLucro3, divLucro4, divLucro5, divLucro6, divLucro7, divLucro8, divLucro9, divLucro10, divLucro11];
    lucroTotal = somaLucrosRodada(divLucros);

    const crash = Number.parseFloat(valorCrash.replace(/X/g,""));
    const QtdJogadores = Number.parseFloat(divQtdJogadores);
    const vlrApostas = Number.parseFloat(divVlrApostas.replace(/R\$/g,""));

    dadosRodada = [{
        ultimoCrash: crash,
        qtdJogadores: QtdJogadores,
        vlrApostas: vlrApostas,
        lucroTotal: lucroTotal,
     }]

    return dadosRodada

}