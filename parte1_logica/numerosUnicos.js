const entrada = [1, 2, 2, 3, 4, 4, 5]
const saida = []

for(i = 0; i <= (entrada.length - 1); i++) {
    if(entrada[i] != entrada[i-1] && entrada[i] != entrada[i+1]) {
        saida.push(entrada[i])
    }
}

//PARA REALIZAR O TESTE BASTA EXECUTAR (ctrl + f5, caso utilize vscode)
console.log(saida)