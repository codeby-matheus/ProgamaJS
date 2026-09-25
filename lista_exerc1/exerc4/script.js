let valorfinal = parseFloat(prompt("Qual é o valor final pago?"));
let precoquilo = parseFloat(prompt("Qual é o preço do quilo?"));
let pesofinal = valorfinal / precoquilo;
alert(`A quantidade consumida é:` + pesofinal.toFixed(2));