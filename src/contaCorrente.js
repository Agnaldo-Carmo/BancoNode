const Conta = require("./conta");

//classe filho conta corrente
class ContaCorrente extends Conta{
    constructor(titular,saldo,juros){
        super(titular,saldo);
        this.juros = juros;
    }

    //Aplica juro calculando o valor em porcentagem
    aplicarJuros(juro){
        this.saldo = this.saldo + (juro/100 * this.saldo);
    }
}

module.exports = ContaCorrente;