let salario;
let financiamento;
let resposta;

do {
    salario = +prompt("qual é seu salario?");
    financiamento = +prompt("qual é seu financiamento");
    if (
        salario >= 20000 ||
        salario < 0 ||
        financiamento >= 1000000 ||
        financiamento < 0
    ) {
        alert(
            "O salario deverá ser positivo e menor ou igual a R$ 20 mil, e o financiamento deverá ser positivo e menor ou igual a R$ 1 milhão",
        );
    }
} while (
    salario >= 20000 ||
    salario < 0 ||
    financiamento >= 1000000 ||
    financiamento < 0
);

if (financiamento <= salario * 5) {
    resposta = "financiamento Concedido";
} else {
    resposta = "Financiamento Negado";
}
alert(resposta);
alert("obrigado por nos consiltar");

/* 26) Faça um programa em Javascript que receba o valor do salário de uma pessoa e o valor de um
financiamento pretendido. Caso o financiamento seja menor ou igual a 5 vezes o salário da pessoa,
o programa em Javascript deverá escrever “Financiamento Concedido"; senão, ele deverá
escrever"Financiamento Negado". Independente de conceder ou não o financiamento, o programa
em Javascript escreverá depois a frase "Obrigado por nos consultar.".
No final deverá ser apresentado a mensagem relacionada ao resultado da análise do
financiamento.
Controles de entrada com mensagem de erro:
● salário: deverá ser positivo e menor ou igual a R$ 20 mil.
● financiamento: deverá ser positivo e menor ou igual a R$ 1 milhão.*/