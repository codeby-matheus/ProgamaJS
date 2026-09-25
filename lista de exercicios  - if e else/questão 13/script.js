let pesoP = +prompt("qual é o peso do produto?");
let frete;

if (pesoP <= 5) {
  frete = 20;
} else if (pesoP <= 20) {
  frete = 50;
} else if (pesoP > 20) {
  frete = 100;
}
alert("o seu frete é:" + frete);
