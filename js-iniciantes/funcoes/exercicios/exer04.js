// Crie uma função que verifica se um número é par

function verificarNumeroPar(numero){
    if(numero % 2 === 0){
        return `o número ${numero} é PAR!`;
    } else {
        return `O número ${numero} é ÍMPAR!`
    }
}

console.log(verificarNumeroPar(40));