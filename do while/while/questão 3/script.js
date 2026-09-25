let media = +parseInt(prompt("tem quantos alunos?"))

let contador = 1;
let somaNotas = 0;

// 2. Loop do...while para ler as notas de cada aluno
do {
  let nota = parseFloat(prompt("Digite a nota do aluno " + contador + ":"));
  
  somaNotas += nota; // Acumula a nota lida
  contador++;        // Avança para o próximo aluno
} while (contador <= quantidadeAlunos);

// 3. Calcula a média final
let media = somaNotas / quantidadeAlunos;

// 4. Exibe os resultados
alert("Soma total das notas: " + somaNotas + "\nMédia da turma: " + media.toFixed(2));


/* Questão 3 – Média da Turma
Uma escola deseja calcular a média da turma. Desenvolva um programa que
leia a quantidade de alunos e, utilizando a estrutura do...while, solicite a
nota de cada aluno.
Ao final, exiba: som */