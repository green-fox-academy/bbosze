'use strict'

class Person {
  name: string;
  age: number;
  gender: string;


  constructor(name:string, age:number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }



  introduce() {
    console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' year old '  + this.gender + '.');
  }

  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
}

let person1 = new Person('Jane Doe', 30, 'female');

person1.introduce();

class Student {
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;

  constructor(name:string, age:number, gender: string, prevOrg: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = prevOrg
    this.skippedDays = 0;
  }

  introduce() {
    console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' year old '  + this.gender + ' from ' + this.previousOrganization + ' who skipped ' + this.skippedDays + ' days from the course already.');
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

student1.skipDays(10);
student1.introduce();

class Mentor {
  name: string;
  age: number;
  gender: string;
  level: string


  constructor(name:string, age:number, gender: string, level: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }

  introduce() {
    console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' year old '  + this.gender + ' ' + this.level + ' level mentor.');
  }

  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.');
  }
}

let mentor1 = new Mentor('Jane Doe', 30, 'female', 'intermediate');
mentor1.introduce();

class Sponsor {
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;


  constructor(name:string, age:number, gender: string, company: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company
    this.hiredStudents = 0;
  }

  introduce() {
    console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' year old '  + this.gender + ' who represents ' + this.company + ' and hired ' + this.hiredStudents + ' students so far.');
  }

  getGoal() {
    console.log('My goal is: Hire brilliant junior software developers.');
  }

  hire(numberOfStudents) {
    this.hiredStudents += numberOfStudents;
    return this.hiredStudents;
  }

}

let sponsor1 = new Sponsor('Jane Doe', 30, 'female', 'Google');
sponsor1.hire(20);
sponsor1.introduce();
