'use strict'

class Person {
  name: string;
  age: number;
  gender: string;


  constructor(name:string = 'Jane Doe', age:number = 30, gender: string = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    }

  introduce() {
    console.log(`Hi, I\'m ' + ${this.name}, a ${this.age} year old ${this.gender}.`);
  }

  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
}

class Student extends Person {
  previousOrganization: string = 'The School of Life';
  skippedDays: number;

  constructor(name?:string, age?:number, gender?: string, prevOrg?: string) {
    super(name, age, gender);
    if (prevOrg !== undefined) {
       this.previousOrganization = prevOrg;
    }
    this.skippedDays = 0;
  }

  introduce() {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already`);
  }

  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }

  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
    return this.skippedDays;
  }
}

let student1 = new Student('Jane Doe', 30, 'female', 'The School of Life');

class Mentor extends Person {
  level: string = 'intermediate'

  constructor(name?:string, age?:number, gender?: string, level?: string) {
    super(name, age, gender);
    if (level !== undefined) {
       this.level = level;
    }
  }

  introduce() {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} ${this.level} level mentor.`);
  }

  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.');
  }
}

class Sponsor extends Person {
  company: string = 'Google';
  hiredStudents: number;

  constructor(name?:string, age?:number, gender?: string, company?: string) {
  super(name, age, gender);
  if (company !== undefined) {
       this.company = company;
    }
  this.hiredStudents = 0;
  }

  introduce() {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  getGoal() {
    console.log('My goal is: Hire brilliant junior software developers.');
  }

  hire() {
    this.hiredStudents ++
    return this.hiredStudents;
  }
}

class Cohort {
  name: string
  students: Student[] = [];
  mentors: Mentor[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addStudent(studentName) {
    this.students.push(studentName)
  }
  addMentor(mentorName) {
    this.mentors.push(mentorName)
  }

  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)
  }

}



let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
people.push(sponsor);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);
student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) { // what is this between the brackets?
  person.introduce();
  person.getGoal();
}


let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();
