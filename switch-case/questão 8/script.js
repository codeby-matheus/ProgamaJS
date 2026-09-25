let codigo = +prompt(
  "Qual é seu curso? 1 - Informatica 2 - Administraçao 3 - Redes de computadores",
);
switch (codigo) {
  case 1:
    alert("seu curso é de informatica");
    break;
  case 2:
    alert("seu curso de administração");
    break;
  case 3:
    alert("seu curso é de redes de computadores");
    break;
  default:
    alert("codigo de curso invalido");
}

/* Questão 8 – Menu de Cursos
Uma instituição de ensino técnico oferece diversos cursos profissionalizantes. Para
facilitar o atendimento aos candidatos, o sistema de matrícula utiliza um menu de opções,
no qual cada curso é representado por um código numérico.
Desenvolva um programa em JavaScript que solicite ao usuário o código do curso
desejado. Utilize a estrutura switch para identificar a opção escolhida e exibir o nome do
curso correspondente.
Código Curso
1 Informática
2 Administração
3 Redes de Computadores
Caso o usuário informe um código diferente dos apresentados na tabela, o programa
deverá exibir a mensagem: "Código de curso inválido." */
