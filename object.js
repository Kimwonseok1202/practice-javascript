"use strict";
// object
//  {} 로 만드는것을 'object literal'
//  new object(); 클래스를 이용해서 만드는것은 'object constructor'
// object는 key와 value의 나누어진다
// object = {key : value}; 로 이루어진다 (ex)

// 1.Literals and properties
const ellie = { name: "ellie", age: 4 };
console.log(ellie);

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

print(ellie);

// 2.Computed properties
// key는 String 타입이여야한다.
console.log(ellie.name);
console.log(ellie["name"]);

function printValue(obj, key) {
  console.log(obj, key);
}
printValue(ellie, "name");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 2 };
const person3 = makeParson("ellie", 30);
console.log(person3);
function makeParson(name, age) {
  return {
    name,
    age,
  };
}

// 4.Constructor function
function Person(name, age) {
  //this = {};
  this.name = name;
  this.age = age;
  // return this;
}

const person4 = new Person("won", 30);
console.log(person4);

// 5. In operator
console.log("name" in ellie);
// in 안에 존재하는지 확인할때 간단하게 확인하는법
// key안에 없는 값을 확인하면 undefined가 나온다.

// 6.for .. in vs for .. of
// for (key in obj)
console.clear();
for (key in name) {
  console.log(key);
}

// for (value of iterable)
/*const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}*/

/*const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}*/

// 7.Fun cloning
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user);

// old way
/*const user3 = {};
for (key in user) {
  user3[key] = user[key];
}

console.clear();
console.log(user3);*/

const user4 = {};
Object.assign(user4, user);
// const user4 = Object.assign({},user);
console.log(user4);

const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const fruit3 = { color: "black", size: "small" };
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
// fruit1의 값은 뒤에있는 fruit2의 값과 중복되는 key가 있으면 앞에있는거에 덮어씌운다.
// 즉 fruit3이 있고 그 뒤에 size에 관련된 값이 있거나 color에 관련된 값이있으면 그 값이 출력된다.
console.log(mixed.color);
console.log(mixed.size);

console.log("end");
