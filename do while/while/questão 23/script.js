let nome;
let horas;
let empregados;
let salario;
let salarioFinal;
let laco;
let media;
let horasExcedentes;
let qtdAcima5mil = 0;
let totalEmpregados = 0;
let somaSalarios = 0;
let continuar;

do {
  do {
    nome = prompt("qual é seu nome");
    horas = +prompt("quantas horas voce trabalhou?");
    if (horas < 0 || horas > 400) {
      alert("o número de horas deverá ser positivo e inferior a 400 horas.");
    }
  } while (horas < 0 || horas > 400);
  if (horas < 160) {
    salarioFinal = horas * 10;
  } else {
    horasExcedentes = horas - 160;
    salarioFinal = horas * 10 + horasExcedentes * 15;
  }
  alert("Seu salario Final é de:" + salarioFinal.toFixed(2));
  alert("Suas horas excedentes foram de:" + horasExcedentes);
  alert("Nome do operario:" + nome);

  totalEmpregados++;
  somaSalarios += salarioFinal;
  if (salarioFinal > 5000) {
    qtdAcima5mil++;
  }
  do {
    continuar = prompt("deseja continuar botando outros nomes de operarios?");
    if (continuar !== "sim" && continuar !== "nao") {
      alert("ei bro so sim ou nao");
    }
  } while (continuar !== "sim" && continuar !== "nao");
} while (continuar === "sim");
if (totalEmpregados > 0) {
  let media = somaSalarios / totalEmpregados;
  let percentualAcima5mil = (qtdAcima5mil / totalEmpregados) * 100;

  alert("a media salarial é de:" + media.toFixed(2));
  alert("o percentual acima de 5 mi é de:" + percentualAcima5mil.toFixed(2));
}
/* 23) Elabore um programa em Javascript que receba o nome e número de horas trabalhadas de um operário. 
Feito isso, calcule seu salário sabendo que ele ganha R$ 10,00 por hora. 
Quando o número de horas exceder a 160, calcule o excesso de pagamento numa variável,
caso contrário zerar tal variável. A hora excedente de trabalho vale R$ 15,00. No final do processamento
apresentar o salário final.
 
● Controle de entrada com mensagem de erro: o número de horas deverá ser positivo e inferior a 400 horas.
Exemplo de prova:

Faça um laço principal para ler N empregados

Calcular e apresentar a média dos salários finais
Calcular e apresentar o percentual de salários finais acima de R$ 5 mil
Controle de entrada do laço principal: o usuário deverá responder apenas sim ou não para a pergunta 
"Deseja informar outro empregado?" */
