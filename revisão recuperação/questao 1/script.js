let areaIrrigada = parseFloat(prompt("área total irrigada ( em m2 )"));
let quantidadeAgua = parseFloat(
  prompt("Quantidade total de agua utilizada ( em litros"),
);
let Setor = parseFloat(prompt("area de um setor especifico ( em m2)"));
let consumo = areaIrrigada / quantidadeAgua;
let AguaSetor = consumo * Setor;
let diferenca = AguaSetor - 500;
alert("o consumo de agua por m2 é:" + consumo.toFixed(2));
alert("a quantidade de agua utilizada no setor é:" + AguaSetor.toFixed(2));
alert("a diferença entre o consumo do setor e 500L é:" + diferenca.toFixed(2));
