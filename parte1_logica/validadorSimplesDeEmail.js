/* OPÇÃO COM REGEX

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

*/

function isValidEmail(email) {
    let positionAt = email.indexOf("@")//verifica se existe "@", e se tem algo escrito antes dele, no input
    let positionDot = email.indexOf(".", positionAt)//verifica se existe "." e começa a contar após o "@"
    let positionLastDot = email.lastIndexOf(".")

    if(positionAt < 1) {
        return false
    }
    
    if(positionDot <= (positionAt + 1)) {//verifica se tem algo escrito entre o "@" e o "."
        return false 
    }

    if(positionLastDot === (email.length - 1)) {//garante que tenha algo escrito após o "."
        return false
    }
    
    return true
}


//PARA REALIZAR O TESTE, BASTA SUBSTITUIR O INPUT ABAIXO, SALVAR (ctrl + s) E EXECUTAR (ctrl + f5, caso utilize vscode)
console.log(isValidEmail("teste@teste.com"))