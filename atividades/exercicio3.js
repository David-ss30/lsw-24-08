import read from "readline-sync"
import chalk from "chalk"

console.log("Sou um sistema de descontos!! Adicione seus valores para adquiro-los!");
let valorCompra = read.question("Digite o valor da sua compra: R$ ")
let valorFinal
let desconto

if(valorCompra >= 200){
    desconto = valorCompra * 0.15
    valorFinal = valorCompra - desconto
    console.log("Você recebeu 15% de desconto!!");
    console.log(`O valor final ficou em ${valorFinal.toFixed(2)}`);
    
    
}else if(valorCompra >= 100 && valorCompra <= 190){
    desconto = valorCompra * 0.10
    valorFinal = valorCompra - desconto
    console.log("Você recebeu 10% de desconto");
    console.log(`O valor final ficou em ${valorFinal.toFixed(2)}`);

}else{
    console.log("Seu valor não se encaixa nos nossos descontos!");
    
}
