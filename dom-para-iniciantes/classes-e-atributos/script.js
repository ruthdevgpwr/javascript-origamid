const menu = document.querySelector('.menu')

menu.classList.add('ativo')
menu.classList.remove('azul')
menu.classList.toggle('ativo')
menu.classList.toggle('ativo')
menu.classList.replace('ativo', 'inativo')

console.log(menu.classList)


console.log(menu.classList.contains('ativo'))

const animais = document.querySelector('.animais')

console.log(animais.attributes)
console.log(animais.attributes[0])
console.log(animais.attributes.class)
console.log(animais.attributes.id)
console.log(animais.attributes['data-texto'])

const img = document.querySelector('img')
const srcImg = img.getAttribute('src')  // retorna o caminho da img
console.log(srcImg)

const altImg = img.getAttribute('alt') // retorna texto alternativo
console.log(altImg) 

img.setAttribute('alt', 'Imagem de uma raposa')
const possuiAlt = img.hasAttribute('alt')
console.log(possuiAlt)

const carro = {
    portas : 4,
    andar : (km) => {
        console.log(`Andou ${km} km`)
    }
}