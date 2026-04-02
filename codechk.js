var scores1 = [20,35,40,10,05,55]
let totalDoubled = scores1.filter(scores1 => scores1 % 2 == 0)
.map(scores1 => scores1*2)
.reduce((sum, val) => sum + val, 0)

console.log(totalDoubled)

let cfilter =scores1.filter(scores1 => scores1 % 2 == 0)
console.log(cfilter)

let cdoubled = scores1.map(scores1 => scores1*2)
console.log(cdoubled)


let fruits = ["orange", "grape", "kiwi","mango","banana","apple"]
console.log(fruits.sort())

console.log(scores1.sort())
scores1.sort((a,b) => a-b)
console.log(scores1)
// explain the above code in detail.The above code demonstrates the use of array methods in JavaScript, specifically `filter`, `map`, `reduce`, and `sort`. Let's break down each part of the code:
// 1. **Filtering and Mapping**:
//    - `scores1.filter(scores1 => scores1 % 2 == 0)`: This line filters the `scores1` array to include only even numbers. The `filter` method creates a new array with all elements that pass the test implemented by the provided function. In this case, it checks if each element is divisible by 2 (i.e., even).
//    - `.map(scores1 => scores1*2)`: After filtering, the `map` method is used to create a new array where each element is doubled. The `map` method applies a function to each element of the array and returns a new array with the results.
//    - `.reduce((sum, val) => sum + val, 0)`: Finally, the `reduce` method is used to sum up all the elements in the resulting array from the previous steps. The `reduce` method executes a reducer function on each element of the array, resulting in a single output value. Here, it takes a function that adds the current value (`val`) to an accumulator (`sum`), starting with an initial value of `0`.
// 2. **Sorting**:
//    - `fruits.sort()`: This line sorts the `fruits` array in alphabetical order. The `sort` method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings in ascending order.
//    - `scores1.sort()`: This line attempts to sort the `scores1` array. However, since `sort` without a compare function converts numbers to strings and sorts them lexicographically, it may not give the expected numerical order.
//    - `scores1.sort((a,b) => a-b)`: This line correctly sorts the `scores1` array in ascending numerical order by providing a compare function. The compare function takes two arguments (`a` and `b`) and returns a negative value if `a` should come before `b`, a positive value if `a` should come after `b`, or zero if they are equal. In this case, it subtracts `b` from `a`, which effectively sorts the numbers in ascending order.
// Overall, the code demonstrates how to manipulate arrays using various methods to filter, transform, and sort data effectively in JavaScript.                                    