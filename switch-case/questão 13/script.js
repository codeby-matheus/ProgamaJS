let codigo = +prompt(
  "de onde voce é? Código Região de Procedência  1 - Norte 2 - Nordeste 3 -  Centro-Oeste 4 - Sudeste 5 - Sul",
);
switch (codigo) {
  case 1:
    alert("voce e do norte");
    break;
  case 2:
    alert("voce do nordeste");
    break;
  case 3:
    alert("voce e do Centro-Oeste");
    break;
  case 4:
    alert("voce é do Sudeste");
    break;
  case 5:
    alert("voce é do Sul");
    break;
  default:
    alert("Código de origem inválido.");
}

/* Questão 13 – Sistema de Procedência
Uma empresa de logística utiliza códigos numéricos para identificar a região de
procedência de seus produtos. Essas informações são utilizadas para organizar o
transporte e a distribuição das mercadorias.
Desenvolva um programa em JavaScript que solicite ao usuário o código de origem de
um produto. Utilize a estrutura switch para identificar a região correspondente e exibir a
informação na tela.
Tabela de códigos de origem:
Código Região de Procedência
1 Norte
2 Nordeste
3 Centro-Oeste
Código Região de Procedência
4 Sudeste
5 Sul
Regras:
• Solicite ao usuário um número inteiro entre 1 e 5.
• Utilize a estrutura switch para identificar a região correspondente ao código
informado.
• Exiba o nome da região na tela.
Caso o usuário informe um código diferente dos apresentados na tabela, o programa
deverá exibir a mensagem: "Código de origem inválido." */
