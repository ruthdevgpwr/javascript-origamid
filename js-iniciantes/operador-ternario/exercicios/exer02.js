// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = false;
 
darCredito = (possuiCarro && possuiCasa) //nao coloca ternario pq o que vai retornar
//já são boleanos - true ou false, nesse caso 
//pq os valores ja são booleanos lá no ternario

//meu exemplo:
//var darCredito = (possuiCarro && possuiCasa) ? 'Crédito concedido' : 'Crédito não concedido'

console.log(darCredito)

