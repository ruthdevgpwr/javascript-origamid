// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`
}

const andre = new Pessoa('André', 'Borges', 28)

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)


console.log(NodeList.prototype)
console.log(HTMLCollection.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li')

console.log(li.constructor.name) //HTMLElement
li //HTMLElement

console.log(li.click.constructor.name)
li.click // Function

console.log(li.innerText.constructor.name)
li.innerText //String

console.log(li.value.constructor.name)
li.value //Number

console.log(li.hidden.constructor.name)
li.hidden;

console.log(li.offsetLeft.constructor.name)
li.offsetLeft;

li.click() //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name //String