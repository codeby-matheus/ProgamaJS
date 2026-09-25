let entregas = parseFloat(prompt("Qual é o numero de entregas realizadas?"));
let tempo = parseFloat(prompt("Quantos minutos leva para a entrega chegar?"));
let gasolina = parseFloat(
  prompt("Qual o consumo medio por entrega? ( litros )"),
);
let preco = parseFloat(prompt("Qual é o preço do combustivel?"));
let calculo = entregas * tempo;
let calculo67 = (entregas * tempo) / 60;
let calculo2 = gasolina * preco;
let calculo3 = entregas * (gasolina * preco);
alert("Demora cerca de:" + calculo67.toFixed(2));
alert("O preço por entrega é:" + calculo2.toFixed(2));
alert("o custo total é:" + calculo3.toFixed(2));
