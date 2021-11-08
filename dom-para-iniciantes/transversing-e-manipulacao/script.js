//Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copyright')

const cloneMenu = menu.cloneNode(true)

copy.appendChild(cloneMenu)

//Selecione o primeiro DT da dl de Faq
//Selecione o DD referente ao primeiro DT

const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')
const primeiroDD = primeiroDt.nextElementSibling

console.log(primeiroDt)
console.log(primeiroDD)

//Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais')
faq.innerHTML = animais.innerHTML