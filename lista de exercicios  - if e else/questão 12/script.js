let lado1 = +prompt("qual é a primeira medida");
let lado2 = +prompt("qual é a segunda medida?");
let lado3 = +prompt("qual é a terceira medida?");

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  alert("o resultado é um triangulo")
} else {
  alert("não é um triangulo");
}
