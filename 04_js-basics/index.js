// -- Section1: run JS on browser and console -- St
// This is my first JavaScript Code
console.log('Hello World');
// -- Section1: run JS on browser and console -- Ed

// -- Section2: use variable and difine -- St
let name = 'YuriE';
console.log(name);
// -- Section2: use variable and difine -- Ed

// -- Section3: let vs const -- St
// OK: let can be changed
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// NG: const can't be changed
const interestRate2 = 0.3;
// interestRate2 = 1;  // here is error
console.log(interestRate2);
// -- Section3: let vs const -- Ed

// -- Section4: types of let -- St
let name2 = "Yurie";     // String Literal (Literal=直定数; set value at first)
let age = 30;           // Number Literal
let isApproved = false; // Boolean Literal
let firstName;          // Undefined Literal
// let firstName = undefined;  // Also can be wrote like this
let lastName = null;    // Primitive Literal (Primitive=pure, not changed=Clear value)
// -- Section4: types of let -- Ed

// -- Section5: Static vs Dynamic -- St
//string str = "Hello";   // Static can't be changed
let str2 = "Hello";     // Dynamic can be changed
str2 = "Going Next";    // typeof str2 return : string
str2 = 100;             // typeof str2 return : number (type is not matter)
str2 = 50.5;            // typeof str2 return : number (JS is only number, no float)
// -- Section5: Static vs Dynamic -- Ed

// -- Section6: objective variable for related data -- St
let name3 = 'Yurie';
let age3 = 30;
// change to Object Literal
let person = {
    name: 'YURIE',
    age: 50
};    
console.log(person);    // return: {name: "YURIE", age: 50}

// Dot Notetion (ドット表記)
person.name = 'John';
// Bracket Notation (かっこ表記)
person['age'] = 25;
console.log(person);    // check the value changing

// When choose above Notetion?
// 1. basically use Dot Notation: it's shorter than Bracket Notation
// 2. use Bracket Notation when target propaty name will be changed depend on action
//    e.g.:
let userSelection;
userSelection = 'name';     // set target from action
console.log(person[userSelection]);
// -- Section6: objective variable for related data -- Ed

// -- Section7: Arrays -- St
let selectedColors = ['red', 'blue'];
console.log(selectedColors);    // return : ["red", "blue"]
console.log(selectedColors[0]);
selectedColors[1] = 100;        // Array's type of value is Dynamic
selectedColors[2] = 'green';    // Array's size is Dynamic
console.log(selectedColors);    // return : ["red", 100, "green"]
console.log(selectedColors.length);     // typeof selectedColors is object, so they have propaties
// -- Section7: Arrays -- Ed

// -- Section8: Function -- St
// Performing a task
function greet(name, lastName) {
    // name: Parameter (仮引数)
    console.log('Hello ' + name + ' ' + lastName);
}
greet('Tom', 'Smith');    // Call function, 'Tom': Argument (実引数)

// Calculating a value
function square(number){
    return number * number;
}
console.log(square(2));
// -- Section8: Function -- Ed

