const h1 = document.querySelector('h1')
//const animaisLista = document.querySelector('.animais-descricao')
//console.log(h1.innerHTML)//
//console.log(h1.outerHTML)

//h1.innerText = 'Novo título'

//console.log(animaisLista.innerHTML)

const lista = document.querySelector('.animais-lista')

console.log(lista.parentElement.parentElement)

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')
const mapa = document.querySelector('.mapa')
//animais.appendChild(titulo)

//contato.removeChild(titulo)
//contato.insertBefore(animais, mapa)
//contato.replaceChild(lista, titulo) //substitui titulo por lista
//lista fica no lugar de titulo

const novoH1 = document.createElement('h1')
novoH1.innerText = 'Novo Título'
novoH1.classList.add('titulo')

mapa.appendChild(novoH1)
console.log(novoH1)

const h1 = document.querySelector('h1')
const faq = document.querySelector('.faq')
const cloneH1 = h1.cloneNode(true)

faq.appendChild(cloneH1)

