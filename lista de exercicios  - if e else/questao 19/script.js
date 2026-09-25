let valorBruto = +prompt("qual é o valor bruto");
let nivelFidelidade = prompt("Bronze, Prata ou Ouro");
let cupomValido = prompt("Seu cupom é valido? ( sim ou não )");
let frete;
let liquido;

// cliente ouro

if ((nivelFidelidade = ouro)) {
  liquido = valorBruto * 0.15;

  if (liquido - valorBruto >= 150) {
    frete == 0;
  }
} else {
  frete = 10;
}

// cliente prata

if ((nivelFidelidade = prata && cupomValido == "sim")) {
  liquido = valorBruto * 0.1;
  if (cupomValido == "nao") {
    liquido = valorBruto * 0.5;
    if (liquido - valorBruto > 250) {
      frete = 0;
    }
  }
} else {
  frete = 20;
}

// cliente bronze

if ((nivelFidelidade = bronze && cupomValido == "sim")) {
  liquido = valorBruto * 0.5;
  frete = 30;
} else {
  liquido = valorBruto;
}

alert("desconto =" + liquido);
alert("frete =" + frete);
alert("o valor total é:" + valorBruto - liquido + frete);
