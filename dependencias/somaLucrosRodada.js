export function somaLucrosRodada (divsLucros) {

    let lucroTotal = 0   
    divsLucros.forEach((divLucro) => {
					
        if(divLucro !== null){
            
            let lucro = divLucro.innerText;
            if(lucro !== '-'){
            
                lucro = Number.parseFloat(lucro.replace(/R\$/g,""));
                lucroTotal += lucro;
            
            };
            
        };

    });
	
	lucroTotal = Number.parseFloat(lucroTotal.toFixed(2));

    return lucroTotal

}