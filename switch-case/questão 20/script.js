let codigo = +prompt(
  "Cargo Valor/Hora: 1 - Programador Júnior R$ 35, 2 - Programador Pleno R$ 55 3 - Programador Sênior R$ 80 4 - Analista de Sistemas R$ 95 5 - Arquiteto de Software R$ 130".toLowerCase(),
);
let salário;
let mensagem;
let horas;

switch (codigo) {
  case 1:
    horas = +prompt("quantas horas voce trabalha?");
    salário = horas * 35;
    mensagem = "o seu salario é de:" + salário.toFixed(2);
    break;

  case 2:
    horas = +prompt("quantas horas voce trabalha?");
    salário = horas * 55;
    mensagem = "o seu salario é de:" + salário.toFixed(2);
    break;

  case 3:
    horas = +prompt("quantas horas voce trabalha?");
    salário = horas * 80;
    mensagem = "o seu salario é de:" + salário.toFixed(2);
    break;

  case 4:
    horas = +prompt("quantas horas voce trabalha?");
    salário = horas * 95;
    mensagem = "o seu salario é de:" + salário.toFixed(2);
    break;

  case 5:
    horas = +prompt("quantas horas voce trabalha?");
    salário = horas * 130;
    mensagem = "o seu salario é de:" + salário.toFixed(2);
    break;

  default:
    mensagem = "fale apenas o que eu pedi";
}
alert(mensagem);

/* Questão 20 – Sistema de Cálculo de Salário
Uma empresa paga salários diferentes conforme o cargo.
Leia:
• código do cargo;
• quantidade de horas trabalhadas.
Tabela
Código Cargo Valor/Hora
1 Programador Júnior R$ 35
2 Programador Pleno R$ 55
3 Programador Sênior R$ 80
4 Analista de Sistemas R$ 95
5 Arquiteto de Software R$ 130
Calcule o salário bruto do funcionário. */
