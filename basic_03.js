var marks = Array(6)
var marks = new Array(20,35,40,45,50,55)

var marks = [20,35,40,45,50,55]

marks[2] = 120


console.log(marks[2])
console.log(marks.length)
marks.push(99)
console.log(marks)
console.log(marks.length)
marks.pop(99)
console.log(marks)
console.log(marks.length)
marks.unshift(10)
console.log(marks)
console.log(marks.length)
console.log(marks.indexOf(50))
console.log(marks.includes(22))
console.log(marks.slice(2,5))
submarks = marks.slice(2,5)
console.log(submarks)

var sum = 0
for(let i=0; i<marks.length; i++){

    sum=sum + marks[i]
    
}
console.log(sum)

let total = marks.reduce((sum, marks) => sum + marks, 0)
console.log(total)

var scores = [20,35,40,45,50,55]

var evenScores  = []
for(let i=0; i<scores.length; i++)
{
    if(scores[i]%2==0)
    {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)