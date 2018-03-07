'use strict'
// Create a new interface called Printable
// it should have one method definition called printAllFields
// implement this interface on the Domino, Todo

// for (let domino of dominoes) {
//   domino.printAllFields();
// }
//
// for (let todo of todos) {
//   todo.printAllFields());
// }

interface Printable {
  printAllFields(data: any[]);
}

export { Printable }
