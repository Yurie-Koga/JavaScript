"use strict";

// --- Section1: Let, Var ---
// var: function, let: block
// use let rather than var
function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); // can access

  for (let j = 10; j < 15; j++) {
    console.log(j);
  }
  //   console.log(i);   // can't access
}
sayHello();
// --- Section1: Let, Var ---

// --- Section2: Objects ---
const person = {
  name: "Mosh",
  walk: function() {},
  talk() {}
};

person.talk();
person.name = "";

// if person's member is fixed
person["name"] = "John";

// if person's member is not fixed
const targetMember = "name";
person[targetMember] = "Mark";
// --- Section2: Objects ---

// --- Section3: This ---
// default: window (global) object
// use in object: its object
const personThis = {
  name: "Mosh",
  walk() {
    console.log(this);
  }
};
personThis.walk(); // return object

const walk = personThis.walk; // return object
console.log(walk);
walk(); // return window object because not personThis's object --> 'use strict' --> 'undefined'
// --- Section3: This ---

// --- Section4: Binding This ---
// how to fix 'undifined' and call personThis's reference
const walkB = personThis.walk.bind(personThis);
walk(); // still 'undifeined'
walkB(); // return personThis object
// --- Section4: Binding This ---

// --- Section5: Arrow Function ---
// change to Arrow Function: Old and New are same
const squareOld = function(number) {
  return number * number;
};

// number goes to number * number
const squareNew = number => number * number;

console.log(squareNew(5));

// another changing example
// note: isActive default is true. so no need to put "job.isActive = true"
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];
// change to Arrow Function
const activeJobs = jobs.filter(function(job) {
  return job.isActive;
});
// filter jobs where job is active
const activeJobsNew = jobs.filter(job => job.isActive);
console.log(activeJobsNew);
// --- Section5: Arrow Function ---

// --- Section6: Arrow Function and This ---
const personArr = {
  talk() {
    console.log("this", this);
  }
};
personArr.talk(); // retrun personArr's object

const personArrTimeOut = {
  talk() {
    setTimeout(function() {
      console.log("this", this); // inside callback function, this has no reference
    }, 1000);
  }
};
personArrTimeOut.talk(); // retrun window object

const personArrTimeOutNew = {
  talk() {
    var self = this;
    // once you bind this by keyword('self'), don't use Arrorw
    // bad example: setTimeout(() => console.log("self", self);}, 1000);
    setTimeout(function() {
      console.log("self", self); // bind this with inside callback function
    }, 1000);
  },
  talkArr() {
    setTimeout(() => {
      console.log("this", this); // if you use Arrow, no need to bind. just use this
    }, 1000);
  }
};
personArrTimeOutNew.talk(); // retrun personArrTimeOutNew object
personArrTimeOutNew.talkArr(); // return personArrTimeOutNew object
// --- Section6: Arrow Function and This ---

// --- Section7: Array.map() ---
const colors = ["red", "green", "blue"];
const items = colors.map(color => "<li>" + color + "<li>");
// use template literals
const items2 = colors.map(color => `<li>${color}<li>`);
console.log(items2);
// --- Section7: Array.map() ---

// --- Section8: Object Destructuring (分割代入) ---
const address = {
  street: "",
  city: "",
  country: ""
};

// ordinal style: use 'address' lots
const street = address.street;
const city = address.city;
const country = address.country;
// same as below 3 lines
const { street1, city1, country1 } = address;
// --- Section8: Object Destructuring (分割代入) ---

// --- Section9: Spread Operater ---
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];
const combined1 = arrA.concat(arrB);
console.log(combined1);
const combined2 = [...arrA, ...arrB]; // return same above
console.log(combined2);

const clone = [...arrA]; // copy
console.log(clone);

// can copy and add objects
const first = { name: "Mosh" };
const second = { job: "Instructor" };
const combined3 = { ...first, ...second, location: "Australia" };
console.log(combined3);
// --- Section9: Spread Operater ---

// --- Section10: Class ---

// move to outside files: modules
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     console.log("walk");
//   }
// }

// class Teacher extends Person {
//   constructor(name, degree) {
//     super(name);
//     this.degree = degree;
//   }
//   teach() {
//     console.log("teach");
//   }
// }

import { Teacher } from "./teacher";

const teacher = new Teacher("Mosh", "MSc");
teacher.teach();
// --- Section10: Class ---
