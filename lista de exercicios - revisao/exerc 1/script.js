let armazem = +prompt("quanto de armazenamento é a sua nuvem?");
let espaco = +prompt("quanto de espaço esta sendo utilizado?");
let percentual = armazem / espaco * 100
let mensagem

if (percentual <= 50) {
  alert("uso normal");
} else if (percentual <= 80) {
  alert("atenção: armazenamento se aproximando do limite");
}
else {
  alert("Espaço critico. Considere ampliar o plano");
}