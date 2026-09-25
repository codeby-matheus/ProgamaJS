let horasUtil = +prompt("quantas horas voce utilizou?");
let valorHora = +prompt("qual é o valor por hora?");
let valorBruto = horasUtil * valorHora;
let percentual;

if (horasUtil <= 100) {
  percentual = 0;
} else if (horasUtil <= 250) {
  percentual = valorBruto * 0.08;
} else {
  percentual = valorBruto * 0.15;
}
alert("o valor bruto é:" + valorBruto.toFixed(2));
alert("o valor do desconto é:" + percentual.toFixed(2));
alert("o valor final vai ser de:" + percentual - valorBruto);

/* Questão 2 – Servidor de Hospedagem
Um servidor cobra hospedagem conforme o consumo mensal de processamento.
Receba:
• horas utilizadas;
• valor por hora.
Calcule o valor bruto.
Aplicar desconto:
• até 100 horas: sem desconto;
• acima de 100 até 250 horas: desconto de 8%;
• acima de 250 horas: desconto de 15%.
Mostrar:
• valor bruto;
• desconto;
• valor final */
