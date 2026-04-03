// In JavaScript, a function is a reusable block of code designed to perform a task.

let greet = "Evening" 

// const greet = "Evening" ---- reinitialization not allowed
console.log(greet)
// reinitialize
greet = "Night"

console.log(greet)

function add(a,b)
{
   return a+b
}

let sum = add(2,3)
console.log("Sum of value A and B = ", sum)

// do not have name => anyonmus function expressions

let sumfoInteger = function (a,b)
{
    return a+b
}

let nsum = sumfoInteger (5,6)
console.log(nsum)
console.log(sumfoInteger(4,8))

//************************************************************ */

let sumofvale = (a,b) => a+b
console.log(sumofvale(2,2))