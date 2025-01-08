

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
            if (!isNotDisponivel(vlPista, ingresso) && !isQuantidadeInvalid(vlPista, quantidade, ingresso)) {
                vlPista = vlPista - quantidade;
                tagPista.textContent = vlPista
            }
            ;
            break;
        case 'superior':
            if (!isNotDisponivel(vlSuperior, ingresso) && !isQuantidadeInvalid(vlSuperior, quantidade, ingresso)) {
            vlSuperior = vlSuperior - quantidade;
            tagSuperior.textContent = vlSuperior;
            }
            break;
        case 'inferior':
            if (!isNotDisponivel(vlInferior, ingresso) && !isQuantidadeInvalid(vlInferior, quantidade, ingresso)) {
            vlInferior = vlInferior - quantidade;
            tagInferior.textContent = vlInferior;
            }
            break;
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

