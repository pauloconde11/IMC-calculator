let peso;
let altura;
let iadulto;
let idoso;
let resultado;

const dadoImc = [];

dadoImc.push("IMC abaixo de 18,5 (Abaixo do peso): Indica que uma pessoa está abaixo do peso recomendado para sua altura. Pode ser um sinal de desnutrição ou outros problemas de saúde. É importante procurar orientação médica para avaliar a causa e tomar as medidas necessárias.");
dadoImc.push("IMC entre 18,5 e 24,9 (Peso normal): Nessa faixa, o IMC indica que o peso está dentro de um intervalo considerado saudável para a altura. É geralmente associado a um menor risco de desenvolver doenças crônicas, como diabetes, hipertensão arterial e doenças cardíacas.");
dadoImc.push("IMC entre 25 e 29,9 (Sobrepeso): O IMC nessa faixa indica que a pessoa está acima do peso recomendado para sua altura. O sobrepeso pode aumentar o risco de desenvolver várias condições de saúde, incluindo diabetes tipo 2, doenças cardíacas e certos tipos de câncer. ");
dadoImc.push("IMC entre 30 e 34,9 (Obesidade grau 1): Nessa faixa, o IMC indica obesidade de grau 1, considerada de baixo a moderado risco para a saúde. A obesidade está associada a um maior risco de doenças como diabetes, doenças cardíacas, apneia do sono e certos tipos de câncer. É recomendável buscar orientação médica e adotar mudanças no estilo de vida para reduzir o risco de complicações.");
dadoImc.push("IMC entre 35 e 39,9 (Obesidade grau 2): Nessa faixa, o IMC indica obesidade de grau 2, considerada de alto risco para a saúde. O risco de doenças crônicas aumenta significativamente nessa faixa, e é importante buscar orientação médica para iniciar um programa de perda de peso supervisionado.");
dadoImc.push("IMC acima de 40 (Obesidade grau 3 ou mórbida): O IMC acima de 40 indica obesidade de grau 3, também conhecida como obesidade mórbida. Essa condição está associada a um risco extremamente elevado de complicações graves para a saúde, incluindo doenças cardiovasculares, diabetes tipo 2, apneia do sono e problemas articulares. A intervenção médica é essencial para lidar com a obesidade mórbida, e opções como cirurgia bariátrica podem ser consideradas.");

console.log(dadoImc);

function calculadoraIMC() {
 peso = document.getElementById('ipeso').value.trim();
 altura = document.getElementById('ialtura').value.trim();
 iadulto = document.getElementById('iadulto').value.trim();
 idoso = document.getElementById('idoso').value.trim();

 resultado = peso / altura**2;

 console.log(resultado)

 if (resultado < 18.5) {
    document.getElementById('iresultado').innerHTML = dadoImc[0];
 } else {
    if (resultado >= 18.5 && resultado <=24.9) {
        document.getElementById('iresultado').innerHTML = dadoImc[1];
        document.getElementById('iseuResultado').innerHTML = "IMC " + parseInt(resultado);
    } else {
        if (resultado >= 25.0 && resultado <=29.9) {
            document.getElementById('iresultado').innerHTML = dadoImc[2];
            document.getElementById('iseuResultado').innerHTML = "IMC " + parseInt(resultado);
        } else {
           if (resultado >= 30.0 && resultado <=34.9) {
            document.getElementById('iresultado').innerHTML = dadoImc[3];
            document.getElementById('iseuResultado').innerHTML = "IMC " + parseInt(resultado);
           } else {
            if (resultado >= 35.0 && resultado <=39.9) {
                document.getElementById('iresultado').innerHTML = dadoImc[4];
                document.getElementById('iseuResultado').innerHTML = "IMC " + parseInt(resultado);
            } else {
             if (resultado >= 40.0) {
                document.getElementById('iresultado').innerHTML = dadoImc[5];
                document.getElementById('iseuResultado').innerHTML = "IMC " + parseInt(resultado);
             }else{
                
             }   
                
            } 
           } 
        }
    }
 }

 



}

function leitorMedida(a) {
    peso = document.getElementById(a).value.trim();
    pesoLength = peso.length;
    if (/^[a-zA-Z ]+/.test(peso)) {
        console.log("tem letra");
        document.getElementById(a).style.borderBottom = "2px solid red";
    }else{
        if (peso.length == 3) {
        peso = peso + ".";
        document.getElementById(a).value = peso;
     }
    }
    
}

function leitorMedida2(b) {
    altura = document.getElementById(b).value.trim();
    alturaLength = altura.length;
    if (/^[a-zA-Z ]+/.test(altura)) {
        console.log("tem letra");
        document.getElementById(b).style.borderBottom = "2px solid red";
    }else{
        if (altura.length == 1) {
        altura = altura + ".";
        document.getElementById(b).value = altura;
     }
    }
    
}




