let horas = +prompt("qual é o numero de horas previstas");
let valorHora = +prompt("qual é valor da hora?");
let percentual = +prompt("qual é o percentual de complexidade");
let custoBase = horas * valorHora;
let acrescimo = custoBase * (percentual / 100);
let valorFinal = custoBase + acrescimo;

if (valorFinal <= 8000) {
  alert("projeto pequeno");
} else if (valorFinal <= 20000) {
  alert("Projeto Medio");
} else {
  alert("Projeto grande");
}

/* Questão 5 – Custo de Desenvolvimento de Software
Uma empresa deseja estimar o custo de um projeto.
Receba:
• número de horas previstas;
• valor da hora;
• percentual de complexidade (10, 20 ou 30%).
Calcule:
Custo base = horas × valor da hora
Acréscimo = custo base × percentual
Valor final = custo base + acréscimo
Depois classifique:
• até R$ 8.000 → Projeto Pequeno;
• acima de R$ 8.000 até R$ 20.000 → Projeto Médio;
• acima de R$ 20.000 → Projeto Grande. */
