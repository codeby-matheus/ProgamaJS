let tanque = prompt("Qual é o tipo de combustivel que voce ira usar? ( Gasolina ou Etanol )");
let capacidade = +prompt("Qual é a capacidade do tanque? ( em litros )");
let gasolina = 5.65
let etanol = 4.38
let conta1

if (tanque === "G") {
  conta1 = gasolina * capacidade;
alert("O total de gasolina é:" + conta1.toFixed(2));
}

else if (tanque === "E") {
  conta1 = etanol * capacidade
  alert("o total de etanol é:" + conta1.toFixed(2));
} else {
  alert("ta errado")
}