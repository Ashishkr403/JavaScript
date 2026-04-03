/* What is object?

Object is the collection of properties

Let suppose you are define a person object
properties: Frist_Name, Last_Name, Gender all these are the properties of that person
*/

let person = {
    firstName: 'Ashish',
    lastName: 'Kumar'
}

console.log(person.lastName)
console.log(person['lastName'])
person.firstName = 'Krishna'
console.log(person)
console.log(person.firstName)
person.mobile = 9719329006
console.log(person)
delete person.mobile
console.log(person)