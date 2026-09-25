let vendas = parseInt(prompt("quantidade de vendas"))

let contador = 1
let total = 0

do {

  let venda = parseFloat(prompt("valor das vendas " + contador + ":"));

 total += venda
 contador++;
} 

while
(contador <= vendas)
let media = total / vendas

alert("Total arrecadado = R$" + total.toFixed(2))
alert("valor medio = R$" + media.toFixed(2))

/* Questão 4 – Controle de Vendas (Nível Intermediário)
Uma loja deseja calcular o faturamento diário.
Desenvolva um programa em JavaScript que leia a quantidade de
vendas realizadas durante o dia.
Utilizando a estrutura do...while, solicite o valor de cada venda.
Ao final, apresente:
valor total arrecadado;
valor médio das vendas. */