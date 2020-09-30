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
// 6장 8:24
console.log("ttt");
