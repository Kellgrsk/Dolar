fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta => {
    return resposta.json()
}) .then(economia => {
    console.log(economia)
    document.getElementById('valorDolar').innerHTML = "Valor Atual: "  + "R$ " + economia.USDBRL.bid;
}) 

fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta => {
    return resposta.json()
}) .then(economia => {
    console.log(economia)
    document.getElementById('valorAlto').innerHTML =  "Valor Alto: "  +  "R$ " + economia.USDBRL.high;
}) 

fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta => {
    return resposta.json()
}) .then(economia => {
    console.log(economia)
    document.getElementById('valorBaixo').innerHTML = "Valor Baixo: " + "R$" +  economia.USDBRL.low;
}) 

