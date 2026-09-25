let faixa;
let agua;
let valor;
let servidor;
let somadora = 0;
let contadora = 0;
let continuar;
let contadora3 = 0;

do {
  do {
    servidor = prompt("qual o nome do servidor?");
    agua = +prompt("qual é a quantidade de agua que voce consumiu? (em m³)");
    if (agua > 200 || isNaN(agua) || agua < 0) {
      alert("Consumo inválido!");
    }
  } while (agua > 200 || isNaN(agua) || agua < 0);

  // questao 2 //

  if (agua <= 20) {
    faixa = 5 * agua;
  } else if (agua >= 21 && agua <= 50) {
    faixa = (agua - 20) * 9 + 20 * 5;
  } else {
    faixa = (agua - 50) * 15 + 370 + 29 * 9 + 20 * 5;
    contadora3++;
  }
  somadora += faixa;
  ++contadora;
  do {
    continuar = prompt("deseja continuar? s ou n");
    if (continuar !== "s" && continuar !== "n") {
      alert("tem coisa errada ai bro");
    }
  } while (continuar !== "s" && continuar !== "n");
} while (continuar == "s");

alert("O consumo individual do ultimo servidor foi de:" + faixa.toFixed(2));
alert("A media é de:" + somadora / contadora);
alert(
  "O percentual de servidores que se enquadraram na Faixa 3 é de:" +
    (contadora3 / somadora) * 100,
);
