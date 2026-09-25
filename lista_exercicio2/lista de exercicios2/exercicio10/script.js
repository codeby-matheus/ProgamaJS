let peso = parseFloat(prompt("Qual é teu peso?"))

let engordou = peso + (peso * 0.15)
let emagreceu = peso - (peso * 0.20)

alert(`Caso você engorde: ${engordou.toFixed(2)}
Caso você emagreça: ${emagreceu.toFixed(2)}`)