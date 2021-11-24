// Não é isso que eu quero pq senao eu sempre vou ter que tá selecinando
// os elementos que eu quero e o objeto sempre vai ta mudando

// const Dom = {
//     seletor: 'li',
//     element() {
//         return document.querySelector(this.seletor)
//     },
//     ativar() {
//         this.element().classList.add('ativo')
//     },
// }

// Ao inves de fazer como está acima, eu uso o constructor funcion:

function Dom(seletor) {
    this.element = function() {
        return document.querySelector(seletor)
    }
    this.ativar = function(classe) {
        this.element().classList.add(classe)
    }
}

const li = new Dom('li')
li.ativar('ativar-li')

const ul = new Dom('ul')
ul.ativar('ativar-ul')

const lastLi = new Dom('li:last-child')
lastLi.ativar('ativar-lastLi')