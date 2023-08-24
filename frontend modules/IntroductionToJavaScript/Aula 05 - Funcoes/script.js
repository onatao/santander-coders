// Declaring the function
function message() {
    console.log('Hello world!')
    console.log('this message comes through a js function')
}
message();

// Functions with parameters
function saudation(firstParameter, secondParameter) {
    console.log('Olá, ' + firstParameter, secondParameter + '!')   
}
saudation('Nathan', 'Barros') 

// Types of functions

// Declarative function
function fun() {
    console.log('Declarative function message')
}

// Expression functions, optional name
var fun = function funcao() { // with name
    console.log('Expression nominated function message')
}
fun();

var fun = function() { // without name
    console.log('Expression function message')
}
fun();

// Arrow function
var fun = () => { 
    console.log('This message is a arrow function')
}
fun()

/*
 Arithmetic function
 native methods:
 Number() - convert values in number
 Prompt() - register user entry
 Alert() - shows massage
 Template Strings - allows to  use String with expressions
*/