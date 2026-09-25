let tabela = prompt(
  "Qual é a sua categoria? R - Residencial C - Comercial  I - Industrial".toUpperCase(),
);

let kwh;
let calculo;
let mensagem;

switch (tabela) {
  case "R":
    kwh = +prompt("insira a quantidade de kwh usados");
    calculo = kwh * 0.75;
    mensagem = "voce vai ter que pagar:" + calculo.toFixed(2);
    break;

  case "C":
    kwh = +prompt("insira a quantidade de kwh usados");
    calculo = kwh * 0.92;
    mensagem = "voce vai ter que pagar:" + calculo.toFixed(2);
    break;

  case "I":
    kwh = +prompt("insira a quantidade de kwh usados");
    calculo = kwh * 0.68;
    mensagem = "voce vai ter que pagar:" + calculo.toFixed(2);
    break;

  default:
    mensagem = "insira apenas os (R, C ou I)";
}
alert(mensagem);

/* Questão 11 – Sistema de Tarifas de Energia Elétrica
Uma concessionária de energia elétrica utiliza diferentes tarifas de cobrança de acordo
com a categoria do consumidor. Para calcular o valor da conta de energia, o sistema deve
identificar a categoria informada e aplicar a tarifa correspondente ao consumo em
quilowatt-hora (kWh).
Desenvolva um programa em JavaScript que solicite ao usuário a categoria da unidade
consumidora e a quantidade de energia consumida (em kWh). Utilize a estrutura
switch para identificar a categoria e calcular o valor total da conta de energia.
Tabela de categorias e tarifas:
Categoria Descrição Tarifa por kWh
R Residencial R$ 0,75
C Comercial R$ 0,92
I Industrial R$ 0,68
Regras:
• Solicite ao usuário a categoria (R, C ou I).
• Solicite a quantidade de energia consumida em kWh.
• Calcule o valor da conta utilizando a fórmula:
Observação: Considere que o usuário pode digitar a categoria em letras maiúsculas ou
minúsculas. */
