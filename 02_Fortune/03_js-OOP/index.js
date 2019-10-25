// Encapsulation (要約)
//  - Reduce complexity + increase reusability
// Abstraction (抽象化)
//  - Reduce complexity + isolate impact of changes
// Inheritance (継承)
//  - Eliminate redundant code
// Polymorphism (多様性): Poly(Many) Morph(Form)
//  - Refactor ugly switch/case statements
//  - 処理を統合するけど、インスタンス別に処理分けが可能

// -- Section1: Creating Objects -- St
// circle's members are below
// radius (半径), location: Properties
// draw: Method
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log("draw");
  }
};
circle.draw();
// -- Section1: Creating Objects -- Ed

// -- Section2: Factories -- St
// Factory Function: use Parametor for Property, "return" is necessary
function createCircle(radius) {
  // set radius (Parametor) to radius (Property): "radius = radius;" --> "radius;"
  return {
    radius,
    draw: function() {
      console.log("draw2");
    }
  };
}
const circle2 = createCircle(1);
circle2.draw();
// -- Section2: Factories -- Ed

// -- Section3: Constructors -- St
// Constructor Function: use Parametor for Property, "this" and "new" are necessary
function createCircle2(radius) {
  // "this" is reference (参照)
  this.radius = radius;
  this.draw = function() {
    console.log("draw3");
  };
}
const circle3 = new createCircle2(1);
circle3.draw();
// -- Section3: Constructors -- Ed

// -- Section4: Constructor Property -- St
new String();
new Boolean();
new Number();
// -- Section4: Constructor Property -- Ed

// -- Section5: Functions are Objects -- St
const createCircle3 = new Function(
  "radius",
  `
    this.radius = radius;
    this.draw = function() {
        console.log('draw3');
    }
`
);

const realCirclce = new createCircle3(2); // on the conosle, return Circle Object
// -- Section5: Functions are Objects -- Ed

// -- Section6: Value vs Reference Types -- St
// Primitive is copied by their value
let x = 10;
let y = x; // value is stored each box
x = 20;
console.log("x=" + x, "y=" + y); // return: x = 20, y = 10

// Object is copied by their reference
let w = { value: 15 };
let z = w; // w is value property, so z is also get w's property
w.value = 25;
console.log("w=" + w.value, "z=" + z.value); // return: w = 25, z = 25

// Primitive
let numberP = 10;
function increaseP(number) {
  number++;
}
increaseP(numberP);
console.log(numberP); // return: 10

// Object
let numberO = { value: 10 };
function increaseO(number) {
  number.value++;
}
increaseO(numberO);
console.log(numberO);
// -- Section6: Value vs Reference Types -- Ed

// -- Section7: Adding or Removing Properties -- St
// circle3 return: draw, radius

// Adding
circle3.location = { x: 1 }; // circle3 return: draw, radius, location <-- Property can be added
circle3["location"] = { x: 2 }; // Bracket Notation

// Removing
delete circle3["location"]; // circle3 return: draw, radius
// -- Section7: Adding or Removing Properties -- Ed

// -- Section8: Enumerating (列挙) Properties -- St
// reach to Objects
for (let key in circle3) {
  //if (tyepof circle3[key] !== 'function')   // doesn't work. should be return only [radius] bcz it's not function
  console.log(key, circle3[key]);
}

// get all Objects
const keys = Object.keys(circle3);
console.log(keys);

// reach specific Object
if ("radius" in circle3) console.log("Circle has a radius.");
// -- Section8: Enumerating (列挙) Properties -- Ed

// -- Section9: Abstraction -- St
// don't show detail: "defaultLocation" & "compute0ptimumLocation" are detail
function createCircleA(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };
  this.compute0ptimumLocation = function() {
    // ...
  };
  this.draw = function() {
    this.compute0ptimumLocation();
    console.log("drawA");
  };
}
const circleA = new createCircleA(10);
circleA.draw();
// -- Section9: Abstraction -- Ed

// -- Section10: Private Properties and Methods -- St
function A() {
  let intA = 0; // Private Valiable
  let intB = { x: 0, y: 0 }; // Private Property
  let fun = function() {
    // ...                  // Private Method
  };
}
// -- Section10: Private Properties and Methods -- Ed

// -- Section11: Getter and Setter -- St
function createCircleB(radius) {
  this.radius = radius;
  //this.defaultLocation = { x: 0, y: 0 };
  let defaultLocation = { x: 0, y: 0 }; // Private

  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  Object.defineProperty(this, "", {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      defaultLocation = value;
    }
  });
}
const circleB = new createCircleB(20); // circleB return: get/set
// 1. when "defaultLocation" is Private, can't be used outsid function
//      NG: console.log(circleB.defaultLocation);
// 2. can call "getDefaultLocation" directly, but not good
//      BAD: console.log(circleB.getDefaultLocation());
// 3. use "Object.defineProperty" and get/set, so use "defaultLocation" directly
console.log(circleB.defaultLocation);
// -- Section11: Getter and Setter -- Ed

// -- Section12: Exercise -- St
function Stopwatch() {
  let stTime,
    edTime,
    running,
    duration = 0;

  this.start = function() {
    if (running) throw new Error("Stopwatch has already started.");

    running = true;
    stTime = new Date();
  };

  this.stop = function() {
    if (!running) throw new Error("Stopwatch is not runnning");

    running = false;
    edTime = new Date();
    const sec = (edTime.getTime() - stTime.getTime()) / 1000;
    duration += sec;
  };

  this.reset = function() {
    stTime = null;
    edTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
    // get: function() { return duration; }     // can write one row
    //, set: function() {

    // }    // no need setter
  });
}
// -- Section12: Exercise -- Ed

// ---- JS for React Developer ---- St
// -- 1. Arrow Function -- St
const square = function(number) {
  return number * number;
};
// same function as above
// 1. eliminate "function"
// 2. Parapeter=0: "()", 1: no "()"", 2~: "(x, y)"
// 3. eliminate "return"
// 4. connect by "=>"
const squareNew = number => number * number;
// -- 1. Arrow Function -- Ed

// -- 2. What is the Array.map?? -- St
// -- 2. What is the Array.map?? -- St

// -- 3. Object Destructuring -- St
const address = {
  street: "",
  city: "",
  country: ""
};
// these 3 lines can be rewrote below
const st = address.street;
const ct = address.city;
const cnt = address.country;
// here is same as above
const { street: st, city: ct, country: cnt } = address;
// -- 3. Object Destructuring -- Ed

// -- 4. Spread Operator -- St
// concat = combine array
const first = [1, 2, 3];
const second = [4, 5, 6];
// these below 2 lines are same
const combined = first.concat(second);
const combinedSame = [...first, "a", ...second, "b"]; // put 'a'/'b' at the end of array to see the result end

// combine and add value
const item1 = { name: "Yurie" };
const item2 = { job: "Teacher" };
const combined = { ...item1, ...item2, location: "Vancouver" }; // can add value ("location")
console.log(combined); // return: {name: "Yurie", job: "Teacher", location: "Vancouver"}

// clone by spread
const clone = { ...item1 };
// -- 4. Spread Operator -- Ed

// -- 5. Classes and Inheritence -- St
class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}
const person = new Person("Yurie");
person.walk();

// Inheritence = extends
class Teacher extends Person {
  constructor(name, degree) {
    super(name); // use for Inheritence
    this.degree = degree;
  }
  tech() {
    console.log("teach");
  }
}
const teacher = new Teacher("Yurie", "MSc");
// -- 5. Classes and Inheritence -- Ed

// -- 6. Modules -- St
// Separate above two classes to files: person.js/teacher.js
import { Promote } from "./person"; // function can be exported
import { Teacher } from "./teacher"; // after export teacher class, can be imported
// if @teacher.js "export default class Teacher..." -> import Teacher from "./teacher";
//      --no need "{}" to import

import Teacher, { promote } from "./teacher"; // "Teacher" is default & "promote" is also exported

// -- 6. Modules -- Ed

// ---- JS for React Developer ---- Ed
