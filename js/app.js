

function comprar() {

    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    let tagPista = document.getElementById('qtd-pista');
    let tagSuperior = document.getElementById('qtd-superior');
    let tagInferior = document.getElementById('qtd-inferior');

    let vlPista = parseInt(document.getElementById('qtd-pista').textContent);
    let vlSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let vlInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    switch (ingresso) {
        case 'pista':
            operacaoCompra(vlPista, quantidade, tagPista, ingresso);
            break;
        case 'superior':
            operacaoCompra(vlSuperior, quantidade, tagSuperior, ingresso);
            break;
        case 'inferior':
           operacaoCompra(vlInferior, quantidade, tagInferior, ingresso);
            break;
    }
}

function operacaoCompra(vlAtual, vlInformado, tagHtml, tipo){

    if (!isNotDisponivel(vlAtual, tipo) && !isQuantidadeInvalid(vlAtual, vlInformado, tipo)) {
        vlAtual = vlAtual - vlInformado;
        tagHtml.textContent = vlAtual;
    }
}

function isNotDisponivel(vlAtualLista, tipo) {

    if (vlAtualLista <= 0) {

        alert(`NÃO HÁ MAIS INGRESSOS DISPONÍVEIS PARA A MODALIDADE: ${tipo.toUpperCase()}`);
        return true;
    }
}

function isQuantidadeInvalid(vlAtualLista, valorInformado, tipo) {
    if (valorInformado > vlAtualLista) {

        alert(`A QUANTIDADE: ${valorInformado} É INVÁLIDA! PARA A MODALIDADE: ${tipo.toUpperCase()} HÁ ${vlAtualLista} INGRESSOS DISPONÍVEIS.`);
        return true;
    } else if (valorInformado <= 0){
        alert(`A QUANTIDADE INFORMADA DEVE SER MAIOR QUE ZERO!! `);
        return true;
    }
}

