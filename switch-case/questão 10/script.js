let conversao = +prompt(
  "qual é a sua forma de conversão? 1 - Quilômetros → Metros 2 - Metros → Quilômetros",
);

let distancia;
let calculo;
let mensagem;

switch (conversao) {
  case 1:
    distancia = +prompt("Digite a distancia em quilometros");
    calculo = distancia * 1000;
    mensagem = "o resultado em metros é: " +  calculo;
    break;

  case 2:
    distancia = +prompt("Digite a distancia em metros");
    calculo = distancia / 1000;
    mensagem = "o resultado em metros é: " +  calculo;
    break;

  default:
    mensagem = "Opção de conversão inválida.";
}
alert(mensagem);

/* Questão 10 – Conversão de Unidades
Um sistema de navegação e logística precisa realizar conversões de unidades de
distância para apresentar informações em diferentes formatos. O usuário deve escolher
qual tipo de conversão deseja executar por meio de um menu de opções.
Desenvolva um programa em JavaScript que solicite ao usuário a opção de conversão.
Utilize a estrutura switch para identificar a operação escolhida e realizar o cálculo
correspondente.
Opção Conversão
1 Quilômetros (km) → Metros (m)
2 Metros (m) → Quilômetros (km)
De acordo com a opção escolhida:
• Opção 1: solicite ao usuário a distância em quilômetros e converta o valor para
metros.
• Opção 2: solicite ao usuário a distância em metros e converta o valor para
quilômetros.
Considere as seguintes relações:
• 1 km = 1.000 m
• 1 m = 0,001 km
Caso o usuário informe uma opção diferente de 1 ou 2, o programa deverá exibir a
mensagem: "Opção de conversão inválida." */
