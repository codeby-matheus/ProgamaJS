let codigo = prompt(
  "Categoria Valor por kWh: R - Residencial R$ 0,82 C - Comercial R$ 0,95 I - Industrial R$ 0,73".toLocaleUpperCase(),
);
let mensagem;
let valor;
let kWh;

switch (codigo) {
  case "R":
    kWh = +prompt("quantos kwh sao consumidos?");
    valor = kWh * 0.82;
    mensagem = "voce vai pagar:" + valor.toFixed(2);
    break;

  case "C":
    kWh = +prompt("quantos kwh sao consumidos?");
    valor = kWh * 0.95;
    mensagem = "voce vai pagar:" + valor.toFixed(2);
    break;

  case "I":
    kWh = +prompt("quantos kwh sao consumidos?");
    valor = kWh * 0.73;
    mensagem = "voce vai pagar:" + valor.toFixed(2);
    break;

  default:
    mensagem = "insira apenas o que eu pedi";
}
alert(mensagem);

/* questão 17 – Sistema de Consumo de Energia
Uma companhia elétrica cobra tarifas diferentes conforme a categoria do consumidor.
Leia:
• categoria;
• consumo em kWh.
Tabela
Código Categoria Valor por kWh
R Residencial R$ 0,82
C Comercial R$ 0,95
I Industrial R$ 0,73
Calcule o valor da conta. */
