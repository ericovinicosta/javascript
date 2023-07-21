// //parametros das funções

function soma(numeroUm, numeroDois) {
    return numeroUm + numeroDois
}

// console.log(soma(5, 9))

function multiplica(numeroUm = 1, numeroDois = 1) {
    return numeroUm * numeroDois
}

// console.log(multiplica(soma(4,5), soma(3,3)))

console.log(multiplica(soma(4, 5)))