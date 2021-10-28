function faltaVisitar(paisesVisitados){
    var totalPaises = 193;
    return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

faltaVisitar(2);

var profissao = 'Designer';

function dados() {
    var nome = 'André';
    var idade = 28;
    function outrosDados(){
        var endereco = 'Rio de Janeiro';
        var idade = 29;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados;
}

console.log(dados());