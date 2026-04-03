// topic String 

let day = "Tuesday "
console.log(day)
console.log(typeof(day))
console.log(day.length)
let subDay = day.slice(0,3)
console.log(subDay)
console.log(day[2])
let spliteDay = day.split("s")
console.log(spliteDay)
console.log(typeof(spliteDay))
console.log(spliteDay[1].length)
console.log(spliteDay[1].trim().length)
console.log("******************************************")

let date = '23'
let nextdate = '27'

//let diff = nextdate - date
let diff = parseInt(nextdate) - parseInt(date)


console.log(diff)
// number to string

diff.toString()
let count = 0
let newQoute = day +"is fun day!"
console.log(newQoute)

let val = newQoute.indexOf("day")
console.log(val)
let val1 = newQoute.indexOf("day",5)
console.log(val1)

/* If text is found → returns position (0,1,2,...)
If text is NOT found → returns -1 
let str = "today is a good day";

console.log(str.indexOf("day"));   // 2 ✅ found
console.log(str.indexOf("night")); // -1 ❌ not found

*/

while(val!== -1)
{
    count++
    val = newQoute.indexOf("day", val+1)
    console.log(val)
}

console.log(count)