function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida
    this.preco = precoAtribuido
}

// const honda = new Carro()
// honda.marca = 'Honda'
// honda.preco = 4000

// const fiat = new Carro()
// fiat.marca = 'Fiat'
// fiat.preco = 3000

// posso fazer assim: definir parâmetros na função Carro () e 
// criar um novo objeto assim: definir parâmetros na função Carro

const honda = new Carro('Honda', 4000)
const fiat = new Carro('Fiat', 3000)

function Carro2(marca, precoInicial) {
    this.taxa = 1.2
    const precoFinal = precoInicial * this.taxa
    this.marca = marca
    this.preco = precoFinal
    console.log(this)
}

const mazda = new Carro2('Mazda', 5000)

const etios = new Carro2('Etios', 3000)