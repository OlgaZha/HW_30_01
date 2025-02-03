//2
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}`)
    }
}

let person = new Person('John');
person.greet()
let newPerson = new Person('Pete');
newPerson.greet()

class Student extends Person {
    grade() {
        super.greet()
    }

    get age() {
        return this._age
    }
    set age(_age) {
        if(_age < 0) {
            console.log("The age should be more that 0")
        }
        this._age = value;
    }
}
let student = new Student('Brad');
student.age = -3
console.log(student.age)

//3
class Animal {
    speak() {
        console.log("This animal makes a sound")
    }
    constructor() {
        this.speak();
    }
}

class Dog extends Animal {
    speak() {
        super.speak()
        console.log('Hau hau')
    }
}
new Dog();

//4
let adultsPeople = [{name:'Pete', age:5}, {name:'John', age:25}]
function areAllAdults(people) {
    console.log(people.every(person => person.age >= 18) )
}
areAllAdults(adultsPeople)


//5
// let num = [5, 17, 26, 1, 80];
// function findMax(numbers) {
//     numbers.reduce((accum, current, index, array) => {
      
//     }
//     , {})}

// findMax(num)