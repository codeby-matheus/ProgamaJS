let valorpago = parseFloat(prompt("valor pago"));
let produtovalor = parseFloat(prompt("qual valor do produto?"));
let troco = parseFloat(valorpago-produtovalor);
alert(`o troco é: R$` + troco.toFixed(2));