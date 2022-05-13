// Primitive Types : number, string, boolean , null , symbol, void , undefined
let apples: number = 5;
let speed: string = 'fast'
let hasName: boolean = true
let node: null = null
let nothing: undefined = undefined

// Built in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1, 2, 3]

// Classes 
class Car {

}
let car: Car = new Car()


// Object literal
let point:{x:number,y:number} = {
  x: 10,
  y: 20
}

// Function
const logNumber:(i:number)=> void = (i:number) => {
  console.log(i)
}

/**---------------------------------------------------------------------------
# When to use annotatoins
1. Function that returns the 'any' type
2. When we want a variable to have a type that can't be inferred.
3. When a function returns the 'any' type and we need to clarify the value
-----------------------------------------------------------------------------*/

const json = '{"x":10,"y":20}'
const coordinates: { x: number, y: number } = JSON.parse(json)
console.log(coordinates)


// When we declare a variable on one line and initialize it later
let words = ["green", "red", "blue"];
let foundWord: boolean;

for (let i = 0; i<words.length; i++){
  if (words[i] === "green") {
    foundWord = true;
  }
}

// Variable whose type cannot be inferred correctly
let numbers = [-10,-1,12]
let numberAvobeZero: boolean | number = false

for (let i = 0; i < numbers.length; i++){
  if (numbers[i] > 0) {
    numberAvobeZero = numbers[i]
  }
}