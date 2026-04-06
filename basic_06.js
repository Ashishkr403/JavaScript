/* What is object?

Object is the collection of properties

Let suppose you are define a person object
properties: Frist_Name, Last_Name, Gender all these are the properties of that person
*/

let person = {
    firstName: 'Ashish',
    lastName: 'Kumar',
        age : 25,
        gender : 'Male',
        fullName : function()
        {
           console.log(this.firstName + ' ' + this.lastName)
        }
}

console.log(person.fullName())
console.log(person.firstName)
console.log(person['lastName'])
person.firstName = 'Krishna'
console.log(person)
console.log(person.firstName)
person.mobile = 9719329006
console.log(person)
delete person.mobile
console.log(person)

console.log('lastName' in person)

// print all properties of the person object
for (let key in person)
{
    console.log(person[key])
}