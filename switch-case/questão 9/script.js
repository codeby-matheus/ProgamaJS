let codigo = prompt(
  "nome do transporte correspondente, C - carro M - moto B - bicicleta".toUpperCase(),
);

switch (codigo) {
  case "C":
    alert("o seu transporte é um carro");
    break;
  case "M":
    alert("o seu transporte é uma moto");
    break;
  case "B":
    alert("o seu transporte é uma bicicleta");
    break;
  default:
    alert("Código de transporte inválido");
}

/* questão 9 – Sistema de Transporte
Uma empresa de mobilidade urbana utiliza um sistema para identificar o meio de
transporte escolhido pelo usuário por meio de um código de uma única letra.
Desenvolva um programa em JavaScript que solicite ao usuário o código do meio de
transporte. Utilize a estrutura switch para identificar a opção informada e exibir o nome
do transporte correspondente.
Tabela de códigos:
Código Meio de transporte
C Carro
M Moto
B Bicicleta
Observação: Considere que o usuário pode digitar a letra em maiúsculo ou minúsculo.
Utilize o método toUpperCase() ou toLowerCase() para padronizar a entrada antes
de realizar a comparação.
Caso o usuário informe um código diferente dos apresentados na tabela, o programa
deverá exibir a mensagem: "Código de transporte inválido." */
