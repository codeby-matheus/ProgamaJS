let numero1 = +prompt("Digite o primeiro numero");
let numero2 = +prompt("Digite o segundo numero");
let operacao = prompt(
  "Qual é a operação matematica? (Mais, Menos, Divisão ou Multiplicação",
);

let calculo;

switch (operacao) {
  case "Mais":
    calculo = numero1 + numero2;
    alert("o resultado é:" + calculo);
    break;

  case "Menos":
    calculo = numero1 - numero2;
    alert("o resultado é:" + calculo);
    break;

  case "Divisao":
    calculo = numero1 / numero2;
    alert("o resultado é:" + calculo);
    break;

  case "multiplicacao":
    calculo = numero1 * numero2;
    alert("o resultado é:" + calculo);
    break;

  default:
    calculo = "escreve certo";
    alert("o resultado é:" + calculo);
}
