let nome = prompt("qual é seu nome")
let horas
let salario

do {
  horas = +prompt("quantas horas você trabalha?")
if(isNaN(horas) || horas < 0 || horas > 400 ) {
  alert("valor invalido")
}
}
while (isNaN(horas) || horas < 0 || horas > 400 )
    
  if(horas <= 160) {
  salario = horas * 10
}
  else if(horas >= 160) {
  salario = horas * 15
}
alert("o seu salario é de:" + salario.toFixed(2))


/* 23) Elabore um programa em Javascript que receba o nome e número de horas trabalhadas de um
operário. Feito isso, calcule seu salário sabendo que ele ganha R$ 10,00 por hora. Quando o
número de horas exceder a 160, calcule o excesso de pagamento numa variável, caso contrário
zerar tal variável. A hora excedente de trabalho vale R$ 15,00. No final do processamento
apresentar o salário final.
● Controle de entrada com mensagem de erro: o número de horas deverá ser positivo e
inferior a 400 horas. */