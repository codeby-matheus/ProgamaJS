let idade = +prompt("qual é a sua idade?");
let nadador;

if (idade <= 12) {
  nadador = "infatil";
} else if (idade >= 13 && idade <= 17) {
  nadador = "juvenil";
} else if (idade >= 18) {
  nadador = "adulto";
}
alert("voce vai participar da categoria: " + nadador);
