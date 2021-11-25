function Pessoa(nome, idade,) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.andar = function() {
    return this.nome + ' Pessoa andou'
}

Pessoa.prototype.nadar = function() {
    return this.nome + ' Pessoa nadou'
}

console.log(Pessoa.prototype)

const andre = new Pessoa('André', 28)
console.log(andre.prototype)