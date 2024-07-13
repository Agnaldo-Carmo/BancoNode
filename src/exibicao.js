const prompt = require("prompt-sync")();

//Funcao que prepara a tela para melhor exibição dos resultados
function exibir(conta) {
    let i = 0;

    do {
        console.log("---------------------------------------------------------------");
        console.log("");
        console.log(`Olá ${conta.titular} Em que podemos ajudar? Digite:` + "\n\n" + "1 para depositar" + "\n\n" + "2 para sacar " + "\n\n" +
            "3 para ver o extrato" + "\n\n" + "Qualquer tecla para encerrar");

        console.log("");

        i = prompt("O que deseja fazer?: ");

        console.log("");

        if (i == 1) {

            //Inicia operação de deposito a partir da chamada da função que valida do valor digitado
            let deposito = parseFloat(prompt("Informe o valor a ser depositado (ex:1.50): "));
            console.log("");
            console.log("---------------------------------------------------------------");
            console.log("");
            conta.validaDeposito(deposito);

        } else if (i == 2) {

            // Impede que o usuario acesse a função de saque caso seu saldo seja Zero.
            if (conta.saldo == 0) {
                console.log("---------------------------------------------------------------");
                console.log("");
                console.log("Extrato Vazio! Você não possui dinheiro disponivel para saque!");
                console.log("");

                i = 0;
            } else {

                //Inicia operação de saque  a partir da chamada da função que valida do valor digitado
                let saque = parseFloat(prompt("Informe o valor a ser sacado (ex:1.50): "));
                console.log("");
                console.log("---------------------------------------------------------------");
                console.log("");
                conta.validaSaque(saque);

            }

        } else if (i == 3) {

            //Exibe o Extrato da conta
            console.log("---------------------------------------------------------------");
            console.log("");
            conta.extrato();
            console.log("");

        } else {
            i = 4;
        }

    } while (i != 4)
}

module.exports = exibir;