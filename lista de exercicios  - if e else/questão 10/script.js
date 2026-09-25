let salario = +prompt("qual é seu salario?");
let imposto;
if (salario <= 2500) {
  alert("o seu salario não precisa de impostos, " + salario);
} else if (salario >= 2500) {
  imposto = salario * 0.15;
  alert("voce vai vai ter que pagar 15% do seu salario, e é: " + imposto);
} else if (salario >= 5000) {
  imposto = salario * 0.27;
  alert(
    "voce vai ter que pagar 27% de impostos do seu salario, e é:" +
      imposto.toFixed(2),
  );
}
