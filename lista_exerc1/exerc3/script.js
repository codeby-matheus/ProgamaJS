let valorquilo = parseFloat(prompt("valor do quilo?"));
let consumo = parseFloat(prompt("quantos kilos foram consumidos?"))
let valorfinal = valorquilo * consumo
alert(`valor final é R$` + valorfinal.toFixed(2));
