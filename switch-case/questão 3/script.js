let codigo = prompt(
  "saudação de acordo com o periodo do dia informado pelo usuario (m, t ou n)",
).toLowerCase();

switch (codigo) {
  case "M":
    alert("Ta de manha");
    break;
  case "T":
    alert("Ta de tarde");
    break;
  case "N":
    alert("Ta de noite");
    break;
  default:
    alert("fala certo");
}
