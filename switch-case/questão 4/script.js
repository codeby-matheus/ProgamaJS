let comida = +prompt("qual é o numero da comida");

switch (comida) {
  case 1:
    alert("Voce quer agua então");
    break;
  case 2:
    alert("voce quer refrigerante");
    break;
  case 3:
    alert("voce quer suco");
    break;
  default:
    alert("codigo de bebida invalido");
}

/* Questão 4 – Menu de Bebidas
Uma lanchonete possui um sistema simples para registrar o pedido de bebidas. Cada bebida é
identificada por um código numérico.
Desenvolva um programa em JavaScript que solicite ao usuário o código da bebida e, utilizando a
estrutura switch, apresente o nome da bebida correspondente.
Leia um código:
1 → Água
2 → Refrigerante
3 → Suco
Caso o usuário informe um código diferente dos apresentados na tabela, o programa deverá exibir a
mensagem:
"Código de bebida inválido." */
