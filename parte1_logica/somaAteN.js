function sumN(N) {
    let soma = 0

    for(i = N; i > 0; i--) { //loop de repetição que começa do número inputado (no exemplo, foi o 5) e vai somando com seus repectivos antecessores até o numeral 1
        soma += i
    }

    return soma
}

//PARA REALIZAR O TESTE, BASTA SUBSTITUIR O INPUT ABAIXO, SALVAR (ctrl + s) E EXECUTAR (ctrl + f5, caso utilize vscode)
console.log(sumN(5))