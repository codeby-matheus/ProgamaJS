let consumoAgua = +prompt("qual é o consumo de agua em m³?");
let cobranca;

if (consumoAgua <= 10) {
  cobranca = 30;
} else if (consumoAgua <= 25) {
  cobranca = 50;
} else if (consumoAgua >= 25) {
  cobranca = 80;
}

