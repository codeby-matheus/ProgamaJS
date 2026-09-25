let altura = +prompt("Qual é a sua altura?");
let sexo = prompt("Qual é seu sexo? (F ou M)");
let pesoIdeal;
if (sexo == "M") {
  pesoIdeal = 72.7 * altura - 58;
} else {
  pesoIdeal = 62.1 * altura - 44.7;
}
alert("Seu peso ideal é:" + pesoIdeal.toFixed(3));