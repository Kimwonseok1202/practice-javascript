"use strict";
// class (template, declare once, no data in)
// 붕어빵 틀이라고 생각하면 된다.
// class에다가 인스턴스를 넣어서 만들면 object이다.
// object는 데이터를 올릴수있다.
// 클래스는 그저 틀일뿐 object는 찍어내는 결과물.
// 붕어빵틀 -> class 붕어빵 -> object ->
// 팥을 넣어서 찍으면 팥붕어빵이고 슈크림을 넣으면 슈크림붕어빵인 마냥.

// 1. Class declarations
class Person {
  // constructor 생성자
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

const wonseok = new Person("wonseok", 26);
console.log(wonseok.name);
console.log(wonseok.age);
wonseok.speak();
// 2.Getter and setters
class User {
  constructor(firsName, lastName, age) {
    this.firsName = firsName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  //get은 그대로를 출력 , set은 받아들인것을 출력
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3.Fields (public, private)
class Experiment {
  publicField = 2;
  #privateField = 0;
  //publicField는 밖에서도 보이고 privateField는 안에서만 보인다.
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
// 출력값을 보게 도면 pubicField는 밖에서도 보이기 때문에 값이 출력된다.
// 하지만 privateField는 안에서만 보이기땜ㄴ에 undefined가 출력된다.
//  추가된지 얼마 안돼서 잘 사용되지는 않는다.

// 4.Static properties and methods
// 잘 사용하지 않는다. 있는지만 알면 좋다.

//5.상속과 다양성
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log("세모");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6.class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
// 왼쪽이 오른쪽의 인스턴스인지 확인하는것
console.log("end");
