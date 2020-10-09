"usu strict";

// Array

// 1.Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// Index 기준으로 데이터 저장
// 2.Index position
const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //배열의 맨처음 찾을때 0
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]); //배열의 맨뒤를 찾을때는 배열의 총 길이에서 -1을 하면 마지막값이 나온다.

// 3.Looping over an array
//print all fruits
console.clear();
// a for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for of
/*for (let fruit of furuits) {
  console.log(fruit);
}*/

// forEach
/* 
(1). fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index);
});*/
// (2).
fruits.forEach((fruit) => console.log(fruit));

// 4.Addtion, deletion, copy
// push : add an item to the end
fruits.push("strawberry", "peach");
console.log(fruits);
// pop : remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift("Lemon", "oranage");
console.log(fruits);

// shift : remove an item from the benigging
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// note!!! shift, unshift are slower than pop, push
// shift와 unshift는 pop과 push보다 느리다
//splice: remove an item by index position
fruits.push("strawberry", "peach", "Lemon");
console.log(fruits);

fruits.splice(1, 1); //splice(index주소값, index범위[어디까지 지울것인지.])
console.log(fruits);
// 어디까지 지우는지 말하지않으면 지정해준 인덱스부터 모두 지운다.
// (Ex) fruits가 apple,banana,strawberry,peach,lemon이 있는데
// fruits.splice(1);을 하면 apple을 제외한 모두가 사라진다.
// fruits.splice(1, 1); 을하면 banana만 지워진다.
fruits.splice(1, 1, "green apple", "water melon");
console.log(fruits);
// splice(index의 시작값, index범위, [그 뒤론 추가할것을 넣음면 추가가된다.])
// 위에 같이 사용하게 되면 banana자리에 바나나가 빠진뒤 추가가된다.
//  값을 제거하지않고 범위에 0을 넣으면 지우지않고 그자리 다음에 값을 추가할수있다.
// combine two arrays
const fruits2 = ["orange", "pineapple"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
// 원래 배열에 concat 추가 배열 이렇게 사용하면 뒤에 새롭게 내용이 추가된다.

// 5.Searching
// find the index
// indexOf
console.clear();
console.log(fruits);
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("peach"));
console.log(fruits.indexOf("orange"));

// includes
console.log(fruits.includes("Lemon"));
console.log(fruits.includes("orange"));
// indexOf를 이용하면 index주소값이 몇번인지 알려준다. 없을경우 -1이 출력된다.
// includes를 이용하면 해당 배열에 있는지 확인하여 true 또는 false로 알려준다.

// lastIndexOf
console.clear();
fruits.push("apple");
console.log(fruits);
console.log(fruits.indexOf("apple"));
console.log(fruits.lastIndexOf("apple"));
// 배열안에 중복된 값이 있는경우 ~
// indexof를 사용하면 제일 앞에있는 값을 return한다.
// lastIndexof를 사용하면 마지막에 있는 값을 return한다.
console.log("end");
