let temperatura = +prompt("Qual é a temperatura to termometro?");
if (temperatura < 100) {
  alert("A temperatura esta muito baixa");
} else if (temperatura >= 100 && temperatura <= 200) {
  alert("A temperatura esta baixa");
} else if (temperatura > 200 && temperatura <= 500) {
  alert("a temperatura esta normal");
} else {
  alert("a temperatura esta muito alta");
}
