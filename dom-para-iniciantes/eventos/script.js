const img = document.querySelector('img')

img.addEventListener('click', function(event) {
   console.log('Clicou', event)
})
console.log(img)

const animaisLista = document.querySelector('.animais-lista')

function callbackLista(event) {
    console.log(event.currentTarget)
    console.log(event.target)
    console.log(event.type)
    console.log(event.path)
} 

//animaisLista.addEventListener('click', callbackLista)

const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(event){
    event.preventDefault()
    console.log(event)
}
linkExterno.addEventListener('click', handleLinkExterno)

const imagem = document.querySelector('img')

function callback(event) {
    console.log(this)
    console.log(this.getAttribute('src'))
}

imagem.addEventListener('click', callback)

const h1 = document.querySelector('h1')

function handleEvent(event) {
    console.log(event.type, event)
}

h1.addEventListener('click', handleEvent)
h1.addEventListener('mouseenter', handleEvent)
h1.addEventListener('mouseout', handleEvent)
h1.addEventListener('mousemove', handleEvent)

window.addEventListener('scroll', handleEvent)
window.addEventListener('resize', handleEvent)
window.addEventListener('keydown', handleEvent)

function handleKeyboard(event) {
    if(event.key === 'a'){
        document.body.classList.toggle('azul')
    }
}

window.addEventListener('keydown', handleKeyboard)

const imgs = document.querySelectorAll('img')

function handleImg(event) {
    console.log(event.target.getAttribute('src'))
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg)
})