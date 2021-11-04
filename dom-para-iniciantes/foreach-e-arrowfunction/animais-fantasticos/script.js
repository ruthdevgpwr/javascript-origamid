/* --- PARAMETROS DO forEach: 

const imgs = document.querySelectorAll('img')

let i = 0;
imgs.forEach(function(item, index, array){
console.log(item, index, array)
}) */

const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)

console.log(titulos)
console.log(titulosArray)

titulosArray.forEach(function(item, index, array){
    console.log(item, index, array)

/* com ARROW FUNCTION

titulosArray.forEach((item, index, array) =>{
    console.log(item, index, array)

    //argumento único - não precisa de ()
    //argumentos múltiplos e sem argumentos - precisa de ()

    PADRÃO - mesmo sendo argumento único, SEMPRE colocar () 
*/

})
