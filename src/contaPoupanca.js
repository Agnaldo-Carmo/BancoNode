const Conta = require("./conta");

//classe filho conta poupança
class ContaPoupanca extends Conta{

    constructor(titular,saldo,rendimento){
        super(titular,saldo);
        this.rendimento = rendimento;
    }

    //Aplica rendimento calculando o valor em porcentagem
    aplicarJuros(rendimento){
     
        this.saldo = this.saldo + (rendimento/100 * this.saldo);
    }
}

module.exports = ContaPoupanca;