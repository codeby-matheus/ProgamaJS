let Caixa = +prompt("Qual a quantidade de dinheiro existente no caixa da empresa?");
let Produtos = +prompt("Qual é a quantiade de Produtos a ser comprada?")
let PrecoProduto = +prompt("qual é o preço do produto?")
let PrecoTotal = Produtos * PrecoProduto
let conta1
let conta2

let Pagamento
let ValorFinal

if (conta1 == PrecoTotal / 0.8) {
  ValorFinal = conta2 = (PrecoTotal * 1.10) / 3;
  Pagamento = "Credito"
} else {
 ValorFinal = PrecoTotal * 0.95
Pagamento = "A vista"
} 
   alert("Voce pagou:" + Pagamento);
alert("Voce precisa pagar:" + ValorFinal.toFixed(2));

