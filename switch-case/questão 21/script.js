let media = +prompt(
  "Opção Tipo de Média: 1 - Média de 2 notas, 2 - Média de 3 notas, 3 - Média de 4 notas".toLowerCase(),
);
let nota1;
let nota2;
let nota3;
let nota4;

let mensagem;
let valor;

switch (media) {
  case 1:
    nota1 = +prompt("insira a sua primeira nota");
    nota2 = +prompt("insira a sua segunda nota");
    nota3 = undefined;
    nota4 = undefined;
    valor = (nota1 + nota2) / 2;
    mensagem = `voce escolheu o tipo de media 1, a nota 1 foi de: ${nota1} e a nota 2 foi de: ${nota2}, sua media foi de: ${valor}`;
    break;

  case 2:
    nota1 = +prompt("insira a sua primeira nota");
    nota2 = +prompt("insira a sua segunda nota");
    nota3 = +prompt("insira a sua terceira nota");
    nota4 = undefined;
    valor = (nota1 + nota2 + nota3) / 3;
    mensagem = `voce escolheu o tipo de media 1, a nota 1 foi de: ${nota1}, a nota 2 foi de: ${nota2}, a nota 3 foi de: ${nota3}, sua media foi de: ${valor}`;
    break;

  case 3:
    nota1 = +prompt("insira a sua primeira nota");
    nota2 = +prompt("insira a sua segunda nota");
    nota3 = +prompt("insira a sua terceira nota");
    nota4 = +prompt("insira a sua quarta nota");
    valor = (nota1 + nota2 + nota3 + nota4) / 4;
    mensagem = `voce escolheu o tipo de media 1, a nota 1 foi de: ${nota1}, a nota 2 foi de: ${nota2}, a nota 3 foi de: ${nota3} e a nota 4 foi de: ${nota4} sua media foi de: ${valor}`;
    break;

  default:
    mensagem = "informe um valor valido";
}
alert(mensagem);

/* Questão 21 – Sistema de Cálculo de Médias
Uma instituição de ensino técnico utiliza diferentes critérios para calcular a média final dos
alunos, dependendo do curso em que estão matriculados. Para automatizar esse
processo, o sistema apresenta um menu de opções para que o usuário escolha o tipo de
cálculo desejado.
Desenvolva um programa em JavaScript que solicite ao usuário o tipo de média a ser
calculada. Utilize a estrutura switch...case para identificar a opção escolhida e
realizar o cálculo correspondente.
Menu de opções
Opção Tipo de Média
1 Média de 2 notas
2 Média de 3 notas
3 Média de 4 notas
Regras
• Opção 1 – Média de 2 notas
• Solicite duas notas ao usuário.
Opção 2 – Média de 3 notas
• Solicite três notas.
• Opção 3 – Média de 4 notas
• Solicite quatro notas.
Saída
Ao final, o programa deverá exibir:
• O tipo de média escolhido;
• As notas informadas;
• A média aritmética calculada com duas casas decimais. */
