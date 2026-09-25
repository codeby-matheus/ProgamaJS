let preço = parseFloat(prompt("Qual é o preço do produto?"))
let desconto = parseFloat(prompt("Quanto de desconto você quer no produto?"))
let porcentagem = (desconto / preço) * 100
alert(`A porcentagem é: ${porcentagem.toFixed(2)}%`)
