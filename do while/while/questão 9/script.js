let salario;
let desconto;
let resposta;
let continuar;
do {
  do {
    if (salario <= 0 || salario >= 10000 || isNaN(salario)) {
      alert("o salário bruto deverá ser positivo e inferior a 10 mil reais ");
    }
  } while (salario <= 0 || salario >= 10000 || isNaN(salario));

  salario = +prompt("qual é seu salario?");
  if (salario <= 1500) {
    desconto = salario * 0.08;
  } else if (salario > 1500 && salario <= 3500) {
    desconto = salario * 0.1;
  } else {
    desconto = salario * 0.12;
  }
  resposta = salario - desconto;
  alert("o seu salario junto com o desconto é de:" + resposta.toFixed(2));

  continuar = prompt("deseja adicionar um novo salario? (sim ou nao)");
} while (continuar == "sim");
