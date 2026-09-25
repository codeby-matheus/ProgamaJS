let tarefas = +prompt("quantas tarefas foram concluidas garoto?")
let bugs = +prompt("quantidade de bugs encontrados");
let avaliacao = +prompt("nota da avaliação tecnica ( 0 a 10 )")
let indice = (tarefas * 2) + (nota * 10) - (bugs * 5)

if (indice <= 50) {
  alert("desempenho insastisfatorio")
}
else if (indice <= 99) {
  alert("desempenho bom")
}
else {
  alert("desempenho excelente")
}

/* Questão 3 – Avaliação de Desempenho de Programadores
Uma empresa avalia seus desenvolvedores considerando:
• quantidade de tarefas concluídas;
• quantidade de bugs encontrados;
• nota da avaliação técnica (0 a 10).
Calcule:
Índice = (tarefas × 2) + (nota × 10) − (bugs × 5) */


/* Classifique:
• índice menor que 50 → Desempenho Insatisfatório;
• entre 50 e 99 → Desempenho Bom;
• 100 ou mais → Desempenho Excelente. */