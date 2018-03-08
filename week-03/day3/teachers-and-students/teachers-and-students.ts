'use strict'

// Teacher Student
// Create Student and Teacher classes
// Student
// learn()
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer()


class Teacher {
  teach(student) {
    student.learn();
  }
  answer() {
    console.log('Hülye kérdés')
  }

}

class Student {
  

  learn() {
    console.log('Ezt megtanultam.')
  }

  question(teacher){
    teacher.answer();
  }
}

let lalibacsi = new Teacher;
let ede = new Student;

console.log(lalibacsi.teach(ede));
console.log(ede.question(lalibacsi));
