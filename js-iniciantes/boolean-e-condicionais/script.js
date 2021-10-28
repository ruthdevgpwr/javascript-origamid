//var x
var possuiGraduacao = false;

if(possuiGraduacao) {
    console.log('É verdadeiro');
    var x = 10;
} else {
    console.log('É falso');
}

console.log(x); //mesmo sendo falso, criou a variavel x, é como se na primeira
//linha tivesse var x; Então o problema do var é o escopo dele.
