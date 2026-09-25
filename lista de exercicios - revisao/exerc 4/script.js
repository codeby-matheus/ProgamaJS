let computadores = +prompt("qual é o numero de computadores");
let consumoMedio = +prompt("qual é o consumo medio por computador (Mbps) ");
let consumoTotal = computadores * consumoMedio

if (consumoTotal <= 100) {
  alert("Plano basico")
}
else if ( consumoTotal <= 300) {
  alert("Plano empresarial")
}
else {
  alert("plano corporativo")
}

/* Questão 4 – Dimensionamento de Link de Internet
Uma empresa deseja contratar um plano de internet.
Receba:
• número de computadores;
• consumo médio por computador (Mbps).
Calcule:
Consumo total = computadores × consumo médio
Apresente a recomendação:
• até 100 Mbps → Plano Básico;
• acima de 100 até 300 Mbps → Plano Empresarial;
• acima de 300 Mbps → Plano Corporativo. */