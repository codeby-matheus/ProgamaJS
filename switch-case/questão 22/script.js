let media = +prompt(
  "Opção Tipo de Média Ponderada: 1 - Média de 2 notas (pesos 2 e 3) 2 - Média de 3 notas (pesos 2, 3 e 5) 3 - Média de 4 notas (pesos 1, 2, 3 e 4)",
);
let nota1;
let nota2;
let nota3;
let nota4;
let valor1;
let valor2;
let total;
let mensagem;

switch (media) {
  case 1:
    nota1 = +prompt("digite a nota 1");
    nota2 = +prompt("digite a nota 2");
    nota3 = undefined;
    nota4 = undefined;
    total = (nota1 * 2 + nota2 * 3) / 5;
    mensagem = `voce escolheu a media de duas notas, sua nota 1 foi de: ${nota1} e sua nota 2 foi de: ${nota2}, sua media foi de: ${total}`;
    break;

  case 2:
    nota1 = +prompt("digite a nota 1");
    nota2 = +prompt("digite a nota 2");
    nota3 = +prompt("digite a nota 3");
    nota4 = undefined;
    total = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
    mensagem = `voce escolheu a media de duas notas, sua nota 1 foi de: ${nota1} e sua nota 2 foi de: ${nota2} e sua nota 3 foi de: ${nota3}, sua media foi de: ${total}`;
    break;

  case 3:
    nota1 = +prompt("digite a nota 1");
    nota2 = +prompt("digite a nota 2");
    nota3 = +prompt("digite a nota 3");
    nota4 = +prompt("digite a nota 4");
    total = (nota1 * 1 + nota2 * 2 + nota3 * 3 + nota4 * 4) / 10;
    mensagem = `voce escolheu a media de duas notas, sua nota 1 foi de: ${nota1} e sua nota 2 foi de: ${nota2}, a sua nota 3 foi de: ${nota3} e a sua nota 4 foi de: ${nota4}, sua media foi de: ${total}`;
    break;

    default:
      mensagem = "apenas digite 1,2 ou 3. é muito dificil?"
}
alert(mensagem);

/* Questão 22 – Sistema de Cálculo de Média Ponderada
Uma instituição de ensino utiliza diferentes critérios para calcular a média ponderada dos alunos,
conforme o componente curricular cursado. Cada disciplina possui pesos diferentes para as
avaliações, e o sistema deve calcular a média de acordo com a opção escolhida pelo usuário.
Desenvolva um programa em JavaScript que solicite ao usuário o tipo de cálculo da média
ponderada. Utilize a estrutura switch...case para identificar a opção escolhida e realizar o
cálculo correspondente.
Menu de opções
Opção Tipo de Média Ponderada
1 Média de 2 notas (pesos 2 e 3)
2 Média de 3 notas (pesos 2, 3 e 5)
3 Média de 4 notas (pesos 1, 2, 3 e 4)
Regras
Opção 1 – Média de 2 notas
• Solicite duas notas ao usuário.
• Considere os seguintes pesos:
• Nota 1 → peso 2
• Nota 2 → peso 3
Opção 2 – Média de 3 notas
• Solicite três notas.
• Considere os seguintes pesos:
• Nota 1 → peso 2
• Nota 2 → peso 3
• Nota 3 → peso 5
Opção 3 – Média de 4 notas
• Solicite quatro notas.
• Considere os seguintes pesos:
• Nota 1 → peso 1
• Nota 2 → peso 2
• Nota 3 → peso 3
• Nota 4 → peso 4
Saída
Ao final, o programa deverá exibir:
• O tipo de média ponderada escolhido;
• As notas informadas;
• Os pesos utilizados;
• A média ponderada calculada com duas casas decimais. */
