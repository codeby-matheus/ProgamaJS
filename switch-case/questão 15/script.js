let tabela = prompt(
  "tabela de regioes: S - Sul N - Norte SE - Sudeste CO - Centro-Oeste NE - Nordeste ".toUpperCase(),
);
let mensagem;
let calculo;

switch (tabela) {
  case "S":
    calculo = 20;
    mensagem =
      "voce é do Sul, o valor final da compra é de:" + calculo.toFixed(2);
    break;

  case "N":
    calculo = 45;
    mensagem =
      "Voce é do norte, o valor final da compra é de:" + calculo.toFixed(2);
    break;

  case "SE":
    calculo = 25;
    mensagem =
      "Voce é do sudeste, o valor final da compra é de:" + calculo.toFixed(2);
    break;

  case "CO":
    calculo = 35;
    mensagem =
      "Voce é do Centro-Oeste, o valor final da compra é de:" +
      calculo.toFixed(2);
    break;

  case "NE":
    calculo = 40;
    mensagem =
      "Voce é do Nordeste, o valor final da compra é de:" + calculo.toFixed(2);
    break;

  default:
    mensagem = "Região de entrega inválida.";
}

/* Questão 15 – Sistema de Cálculo de Frete
Uma empresa de comércio eletrônico calcula o valor do frete de acordo com a região de
entrega do pedido. Cada região possui um valor fixo de frete que será somado ao valor
da compra para determinar o custo total do pedido.
Desenvolva um programa em JavaScript que solicite ao usuário a sigla da região de
entrega. Utilize a estrutura switch para identificar a região correspondente e calcular o
valor do frete.
Tabela de regiões e valores do frete:
Sigla Região Valor do Frete
S Sul R$ 20,00
N Norte R$ 45,00
SE Sudeste R$ 25,00
CO Centro-Oeste R$ 35,00
NE Nordeste R$ 40,00
Regras
• Solicite ao usuário a sigla da região (S, N, SE, CO ou NE).
• Utilize a estrutura switch para identificar a região.
• Exiba:
• o nome da região;
• o valor do frete correspondente.
Observação: Considere que o usuário pode informar a sigla em letras
maiúsculas ou minúsculas.
Caso a sigla informada não corresponda a nenhuma das regiões da tabela, o programa
deverá exibir a mensagem: "Região de entrega inválida." */
