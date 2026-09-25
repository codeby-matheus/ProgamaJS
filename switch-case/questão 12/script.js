let categoria = prompt(
  "Tipo Categoria do Cliente Desconto: A -  Cliente Premium  B - Cliente Ouro C - Cliente Diamante".toUpperCase(),
);
let valor = +prompt("qual é o valor da compra?");
let calculo;
let mensagem;

switch (categoria) {
  case A:
    calculo = valor * 0.95 - valor;
    mensagem = "com 5% de desconto, voce vai pagar:" + calculo.toFixed(2);
    break;

  case B:
    calculo = valor * 0.9 - valor;
    mensagem = "com 10% de desconto, voce vai pagar:" + calculo.toFixed(2);
    break;

  case C:
    calculo = valor * 0.85 - valor;
    mensagem = "com 10% de desconto voce vai pagar:" + calculo.toFixed(2);

  default:
    mensagem = "Tipo de cliente inválido.";
}
alert(mensagem);

/* Questão 12 – Sistema de Descontos
Uma loja de informática oferece descontos especiais aos seus clientes de acordo com a
categoria cadastrada no programa de fidelidade. O desconto é aplicado sobre o valor total
da compra.
Desenvolva um programa em JavaScript que solicite ao usuário o tipo de cliente e o
valor da compra. Utilize a estrutura switch para identificar a categoria do cliente,
calcular o desconto correspondente e exibir o valor final a ser pago.
Tabela de categorias:
Tipo Categoria do Cliente Desconto
A Cliente Premium 5%
B Cliente Ouro 10%
C Cliente Diamante 15%
Regras:
• Solicite ao usuário o tipo de cliente (A, B ou C).
• Solicite o valor total da compra.
• Calcule o valor do desconto.
• Em seguida, calcule o valor final:
Observação: Considere que o usuário pode digitar o tipo de cliente em letras maiúsculas
ou minúsculas.
Caso o usuário informe um tipo de cliente diferente de A, B ou C, o programa deverá
exibir a mensagem: "Tipo de cliente inválido." */
