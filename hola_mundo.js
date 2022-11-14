
let salarioMinimo = [
        {ano: 2010, salario: 510.00},
        {ano: 2011, salario: 545.00}, 
        {ano: 2012, salario: 622.00},
        {ano: 2013, salario: 678.00},
        {ano: 2014, salario: 724.00},
        {ano: 2015, salario: 788.00}, 
        {ano: 2016, salario: 880.00},
        {ano: 2017, salario: 937.00}, 
        {ano: 2018, salario: 954.00}, 
        {ano: 2019, salario: 998.00},
        {ano: 2020, salario: 1045.00},
];

let inflacao = [
        {ano: 2010, ipca: 5.91},
        {ano: 2011, ipca: 6.50},
        {ano: 2012, ipca: 5.84},
        {ano: 2013, ipca: 5.91},
        {ano: 2014, ipca: 6.41},
        {ano: 2015, ipca: 10.67},
        {ano: 2016, ipca: 6.29},
        {ano: 2017, ipca: 2.95},
        {ano: 2018, ipca: 3.75},
        {ano: 2019, ipca: 4.31},
        {ano: 2020, ipca: 4.52},
];

import entradaDados from 'readline-sync';


console.log("Escolha uma opção:");
console.log("1 - Listar os salarios minimos de 2010 a 2020");
console.log("2 - Listar o índice IPCA de 2010 a 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");

let escolha = entradaDados.question("Digite o valor correspondente: ");


if(Number(escolha) == 1){
        for(let i= 0; i < salarioMinimo.length; i++){
                let array_salario = salarioMinimo[i];
                let formatado_ano = array_salario.ano;
                let formatado_salario = array_salario.salario;
                console.log("Ano: "+ formatado_ano); 
                console.log("Salario Minimo: "+"$:"+formatado_salario+"\n"); 
        }

}else if(Number(escolha)== 2){
        for( let i = 0 ; i < inflacao.length; i++){
                let ano = inflacao[i].ano;
                let ipca = inflacao[i].ipca;
                console.log("Ano:".padEnd(30," . ")+ano);
                console.log("Inflação IPCA:".padEnd(30," . ")+ipca+"%"+"\n");
        }
}else if(Number(escolha)== 3){
        
        for( let i = 0; i < salarioMinimo.length; i++){
        let formatado_ano = salarioMinimo[i].ano;
        let formatado_salario = salarioMinimo[i].salario;
        //calculo me ajude na parte do calculo
        
        let diferenca = salarioMinimo.salario - salarioMinimo[i].salario; // salario atual - menos o anterior
        let Crescimento = (diferenca / salarioMinimo[i].salario) * 100; // diferenca divido pelo salario anterior vezes 100
        // poderiamos fazer com o switch case , ficaria mais facil para gostaria de saber desse modo tb.
        // fim do calculo
        

        let formatado_inflacao = inflacao[i].ipca;
        console.log("Ano: "+formatado_ano);
        console.log("Salario Anual: "+formatado_salario);
        console.log("Crescimento salarial: "+Crescimento);
        console.log("Inflacao do Periodo: "+formatado_inflacao+"\n");
        }
      
}else{
        console.log("INVALIDA");
}
