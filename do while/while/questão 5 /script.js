let alunos = parseInt(prompt("digite a quantidade de alunos"));

let contador = 1
let soma = 0 

do {

  let altura = parseFloat(prompt("altura do aluno:" + contador + ":"))

  soma += altura

  contador++
}
while (contador <= alunos);

let media = soma / alunos

alert("soma das alturas:" + soma.toFixed(2) + "m")
alert("altura media da turma: " + media.toFixed(2) + "m")




/* Questão 5 – Pesquisa de Altura
Uma academia deseja calcular a altura média dos novos alunos
matriculados.
Desenvolva um programa em JavaScript que leia a quantidade de
alunos.
Utilizando a estrutura do...while, solicite a altura de cada aluno (em
metros).
Ao final, apresente:
● soma das alturas;
● altura média da turma. */