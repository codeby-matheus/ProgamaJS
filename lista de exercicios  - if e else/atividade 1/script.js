let numero = +prompt("digite um numero");
let SegNumero = +prompt("digite o segundo numero");
let operacao = prompt("Digite a operação (+, -, *, /");
let calculo;

if (operacao == "+") {
  calculo = numero + SegNumero;
}
else if (operacao == "-") {
  calculo = numero - Segnumero;
}
else if (operacao == "*") {
  calculo = numero * Segnumero;
}
else if (operacao == "/") {
  calculo = numero / Segnumero;
}

alert("O resultado é:" + calculo.toFixed(2));
