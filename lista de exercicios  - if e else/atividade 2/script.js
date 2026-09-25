let lado1 = +prompt("Digite o primeiro lado");
let lado2 = +prompt("Digite o segundo lado");
let lado3 = +prompt("Digite o terceiro lado");

if (lado1 == lado2 && lado3) {
  alert("É um triangulo equilatero");
} else if (lado1 !== lado2 && lado3) {
  alert("e um escaleno");
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
  alert("e um isosceles");
}
