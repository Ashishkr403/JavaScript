// Inheritance? inheritance is a concept in object oriented programming where one class can inherit properties and methods from another class. In JavaScript, we can achieve inheritance using prototypes.
//inheritance is the main pillar of object oriented programming. It allows us to create a new class that is a modified version of an existing class. The new class is called the child class or subclass

const Person = require('./basic_07.js')

class Pet extends Person            
{

    get loction()
    {
        return 'Bluecross'
    }

    constructor(firstName, lastName, rollNo)
    {
        super(firstName, lastName)   // super is used to call the constructor of the parent class
        this.age = this.age
    }
}

let pet = new Pet("sam", "san", 25)//.fullname()
console.log(pet)
console.log(pet.loction)