/* const person = {
    name: 'James Brown',
    age: 30
} */

/* Module Wrapper function gives access to:
(function (exports, require, module, __filename, __dirname))
 */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }
}

module.exports = Person;