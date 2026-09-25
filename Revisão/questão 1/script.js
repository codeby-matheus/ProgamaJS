let volumeinicial = parseFloat(
  prompt("Qual é o volume inicial? ( em litros )"),
);
let litroPh = parseFloat(
  prompt("Qual é a quantidade de litros adicionados por hora?"),
);
let abastecimento = parseFloat(
  prompt("Qual é o tempo de abastecimento? ( horas )"),
);
let conta = volumeinicial * litroPh * abastecimento;
alert("o volume final é:" + conta.toFixed(2));

