function calculator() {
    const operation = prompt('Choose an operation:\n 1 - Sum ( + )\n 2 - Subtraction ( - )\n 3 - Multiplication ( * )\n 4 - Division ( / )\n 5 - Real Division ( % )\n 6 - Potential ( ** )')
}
calculator();

let firstNumber = Number(prompt('Type the expression first number: '))
let secondNumber = Number(prompt('Type the expression second number: '))
let result;

function sum(firstNumber, secondNumber) {
    result = firstNumber + secondNumber;
    prompt(`${firstNumber} + ${secondNumber} = ${result}`)
}

function subtraction(firstNumber, secondNumber) {
    result = firstNumber - secondNumber;
    prompt(`${firstNumber} - ${secondNumber} = ${result}`)
}

function multiplication(firstNumber, secondNumber) {
    result = firstNumber * secondNumber;
    prompt(`${firstNumber} * ${secondNumber} = ${result}`)
}

function division(firstNumber, secondNumber) {
    result = firstNumber / secondNumber;
    prompt(`${firstNumber} / ${secondNumber} = ${result}`)
}

function realDivision(firstNumber, secondNumber) {
    result = firstNumber % secondNumber;
    prompt(`${firstNumber} % ${secondNumber} = ${result}`)
}

function pow(firstNumber, secondNumber) {
    result = firstNumber ** secondNumber;
    prompt(`${firstNumber} ** ${secondNumber} = ${result}`)
}

if (operation == 1) {
    sum();
} else if (operation == 2) {
    subtraction()
} else if (operation == 3) {
    multiplication()
} else if (operation == 4) {
    division()
} else if (operation == 5) {
    realDivision()
} else {
    potential()
}
calculator();