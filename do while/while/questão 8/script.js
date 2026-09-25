let numero1;
let numero2;
let simbolo;
let resposta;

do {
    numero1 = +prompt("qual é seu primeiro numero");
    numero2 = +prompt("qual é seu segundo numero");
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("A operação matemática só poderá ser apenas numeros");
    }
} while (isNaN(numero1) || isNaN(numero2));
simbolo = prompt("qual é seu simbolo? ( +, -, *, / )");

do {
    simbolo = prompt("qual é seu simbolo? ( +, -, *, / )");
    if (
        simbolo !== "+" &&
        simbolo !== "-" &&
        simbolo !== "*" &&
        simbolo !== "/"
    ) {
        alert("A operação matemática só poderá ser apenas +, -, *, /");
    }
} while (
    simbolo !== "+" &&
    simbolo !== "-" &&
    simbolo !== "*" &&
    simbolo !== "/"
);

switch (simbolo) {
    case "+":
        resposta = numero1 + numero2;
        break;

    case "-":
        resposta = numero1 - numero2;
        break;

    case "*":
        resposta = numero1 * numero2;
        break;

    case "/":
        resposta = numero1 / numero2;
        break;
}
alert("o resultado é:" + resposta.toFixed(2));