const prompt = require("prompt-sync")();
//Classe Pai Conta
class Conta {

    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    //Validação do valor de deposito, garante que seja um valor numerico e positivo 
    validaDeposito(valor) {

        if (isNaN(valor) || valor <= 0) {
            valor = parseFloat(prompt("Valor Invalido, digite um valor numerico e acima de zero: "));
            console.log("");
            this.validaDeposito(valor);

        } else {
            this.depositar(valor);
        }
    }

    /*Validação do valor de saque, garante que seja um valor numerico e positivo  e
    que seja maior que o saldo atual*/
    validaSaque(valor) {

        if (isNaN(valor) || valor <= 0) {
            valor = parseFloat(prompt("Valor Invalido, digite um valor numerico e acima de zero: "));
            console.log("");
            this.validaSaque(valor);

        } else if (valor > this.saldo) {

            console.log(`Saldo insuficente!, seu saldo atual e de R$: ${this.saldo.toFixed(2)}`);
            console.log("");
            valor = parseFloat(prompt("digite um valor dentro do limite do seu Saldo: "));
            console.log("");
            this.validaSaque(valor);

        } else {
            this.sacar(valor);
        }
    }
    
    //Apos depositar um valor valido, exibe uma mensagem cnfirmando o deposito e o saldo atual
    depositar(valor) {
        this.saldo += valor;
        console.log(`Você depositou ${valor.toFixed(2)} e eu saldo agora é de R$: ${this.saldo.toFixed(2)} `);
        console.log("");
    }

    //Apos sacar um valor valido, exibe uma mensagem confirmando o saque e o saldo atual
    sacar(valor) {
        this.saldo -= valor;
        console.log(`Você sacou: ${valor.toFixed(2)} e seu saldo agora é de R$: ${this.saldo.toFixed(2)} `)
        console.log("");
    }

    //Exibe o extrato (saldo atual) da conta
    extrato() {
        console.log(`O seu extrato bancário é de R$: ${this.saldo.toFixed(2)} `);
    }
}

//exportação da classe conta
module.exports = Conta;