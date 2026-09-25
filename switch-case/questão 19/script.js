let codigo = prompt(
  "Código Moeda Cotação: D - Dólar 5,60 E - Euro 6,45 L - Libra 7,55 P - Peso Argentino 0,005".toLowerCase(),
);
let valor;
let mensagem;
let reais;

switch (codigo) {
  case "D":
    reais = +prompt("qual é o valor em reais?");
    valor = reais / 5.6;
    mensagem = "voce escolheu o dolar, a conversão é de:" + valor.toFixed(2);
    break;

  case "E":
    reais = +prompt("qual é o valor em reais?");
    valor = reais / 6.45;
    mensagem = "voce escolheu o Euro, a conversão é de:" + valor.toFixed(2);
    break;

  case "L":
    reais = +prompt("qual é o valor em reais?");
    valor = reais / 7.55;
    mensagem = "voce escolheu a libra, a conversão é de:" + valor.toFixed(2);
    break;

  case "P":
    reais = +prompt("qual é o valor em reais?");
    valor = reais / 0.005;
    mensagem =
      "voce infelizmente escolheu o peso argentino, a conversão é de:" +
      valor.toFixed(2);
    break;

  default:
    mensagem = "escreve certo";
}
alert(mensagem);

/* Questão 19 – Sistema de Conversão Monetária
Uma casa de câmbio realiza conversões para diferentes moedas.
Leia:
• valor em reais;
• moeda desejada.
Cotações
Código Moeda Cotação
D Dólar 5,60
E Euro 6,45
L Libra 7,55
P Peso Argentino 0,005
Calcule quanto o cliente receberá na moeda escolhida.
*/
