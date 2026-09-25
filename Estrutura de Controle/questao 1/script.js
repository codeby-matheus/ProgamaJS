let idade = parseFloat(prompt("Qual a sua idade?"));
if (isNaN(idade)) {
  alert("So pode numero");
}
if (idade >= 18) {
  alert("Pode entrar");
} else {
  alert("Não pode entrar garoto");
}