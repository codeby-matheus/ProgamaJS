let codigo = prompt(
  "Setor Valor: A - Plateia R$ 90 B - Camarote R$ 150 C - VIP R$ 250 D - Premium R$ 400".toUpperCase(),
);
let mensagem;
let valor;
let ingresso;

switch (codigo) {
  case "A":
    ingresso = +prompt("quantos ingressos voce ira comprar?");
    valor = 90 * ingresso;
    mensagem = "o valor total da compra é de:" + valor.toFixed(2);
    break;

  case "B":
    ingresso = +prompt("quantos ingressos voce ira comprar?");
    valor = 150 * ingresso;
    mensagem = "o valor total da compra é de:" + valor.toFixed(2);
    break;

  case "C":
    ingresso = +prompt("quantos ingressos voce ira comprar?");
    valor = 250 * ingresso;
    mensagem = "o valor total da compra é de:" + valor.toFixed(2);
    break;

  case "D":
    ingresso = +prompt("quantos ingressos voce ira comprar?");
    valor = 400 * ingresso;
    mensagem = "o valor total da compra é de:" + valor.toFixed(2);
    break;

  default:
    mensagem = "insira apenas as coisas que eu pedi";
}
alert(mensagem);
/* Questão 18 – Sistema de Venda de Ingressos
Um teatro vende ingressos para diferentes setores.
Leia:
• setor;
• quantidade de ingressos.
Valores
Código Setor Valor
A Plateia R$ 90
B Camarote R$ 150
C VIP R$ 250
D Premium R$ 400
Calcule o valor total da compra */
