// 11. Loops
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

//do wihle
// 조건이 맞는지 보다는 먼저 실행 후 조건을 따진다.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for Loops, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  //지역변수를 사용해도 좋다 let
  console.log(`inline variable for: ${i}`);
}

// Q1. 0~10까지 출력하되. continue를 사용해서 만들기.
for (let o = 0; o << 11; o++) {
  if (o % 2 === 0) {
    console.log(`q1. ${o}`);
  }
}

// Q2. 0~10까지 출력하되. 숫자 8이 나오면 프로그램을 멈추게하기 break사용.
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2.${i}`);
}

console.log("test");
