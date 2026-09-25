let saldo = +prompt("qual é seu saldo");
let calculo;

if (saldo > 500) {
  calculo = saldo - saldo / 1.3;
  alert("credito em 30%, voce recebera:" + calculo.toFixed(2));
} else if (saldo >= 1000) {
  calculo = saldo - saldo / 1.5;
  alert("credito em 50%, voce recebera:" + calculo.toFixed(2));
} else {
  alert("voce nao recebera credito");
}