let idade = +prompt("qual é a idade do motorista");
let historico = +prompt("historico de acidentes nos ultimos 3 anos");
let ABS = prompt("o carro possui ABS?");
let airbag = prompt("o carro possui airbag?");
let mensagem;
let valorMensal;

// risco baixo

if (idade >= 25 && historico == 0) {
  mensagem = "pefil de risco baixo (excelente condutor)";
  valorMensal = 180;
}

// risco moderado

else if (idade >= 25 || historico <= 2 || (idade <= 25 && historico == 0)) {
  valorMensal = 300;
  mensagem = "perfil de risco moderado";
  if (ABS === "sim" && airbag === "sim") {
    valorMensal = valorMensal + 30;
  }
} else {
  valorMensal = 300;
}

// risco alto

if (idade < 25 || historico > 2) {
  mensagem = "perfil de risco alto";
  valorMensal = 450;

  if (ABS == "nao" || airbag === "nao") {
    valorMensal = valorMensal + 100;
}
} 

alert( mensagem+"\n se vai pagar " + valorMensal.toFixed(2))

