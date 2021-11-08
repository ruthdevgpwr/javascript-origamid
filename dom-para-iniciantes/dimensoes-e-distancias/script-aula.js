

const listaAnimais = document.querySelector('.animais-lista')

const height = listaAnimais.scrollHeight
const animaisTop = listaAnimais.offsetTop
console.log(height)
console.log(animaisTop)

const primeiroh2 = document.querySelector('h2')
const h2left = primeiroh2.offsetLeft
console.log(h2left)

const rect = primeiroh2.getBoundingClientRect()

console.log(rect)
console.log(rect.height)

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.pageYOffset,
)

const h2rect = primeiroh2.getBoundingClientRect()

if(h2rect.top < 0 ) {
    console.log('Passou do elemento')
}

const small = window.matchMedia('(max-width: 600px')

if(small.matches){
    console.log('Usurário mobile')
} else {
    console.log('Usuário Desktop')
}