

function comprar(){

    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    let pista = document.getElementById('qtd-pista').textContent;
    let superior = document.getElementById('qtd-superior').textContent;
    let inferior = document.getElementById('qtd-inferior').textContent;

    console.log(`Ingresso: ${ingresso} - Quantidade: ${quantidade}`);

    console.log(`${pista}, ${superior}, ${inferior}`);
}