// Primitives types

// Boolean 
var bol = false
console.log(typeof(bol))

// Number
var number = 1
console.log(typeof(number))

// String
var name = 'Nathan'
console.log(typeof(name))

// Declaring variables
// Glocal scope = variable is visible in all code
// Local scope = variable is visible in the class

var variable;
variable = 'Nathan'
console.log(variable)

// Alllows to modify variable value after the instance
let variable = 'Barros'
variable = 'Arthur'
console.log(variable)

// Doesnt allows changes after instacement, must be inicializated
const constant = 'Nathan Barros'
console.log(constant)

function localScope() {
    let internLocalScope = 'Local'
    console.log(internLocalScope)
}
localScope();

// Assignments 
var atribuicao = 'Nathan'
// Comparations
var comparacao = '0' == 0
console.log(comparacao)
// Identical Comparations - compares value AND primitive type
var comparacao = '0' === 0
console.log(comparacao)