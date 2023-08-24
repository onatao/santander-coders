// Declaring one Array

let array = ['Nathan', 21, true]
console.log(array)
console.log(array[0])

// Declaring one array inside another array (wtf)
let arrayOnArray = ['Nathan', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]
console.log(arrayOnArray)

// forEach
array.forEach(function(item, index){console.log(item, index)});

// Push - throws a new value inside the array
array.push('Barros')
console.log(array)

// Pop - Remove arrays last item
array.pop()
console.log()

// Shift - remove arrays first item
array.shift()
console.log()

// Unshift - adds an item at the first index
array.unshift()
console.log()

// Indexof - shows the index 
console.log(array.indexOf(true))

// Splice - Add ou remove an item by the index
array.splice(0, 3)
console.log(array)

