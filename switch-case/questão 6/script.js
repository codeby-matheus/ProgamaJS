let codigo = +prompt("fala o codigo do produto (100, 200, 300)");

switch (codigo) {
  case 100:
    alert("voce escolheu um mouse e ele custa 50 reais");
    break;
  case 200:
    alert("voce escolheu um teclado e ele custa 80 reais");
    break;
  case 300:
    alert("voce escolheu um monitor e ele custa 900 reais");
    break;
  default:
    alert("seu burro, é so 100, 200 ou 300");
}

/* questão 6 – Tabela de Produtos
Uma loja de informática utiliza códigos numéricos para identificar seus produtos e facilitar o
atendimento aos clientes.
Desenvolva um programa em JavaScript que solicite ao usuário o código de um produto. Utilize a
estrutura switch para identificar o produto e exibir seu nome e preço.
Tabela de produtos:
Código Produto Preço
100 Mouse R$ 50,00
200 Teclado R$ 80,00
300 Monitor R$ 900,00
Caso o usuário informe um código que não exista na tabela, o programa deverá exibir a mensagem:
"Código de produto inválido." */
