let peso;
let multa;
let excesso;

do {
  peso = parseFloat(prompt("informe o peso dos peixes pescados:"));
if (peso <= 0 || peso >= 150) {
alert("valor invalido")
}
}
while(peso <= 0 || peso >= 150);

if (peso = 50) {
  excesso = peso - 50;
  multa = 8 * excesso
}

else {
  excesso = 0
  multa = 0
}

if (excesso == 0) {
  alert("não a muta")
}
  else {
  alert("valor da multa é de:" + multa.toFixed(2))
}