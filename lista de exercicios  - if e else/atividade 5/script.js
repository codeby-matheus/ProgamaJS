let nota = +prompt("Qual é a sua nota");
let frequencia = +prompt("Qual é sua frequencia");
let media = 7;
let FrequenciaFaltas = 75;

if (nota > media && frequencia < FrequenciaFaltas) {
  alert("voce passou");
} else {
  alert("voce reprovou");
}
