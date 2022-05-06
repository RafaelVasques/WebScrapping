//AGUARDA 4 SEGUNDOS PARA A PÁGINA CARREGAR TODOS OS ELEMENTOS
setTimeout(function(){

	var lucroTotal = 0;
	var rodada = 0;
	
	/// OBSERVER ///
	var target = document.querySelector('.entries');
	
	// CRIA UMA NOVA INSTANCIA DE OBSERVADOR
	var observer = new MutationObserver(function(mutations) {
	    mutations.forEach(function(mutation) {
	        
			setTimeout(function(){
			
		        //INCREMENTA RODADA
				rodada++;
				
				//COLETA AS DIVS
				var divQtdJogadores = document.querySelector("#crash > div > div.crash-bottom > div.totals > div.left > span:nth-child(1)").innerText;	//QUANTIDADE DE JOGADORES NA RODADA
				var divVlrApostas = document.querySelector("#crash > div > div.crash-bottom > div.totals > div.right > span").innerText;				//VALOR TOTAL DAS APOSTAS NA RODADA
				var divLucro1 = document.querySelector("#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(1) > td:nth-child(4) > div"); // LUCRO 1
				var divLucro2 = document.querySelector("#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(2) > td:nth-child(4) > div"); // LUCRO 2
				var divLucro3 = document.querySelector("#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(3) > td:nth-child(4) > div"); // LUCRO 3
				var divLucro4 = document.querySelector("#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(4) > td:nth-child(4) > div"); // LUCRO 4
				var divLucro5 = document.querySelector("#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(5) > td:nth-child(4) > div"); // LUCRO 5
				var divLucro6 = document.querySelector("#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(6) > td:nth-child(4) > div"); // LUCRO 6
				var divLucro7 = document.querySelector("#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(7) > td:nth-child(4) > div"); // LUCRO 7
				var divLucro8 = document.querySelector("#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(8) > td:nth-child(4) > div"); // LUCRO 8
				var divLucro9 = document.querySelector("#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(9) > td:nth-child(4) > div"); // LUCRO 9
				var divLucro10 = document.querySelector("#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(10) > td:nth-child(4) > div"); // LUCRO 10
				var divLucro11 = document.querySelector("#crash > div > div.crash-bottom > div.casino-table-wrapper > table > tbody > tr:nth-child(11) > td:nth-child(3) > div > span"); // LUCRO 11
				var valorCrash = document.querySelector("#crash-recent > div.crash-previous > div > span:nth-child(1)").innerText; // VALOR DO ÚLTIMO CRASH
		        
		        //CONVERTE QUANTIDADE DE JOGADORES NA RODADA PARA FLOAT
		        var qtdJogadores = Number.parseFloat(divQtdJogadores);

		        // REMOVE R$ E CONVERTE O VALOR TOTAL APOSTADO PARA FLOAT
				var vlrApostas = Number.parseFloat(divVlrApostas.replace(/R\$/g,""));

				// RECEBE TODAS AS DIVS DOS LUCROS
				var divLucros = [divLucro1, divLucro2, divLucro3, divLucro4, divLucro5, divLucro6, divLucro7, divLucro8, divLucro9, divLucro10, divLucro11];
				
				divLucros.forEach((divLucros) => {
					
					// VERIFICA SE A DIV DO LUCRO EXISTE
					if(divLucros !== null){
						
						var lucro = divLucros.innerText;
						if(lucro !== '-'){
						
							//REMOVE R$, TRANSFORMA EM FLOAT E SOMA
							lucro = Number.parseFloat(lucro.replace(/R\$/g,""));
							lucroTotal += lucro;
						
						};
						
					};

				});
				
				// NORMALIZA AS CASAS DECIMAIS DO LUCRO TOTAL	
				lucroTotal = Number.parseFloat(lucroTotal.toFixed(2));

				//REMOVE O "X" E TRANSFORMA EM FLOAT O VALOR DO CRASH
				var crash = Number.parseFloat(valorCrash.replace(/X/g,""));

				//SALVA OS DADOS NA PLANILHA
				function salvarPlanilha1(rodada, qtd_jogadores, vlr_apostas, vlr_lucro, crash){
					axios.post('https://sheetdb.io/api/v1/dj3hw4jhvk3py', {
						"data": {
							"rodada": rodada,
							"qtd_jogadores": qtd_jogadores,
							"vlr_apostas": vlr_apostas,
							"vlr_lucro": vlr_lucro,
							"crash": crash
						}
					},{
						"auth": {
							"username": "ngx88rsd",
							"password": "6rtkl01sjfcf265fpcqq"
						}
					});
				};


				//SALVA PLAN
				if(rodada <= 500){
					
					salvarPlanilha1(
						rodada,
						qtdJogadores,
						vlrApostas,
						lucroTotal,
						crash
					);
					
					console.log(">>>>> SALVANDO PLANILHA 1 <<<<<");
				};
				
				
                console.log("RODADA:" + rodada);
				console.log("JOGADORES:" + qtdJogadores);
				console.log("TOTAL DE APOSTAS:" + vlrApostas);
				console.log("LUCRO TOTAL:" + lucroTotal);
				console.log("CRASH:" + crash);
				console.log("=======================================================");
					
				lucroTotal = 0;
				
			}, 4000);
			
	    });
	});
	
	// CONFIGURAÇÃO DO OBSERVADOR
	var config = { attributes: false, childList: true, characterData: false };
	
	// passar o nó alvo, bem como as opções de observação
	observer.observe(target, config);

}, 4000);