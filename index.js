import {Conta} from "./Conta.js"
import {Cliente} from "./Cliente.js"

const ester = new Cliente("Ester", 12345678901)
const correnteEster = new Conta(100, ester, 1300)

const joao = new Cliente("João", 19876543210)
const correnteJoao = new Conta(100, joao, 1300)

correnteJoao.sacar(45)
console.log(correnteJoao)


correnteEster.depositar(100)
console.log(correnteEster)

