let M1;
let M2;
let M3;
let mensagem;
let mediaAnual = 6;

do {
    M1 = +prompt("qual foi a sua media no primeiro trimestre?");
    M2 = +prompt("qual foi a sua media no segundo trimestre?");
    M3 = +prompt("qual foi a sua media no terceiro trimestre?");
    if (M1 < 0 || M1 > 10 || M2 < 0 || M2 > 10 || M3 < 0 || M3 > 10) {
        alert("as três médias trimestrais deverão ser valores entre 0 e 10");
    }
} while (M1 < 0 || M1 > 10 || M2 < 0 || M2 > 10 || M3 < 0 || M3 > 10);
if ((M1 + M2 + M3) / 3 > mediaAnual) {
    alert("voce passou");
} else if ((M1 + M2 + M3) / 3 < mediaAnual) alert("voce reprovou");

/* 28) Faça um programa em Javascript que leia as três médias trimestrais de uma disciplina. Calcule e
apresente a média anual e a mensagem "Aprovação" caso a média anual seja maior ou igual a seis e
"Reprovação" caso contrário.
Controles de entrada com mensagem de erro: as três médias trimestrais deverão ser valores
entre 0 e 10. */