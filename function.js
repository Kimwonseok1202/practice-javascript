// 1.Function(함수)

// Function의 구성
// function name(param1, param2) {body... return; }
// 1개의 함수는 1가지 일만하게 설정해야된다.
// function은 object이다.
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello!");
log(1234);

// 2.Parameters
// premitive 메모리에 value가 그대로 저장돼어 있기때문에 value가 저장되고
// object 메모리에 레퍼런스가 저장이 돼서 레퍼런스가 전달됨

function changeName(obj) {
  obj.name = "coder";
  obj.age = "20";
}
const ed = { name: "kim", age: "15" };
changeName(ed);
console.log(ed);

// 3.Default parameters (added in ES6)
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage("hi!", "hi@");

// 4.Rest parameters (added in ES6)
// ...은 Rest parameters로 배열형태로 전달된다.
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
console.log("a", "b", "c");
