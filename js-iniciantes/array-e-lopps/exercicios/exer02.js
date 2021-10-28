// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var item = 0; item < frutas.length; item++){
    console.log(frutas[item])
    if(frutas[item] === 'Pera'){
        break
    }
}

var ultimafruta = frutas[frutas.length - 1]

console.log(frutas)