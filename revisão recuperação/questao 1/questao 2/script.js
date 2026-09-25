let quantidadePag = parseFloat(
  prompt("quantidade total de paginas a serem digitadas"),
);
let NumeroDig = parseFloat(
  prompt("Número de digitadores trabalhando atualmente"),
);
let tempoTotal = parseFloat(
  prompt("Tempo total estimado para concluir o trabalho ( em horas )"),
);
let NovoDig = parseFloat(
  prompt("numero de novos digitadores que serao adicionados a equipe"),
);
let total = NovoDig + NumeroDig;
let quantidadeMedia = quantidadePag / tempoTotal;
let novoTempo = quantidadePag / total
alert(
  "quantidade media de paginas digitadas por hora pela equipe atual:" +
    quantidadeMedia.toFixed(2),
);
alert("novo numero total de digitadores" + total.toFixed(2));
alert("novo tempo estimado para concluir o trabalho" + novoTempo.toFixed(2));
