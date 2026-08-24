import read from "readline-sync"
import chalk from "chalk"
console.log("Ola, faça login para entrar no sistema!");
const login = "admin"
const password = 1234
let nome = read.question("Digite seu nome: ") .toLocaleLowerCase();
let senha = read.question("Digite sua senha: ");

if(nome == login && senha == password){
    console.log("Acesso permitido");
    console.log("Seja bem vindo!");
    
    

}else{
    console.log("Acesso negado");
    console.log("Tente novamente");
    
    
}
