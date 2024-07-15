const Conta = require("./conta");
const ContaCorrente = require("./contaCorrente");
const ContaPoupanca = require("./contaPoupanca");
const exibir = require("./exibicao");
const prompt = require("prompt-sync")();

//Cadastra uma nova conta em nome do usuario
function cadastro(nome) {
    let tipo = prompt(`Seja Bem-Vindo(a) ${nome}! Qual tipo de Conta deseja abrir? Digite 1 para Corrente ou 2 para Poupança: `);
    console.log("");

    let conta;

    //Decide que tipo de conta sera criada 
    if (tipo == "1") {
        conta = new ContaCorrente(nome, parseFloat(0));

    } else if (tipo == "2") {
        conta = new ContaPoupanca(nome, parseFloat(0));

    } else {

        //Se a opção for invalida chama a função novamente
        console.log("Você escolheu uma opção invalida!");
        console.log("");
        conta = cadastro(nome);
    }

    return conta;
}

//Função principal que dispara a execução de todo o programa
function main() {
    console.log("");
    let nome = prompt("Informe seu nome: ");
    console.log("");

    let conta = cadastro(nome);
    exibir(conta);
}

//Chama a função main
main();





