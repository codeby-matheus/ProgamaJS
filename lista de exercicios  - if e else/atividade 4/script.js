let idade = +prompt("qual é a sua idade");
let passagem = +prompt("qual é o preço da passagem");
if (idade <= 12) {
  alert("voce vai pagar: " +  passagem / 2);
} else {
  alert("voce vai pagar: " +  passagem);
}
