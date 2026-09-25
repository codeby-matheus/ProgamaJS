let disciplas = parseFloat(prompt("Qual é o numero de disciplinas"));
let horas = parseFloat(prompt("Quantas horas é por aula"));
let dias = parseFloat(prompt("Qunatos dias de estudo vc estuda man?"));
let calculo = disciplas * horas;
let diacalculo = disciplas * horas * dias;
alert("o resultado de horas estudadas por dia é:" + calculo.toFixed(2));
alert("O resultado de horas no periodo é:" + diacalculo.toFixed(2));
