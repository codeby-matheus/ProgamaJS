let AreaTotal = parseFloat(prompt("Area total a ser pintada ( em m2 )"));
let Rendimento = parseFloat(prompt("rendimento da tinta ( em m2 por litro )"));
let Volumetria = parseFloat(
  prompt("volumetria da lata de tinta ( em litros )"),
);
let Preco = parseFloat(prompt("preço unitario da lata de tinta"));
let QuantHoras = parseFloat(
  prompt("quantiade de horas estimadas para a execucção do serviço"),
);
let QuantPint = parseFloat(prompt("quantidade de pintores alocados na equipe"));
let ValorHora = parseFloat(prompt("valor da hora cobrado por pintor"));
let ValorReservado = parseFloat(
  prompt("Orçamento maximo disponivel pela familia"),
);

let litrosNecessarios = AreaTotal / Rendimento;
let quantidadeLatas = Math.ceil(litrosNecessarios / Volumetria);

let Calc1 = QuantHoras * QuantPint * ValorHora;
let Calc2 = quantidadeLatas * Preco;
let Calc3 = Calc2 + Calc1;
let SaldoFinal;
let FormaDePagamento;
let Parcela;
let ValorParcela;

if (Calc3 < ValorReservado) {
  FormaDePagamento == "A vista";
  SaldoFinal = ValorReservado - Calc3 * 0.95;
} else if (0.5 * Calc3 > ValorReservado) {
  FormaDePagamento == "Parcelado";
  Parcela = 4;
} else if (0.3 * Calc3 > ValorReservado) {
  FormaDePagamento == "Parcelado";
  Parcela = 3;
} else {
  Parcela = 2;
  FormaDePagamento == "Parcelado";
}
ValorParcela = Calc3 / Parcela;

if (FormaDePagamento == "A vista") {
  alert("O que sobrou é:" + SaldoFinal.toFixed);
} else {
  alert("Parcelado em:" +
    Parcela +
    "Valor de cada parcela:" + ValorParcela.toFixed(2));
}