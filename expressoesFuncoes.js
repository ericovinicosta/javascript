//expressão de função

// const soma = function(num1, num2){ return num1 + num2}

//arrowfunction

const apresentarArrow = (nome) => `meu nome é ${nome}`

const somaArrow = (num1, num2) => num1 + num2

//Arrow function com mais de uma linha

const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10){
        return "somente menores que 10"
    } else{
        return num1 + num2
    }
}