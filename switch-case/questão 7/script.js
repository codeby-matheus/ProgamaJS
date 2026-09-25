let forma = prompt(
  "qual é a forma geometrica que voce escolheu? (1 - quadrado, 2 - retangulo ou 3 - circulo)",
);
let calculo;
let mensagem;

switch (forma) {
  case 1:
    let lado = +prompt("digite o valor do lado");
    calculo = lado * lado;
    mensagem = "a area é de:" + calculo;
    break;

  case 2:
    let base = +prompt("qual é o valor da base");
    let altura = +prompt("qual é o valor da altura");
    calculo = altura * base;
    mensagem = "a area é:" + calculo;
    break;

  case 3:
    let raio = +prompt("qual é o valor do raio");
    calculo = 3.14 * raio ** 2;
    mensagem = "a area é:" + calculo;
    break;

  default:
    alert("insira apenas 1, 2 ou 3");
}
alert(mensagem);

/* Questão 7 – Calculadora de Área
Um software de engenharia possui uma ferramenta para calcular a área de diferentes figuras
geométricas. O usuário deve escolher qual figura deseja calcular por meio de um menu de opções.
Desenvolva um programa em JavaScript que solicite ao usuário a opção da figura geométrica e
utilize a estrutura switch para realizar o cálculo da área correspondente.
De acordo com a opção escolhida:

• Quadrado: solicite o valor do lado e calcule a área utilizando a fórmula:
Area=lado×lado
• Retângulo: solicite a base e a altura e calcule a área utilizando a fórmula:
Area=base×altura
• Círculo: solicite o valor do raio e calcule a área utilizando a fórmula:
Area=π×raio2
Utilize 3,14 para o valor de π.

Caso o usuário informe uma opção diferente de 1, 2 ou 3, o programa deverá exibir a mensagem:
"Opção inválida."
Menu de opções:
Opção Figura
1 Quadrado
2 Retângulo
3 Círculo */
