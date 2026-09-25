let nota1 = +prompt("qual é a sua nota?");
let nota2 = +prompt("qual é a sua segunda nota?");
let mediaAluno = (nota1 + nota2) / 2;
let resultado;

if (mediaAluno >= 7) {
  resultado = "aprovado";
} else if (mediaAluno >= 5 && mediaAluno <= 6.9) {
  resultado = "recuperação";
} else if (mediaAluno < 5) {
  resultado = "reprovado";
}
alert("voce esta: " + resultado);
