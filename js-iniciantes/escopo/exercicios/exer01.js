// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    }
    console.log(var, marca, portas);

/*Resposta: um dos erros é por causa do escopo, o let mantém o escopo e não funciona fora dele. 
Nesse caso, o erro para a variável portas vai ser: erro portas is not defined.

Outro erro é porque no console.log coloquei o tipo da variavel, que no caso é var, a qual 
é uma palavra reservada do JS e não pode ser usada para nomear variável
, logo vai dar erro de sintaxe

Obs: se o console.log tivesse dentro do escopo e cor estivesse no lugar de var dentro
do console.log, resolveria o erro. 
*/
