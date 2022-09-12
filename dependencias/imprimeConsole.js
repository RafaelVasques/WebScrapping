export default function imprimeConsole (rodada, dadosRodada) {
    console.log(">>>>> Salvando dados na planilha <<<<<");
    console.log("RODADA:" + rodada);
    console.log("JOGADORES:" + dadosRodada.qtdJogadores);
    console.log("TOTAL DE APOSTAS:" + dadosRodada.vlrApostas);
    console.log("LUCRO TOTAL:" + dadosRodada.lucroTotal);
    console.log("CRASH:" + dadosRodada.ultimoCrash);
    console.log("=======================================================");
}