// Como corrigir o erro abaixo?

let dois = 2;

function somarDois(x) {
    return x + dois;
}

function dividirDois(x) {
    return x / dois;
}

console.log(somarDois(4))
console.log(dividirDois(6))

/* pq a variavel dois está fora do escopo da função somardois e é uma constante, logo
não pode ter seu valor alterado. Então, resolve o erro mudando const para let.*/