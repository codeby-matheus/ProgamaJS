let a;
let b;
let c;
let escolha;
let maior;
let menor;
let meio;

do {
  a = parseInt(prompt("valor do a"));
  b = parseInt(prompt("valor do b"));
  c = parseInt(prompt("valor do c"));

  if (isNaN(a) || isNaN(b) || isNaN(c) || a < 0 || b < 0 || c < 0) {
    alert("A, B, C: devem ser positivos.");
  }
} while (isNaN(a) || isNaN(b) || isNaN(c) || a < 0 || b < 0 || c < 0);

do {
  escolha = prompt("quer decrescente ou crescente? ( C ou D )");
  if (escolha !== "C" && escolha !== "D") {
    alert("escolha deve ser a letra C ou D ");
  }
} while (escolha !== "C" && escolha !== "D");

let maior = a > b && a > c ? a : b > c ? b : c;

let menor = a < b && a < c ? a : b < c ? b : c;

let meio = a + b + c - maior - menor;

if ((escolha = D)) {
  alert(`${maior} ${meio} ${menor}`);
} else if ((escolha = C)) {
  alert(`${menor} ${meio} ${maior}`);
}
