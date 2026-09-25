let opcao = +prompt(
  "1 - Consultar Saldo 2 - Realizar Saque 3 - Realizar Depósito",
);

let saldo = 1000;
let mensagem;
let saque;
let calculo;
let deposito;

switch (opcao) {
  case 1:
    mensagem = "seu saldo atual é de:" + saldo;
    break;
  case 2:
    saque = +prompt("o quanto voce quer sacar do seu dinheiro?");
    if (saque <= saldo) {
      calculo = saque - saldo;
      mensagem = "o seu saldo é de:" + calculo;
    } else {
      mensagem = "Saldo insuficiente para realizar o saque.";
    }
    break;
  case 3:
    deposito = +prompt("solicite o valor do deposito");
    calculo = deposito + saldo;
    mensagem = "o seu novo saldo é de:" + calculo.toFixed(2);
    break;

  default:
    mensagem = "Opção inválida.";
}
alert(mensagem);

/* Questão 14 – Simulador de Caixa Eletrônico
Um banco disponibiliza um caixa eletrônico que permite aos clientes realizar operações
bancárias básicas por meio de um menu de opções.
Desenvolva um programa em JavaScript que solicite ao usuário a opção da operação
desejada. Utilize a estrutura switch para identificar a operação escolhida e executar a
ação correspondente.
Considere que o saldo inicial da conta é de R$ 1.000,00.
Menu de opções:
Opção Operação
1 Consultar Saldo
2 Realizar Saque
3 Realizar Depósito
Regras
• Opção 1 – Saldo:
• Exiba o saldo atual da conta.
• Opção 2 – Saque:
• Solicite o valor do saque.
• Se houver saldo suficiente, realize a operação e exiba o novo saldo.
• Caso o valor solicitado seja maior que o saldo disponível, exiba a
mensagem: "Saldo insuficiente para realizar o saque."
• Opção 3 – Depósito:
• Solicite o valor do depósito.
• Some esse valor ao saldo da conta e exiba o novo saldo.
Caso o usuário informe uma opção diferente de 1, 2 ou 3, o programa deverá exibir a
mensagem: "Opção inválida." */
