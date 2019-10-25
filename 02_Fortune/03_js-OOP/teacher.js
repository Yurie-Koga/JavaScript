import { Person } from "./person";

export function promote() {}

// export: make this file be seen from other files
export class Teacher extends Person {
  constructor(name, degree) {
    super(name); // use for Inheritence
    this.degree = degree;
  }
  tech() {
    console.log("teach");
  }
}
