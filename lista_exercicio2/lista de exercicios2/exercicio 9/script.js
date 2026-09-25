let preco = parseFloat(prompt("Qual é o preço do produto?"))
let porcentagem = (preco/100) * 5
alert(`o desconto do produto é:` + (porcentagem).toFixed(2));
