// 1.Function(함수)

// Function의 구성
// function name(param1, param2) {body... return; }
// 1개의 함수는 1가지 일만하게 설정해야된다.
// function은 object 일종이다.
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
  for (const arg of args) {
    console.log(arg);
    // arg of args 를 하게 되면 뒤에있는 args가 앞에 arg에다가 차례차례 출력하게 한다.
  }
}
printAll("a", "b", "c");

// 5.Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
// 안에서는 출력이가능한데 밖으로 가지고 나오면 출력을 할수없다.
let globalMessage = "global"; //global variable
function printMessage() {
  let message = "hello";
  console.log(message); //local variable
  console.log(globalMessage);
}
printMessage();

// 6.Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit

// bad
function upgradeUser(uesr) {
  if (uesr.point > 10) {
    // long upgrade logic...
    // 블록 안에서 logic을 많이 사용허면 가독성이 떨어진다.
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    // 조건이 맞지 않을때는 빠르게 return을 사용해서 함수를 종료 하고
    // 조건이 맞을때만 필요한 logic을 실행하게 하는게 좋다.
    return;
  }
  //  long upgrade logic...
}

// 1.Function expression
const print = function (number) {
  //함수에 이름이 없는것을 anonymous function
  console.log("print", number); //function을 할당함과 동시에 Print 변수에 할당
};
// 이름있는 함수는 named function
print(1);
const printAgain = print;
printAgain(2);
const sumAgain = sum;
console.log(sumAgain(1, 3));
// 변수안에 함수를 넣어도 실행이 가능하다.

//Function expression과 Function declaration의 차이
// Function expression의 가장큰 차이점은 위에 예제처럼 할당된 다음부터 호출이 가능하다.
// Function declaration은 hoisted가 되어있어 함수 호출 이전에 사용이 가능하다
// 예를들어 sum함수가 61번쨰 줄에서 할당이 되었지만 그 위로 올라가서 sum을 사용하게 되어도 결과값이 나온다.
// 그 이유는 자바스크립트 엔진이 선언한것을 제일위로 올려주기 떄문이다. (나중에 심화과정에서 자세히.)

// 2.Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () {
  console.log("Yes!");
};
const printNo = function () {
  console.log("No!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// tip: Arrow function
// 무조건 anonymous function일때 사용
const simplePrint = function () {
  console.log("simpleFunction");
};

const SimplePrint = () => console.log("SimpleFunction!");
// 중간에 =>가 있기에 Arrow function이다. 간편하게 사용할수있다.
simplePrint();
SimplePrint();

const add = function (a, b) {
  return a + b;
};

const Add = (A, B) => A + B;
// Arrow function을 사용하면 이만큼이나 간편해진다.

const simpleadd = (a, b) => {
  // 많은 내용을 넣어야 할 경우 이런식으로 사용한다.
  return a + b; //대신 이런식으로 return을 무조건 해줘야한다.
};

// tip : IIFE: Immediately Invoked Function Expression
function hello() {
  console.log("IIFE");
}
hello();
// 함수를 출력할려면 아래 내용을 써줘야 하지만 자체적으로 괄호를 넣어주게 되면 바로 출력이 된다.
(function Hello() {
  console.log("iife");
})();

// Function Quiz
// function calculate (command, a, b)
// command: (add, subtract, divide, multiply, remainder)

function calculate(command, a, b) {
  switch (command) {
    case "add":
      console.log(`${a}+${b}`);
      break;
    case "subtract":
      console.log(`${a}-${b}`);
      break;
    default:
      console.log(0);
      break;
  }
}
