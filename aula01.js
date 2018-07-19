console.log('hello wolrd!')

const n1 = 2
const n2 = 3

const soma = n1 + n2

console.log('Soma: ', soma)

console.log('----------------------------------------')

function mult(v1,v2) {
    return v1*v2
}

console.log('Multiplicação: ', mult(n1,n2))

console.log('----------------------------------------')

const div = (v1,v2) => {
    return v1/v2
}

console.log('Divisão: ', div(8,2))

console.log('----------------------------------------')

const fs = require('fs')
const ler = () => {
    return new Promise((resolve, reject) => {
        fs.writeFile("texto.txt", 'Oi', (err) => {
            if(err) {
                reject('Arquivo não criado')
            }
            else {
                resolve('Arquivo criado!')
            }
        })    
    })
}
ler()

console.log('----------------------------------------')

const calc = require('./calc')

console.log('Soma: ', calc.soma2(2,10))
console.log('Sub: ', calc.sub2(2,10))
console.log('Mult: ', calc.mult2(2,10))
console.log('Div: ', calc.div2(10,2))