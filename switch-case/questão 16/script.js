let codigo = prompt(
  "Plano Mensalidade: B - Básico R$ 39,90 P - Profissional R$ 69,90 E - Empresarial R$ 119,90",
);
let mes;
let total;
let mensagem;

switch (codigo) {
  case "B":
    mes = +prompt("quantos meses voce vai pagar da mensalidade?");
    total = mes * 39.9;
    mensagem = `voce escolheu o plano basico, a mensalidade é 39,90, voce escolheu: o plano de:" + ${mes} e o preço total é de:" + ${total} `;
    break;
}
switch (codigo) {
  case "P":
    mes = +prompt("quantos meses voce vai pagar da mensalidade?");
    total = mes * 69.9;
    mensagem = `voce escolheu o plano profissional, a mensalidade é 69,90, voce escolheu: o plano de:" + ${mes} e o preço total é de:" + ${total} `;
    break;
}
switch (codigo) {
  case "E":
    mes = +prompt("quantos meses voce vai pagar da mensalidade?");
    total = mes * 119.9;
    mensagem = `voce escolheu o plano empresarial, a mensalidade é 119,90, voce escolheu: o plano de:" + ${mes} e o preço total é de:" + ${total} `;
    break;

  default:
    mensagem = "escreva apenas: B, P ou E";
    alert(mensagem);
}

/* Questão 16 – Sistema de Planos de Hospedagem Web
Uma empresa de hospedagem de sites oferece três planos para seus clientes. Cada
plano possui uma mensalidade diferente.
Desenvolva um programa em JavaScript que leia:
• o código do plano;
• a quantidade de meses contratados.
Utilize exclusivamente a estrutura switch para identificar o plano e calcular o valor total
da contratação.
Tabela de Planos
Código Plano Mensalidade
B Básico R$ 39,90
P Profissional R$ 69,90
E Empresarial R$ 119,90
Saída
Exibir:
• Nome do plano;
• Valor da mensalidade;
• Quantidade de meses;
• Valor total da contratação. */
