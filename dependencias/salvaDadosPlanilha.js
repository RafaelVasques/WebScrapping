export function salvaDadosPlanilha(sheetDBAuth, rodada, dadosRodada){
    axios.post( SheetDBAuth.apiLink , {
        "data": {
            "rodada": rodada,
            "qtd_jogadores": dadosRodada.qtd_jogadores,
            "vlr_apostas": dadosRodada.vlr_apostas,
            "vlr_lucro": dadosRodada.vlr_lucro,
            "crash": dadosRodada.crash
        }
    },{
        "auth": {
            "username": sheetDBAuth.userName,
            "password": sheetDBAuth.password
        }
    });
};