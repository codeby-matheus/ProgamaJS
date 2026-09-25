let alturatijolo = parseFloat(prompt("Qual é a altura do tijolo em cm?"));
let larguratijolo = parseFloat(prompt("Qual a largura do tijolo em cm?"));
let altura = parseFloat(
  prompt("Fale a altura do muro que você queria construir em cm"),
);
let largura = parseFloat(
  prompt("Fale a largura do muro que você queira construir em cm"),
);
let calculoAltura = alturatijolo * altura;
let calculoLargura = larguratijolo * largura;
let soma = calculoAltura + calculoLargura * 0.97;
alert("O resultado final é:" + soma.toFixed(2));
