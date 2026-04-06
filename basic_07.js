// Class 



class Person{

    age = 25
    gender = 'Male'
    get loction()
    {
        return 'India'
    }

    constructor (firstName, lastName)
{
    this.firstName = firstName
    this.lastName = lastName
}

//method

fullname()
{
    console.log(this.firstName + ' ' + this.lastName)
}

}



/* let person = new Person("Ashish", "Kumar")
let person1 = new Person("Rama", "Sharma")
console.log(person)
console.log(person.age)
console.log(person.loction) */

// what is constructor?
// Constructor is a special method that is used to initialize the object of a class. It is called when an object of a class is created. 
// It is used to set the initial values of the properties of the object.

/* console.log(person.fullname())
console.log(person.firstName)
console.log(person.lastName)
console.log(person1.fullname()) */

module.exports = Person