let gado = parseFloat(prompt("Quantos cabeças de gado tem?"));
let herdeiro = parseFloat(prompt("Quantos herdeiros a aqui?"));
let conta = gado - (gado * 15/100)
let osherdeirao = herdeiro%gado
alert(`vai sobrar +` (osherdeirao))
