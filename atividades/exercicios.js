import read from "readline-sync"
import chalk from "chalk"

console.log("Ola, vamos calcular sua nota!!!");

let nota = Number(read.question("Digite sua nota: "))
let frequencia = Number(read.question("Digite sua frequencia: "))

if (nota >= 6 && frequencia >= 75){
    console.log(chalk.blue("Aprovado"));
    
}else {
    console.log(chalk.red("Reprovado"));
    
}

