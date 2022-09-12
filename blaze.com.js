////////////////////////////////////////////////////////////////////////////////////
//// Este projeto tem como objetivo coletar dados de cada rodada do				////
//// jogo de apostas Crash, do site https://blaze.com/pt/, para					////
//// salva-los em uma planilha google, usando Jquery, Axios e a					////
//// API https://sheetdb.io/, que faz a autenticação e envio de dados para a  	////
//// planilha. Ao termino de cada rodada o script coleta os dados como valor 	////
//// do Crash, quantidade de jogadores que apostaram naquela rodada, 			////
//// valor total de apostas e lucro total dos jogadores na rodada.				////
//// Este script deve ser injetado diretamente na página usando alguma 			////
//// extenção de navegador como, por exemplo, a "User Javascript And Css" 		////
//// (Link para download no Chrome a baixo), desde que seja possível carregar 	////
//// as bibliotecas Jquery e Axios diretamente na extenção. Caso não seja 		////
//// possível carrega-las, deverão ser importadas diretamente neste script.		////
////////////////////////////////////////////////////////////////////////////////////
//// Configurações: 															////
//// qtdDeRodadas -> Seta quantas rodadas o script fará a captura. 				////
//// target -> Seleciona o elemento do DOM para o observer escutar as mudanças.	////
//// config -> Seta as configurações do observer. 								////
//// sheetDBAuth -> Dados de autenticação fornecidos pela API SheetDB. 			////
////////////////////////////////////////////////////////////////////////////////////

//// Link para a extenção User Javascript And Css do Chrome:
//// https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld

import { coletaDadosRodada } from './dependencias/coletaDadosRodada';
import { salvaDadosPlanilha } from './dependencias/salvaDadosPlanilha';
import { imprimeConsole } from './dependencias/imprimeConsole';

const qtdDeRodadas = 500;
const target = document.querySelector('.entries');
const config = { attributes: false, childList: true, characterData: false };
const sheetDBAuth = [{
	apiLink: "https://sheetdb.io/api/v1/dj3hw4jhvk3py",
	userName: "ngx88rsd",
	password: "6rtkl01sjfcf265fpcqq"
}];

// Aguarda 4 segundos para que toda página seja carregada e o
// observer não detecte a mudança no DOM prematuramente.
setTimeout(function(){

	let rodada = 0;		
	const observer = new MutationObserver(function() {
	         
		//Aguarda 4 segundos para que todos os dados da rodada sejam renderizados no DOM.
		setTimeout(function(){

			rodada++;
			const dadosRodada = coletaDadosRodada()

			if(rodada <= qtdDeRodadas){
				
				imprimeConsole(rodada, dadosRodada);
				salvaDadosPlanilha(
					sheetDBAuth,
					rodada,
					dadosRodada
				);

			};
			
		}, 4000);
	    
	});
	
	observer.observe(target, config);

}, 4000);