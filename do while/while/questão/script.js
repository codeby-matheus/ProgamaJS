let salario = +prompt("qual é seu salario");
let porcentagem;

do {
if (salario > 50000) {
  alert("insira abaixo de 50 mil")
}
}
while (salario > 50000)

  if(salario <= 2000) {
    porcentagem = (salario * 0.15) + salario
  }
  else if (salario > 2000 && salario <= 4000) {
    porcentagem = (salario * 0.10) + salario
  }
  else if (salario > 4000) {
    porcentagem = (salario * 0.05) + salario
  }
  alert("seu novo salario é de:" + porcentagem.toFixed(2))
 

/* 22) Desenvolver um programa em Javascript que calcule e apresente o reajuste de salário de um
funcionário. Considere que o funcionário deverá receber um reajuste de 15% caso seu salário seja
menor ou igual a 2.000 reais. Se o salário for maior que 2.000 reais, mas, menor ou igual a 4.000
reais, seu reajuste será de 10%; caso seja maior que 4.000 reais, o reajuste deverá ser de 5%.
● Controle de entrada com mensagem de erro: o salário de entrada deverá ser positivo e
menor ou igual a R$ 50 mil. */