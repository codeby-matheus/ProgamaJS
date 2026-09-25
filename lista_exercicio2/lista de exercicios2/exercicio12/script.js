let gastohoras = parseFloat(
  prompt("Quanto tempo foi gasto na viagem? (em horas)"),
);
let velocidademedia = parseFloat(
  prompt("Quanto foi a velocidade média durante a viagem? (em KM/H)"),
);
let gasolina = parseFloat(prompt("Consumo médio da gasolina (em KM/L)"));
let preço = parseFloat(prompt("Preço por litro de gasolina"));

let distancia = velocidademedia * gastohoras; // Calculando a distância percorrida
let combustivelGasto = distancia / gasolina; // Calculando o consumo de combustível
let resultado = combustivelGasto * preço; // Cálculo do custo total do combustível

alert("Distância percorrida: " + distancia.toFixed(2) + " km");
alert("Combustível gasto: " + combustivelGasto.toFixed(2) + " litros");
alert("Custo total com combustível: R$ " + resultado.toFixed(2));
