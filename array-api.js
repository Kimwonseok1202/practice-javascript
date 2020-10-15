// Q1. make a string out of an arry
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join("|");
  console.log(result);
  // join("") 따음표안에 값을 넣으면 구분자가 바뀐다.
  // join은 배열값을 스트링값을로 바꾸는데 사용된다.
}

// Q2. make an array out of a string
{
  const fruits = "apple,banana,cherry,kiwifruit";
  const result = fruits.split(",", 2);
  console.log(result);
  // split("") 따음표안에는 구분자와 RegExp, limit을 넣는다
  // 따음표안에 위에 처럼 ",", 2 를 넣게되면 구분자는 ","로 구분을하고 index값 2까지만 출력이 되기때문에 banana까지만 출력이된다.
  // 구분자를 비우게 되면 배열을 한개로 받아들인다.
}

// Q3.make this array look like this: [5,4,3,2,1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
  //reverse라는 명령이 있는데 배열을 뒤집어서  꺼꾸로 나열한다.
  //명령어 사용할때만 뒤집어지는게 아니고 배열자체에 내용이 뒤집어진다.
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.clear();
  console.log(result);
  console.log(array);
}
// slice는 배열에서 원하는 부분만 가져올수 있다.

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const student = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90 
{
  const result = student.find((student) => student.score === 90 );
    console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = student.filter((student) => student.enrolled);
  console.log(result);
  // filter는 조건을 부여한다.
}

//  Q7. make an array  containing only the student
//     'scores result should be: {45, 80, 90, 66, 88}
{
  const result = student.map((student) =>student.score );
  console.log(result);
  // map은 받은 요소를 대체하게 바꿀수있다.
}

//  Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = student.some((student) => student.score < 50);
  console.log(result);
  // some 한개라도 조건을 만족하면 true을 출력한다.

  const result2 = !student.every((student) => student.score < 50);
  console.log(result2);
  //  every는 모든 요소들이 조건을 만족하면 true를 출력한다.
  // !를 쓰게되면 반대값이 출력된다.

  // 이 문제에서는 some을 쓰는게 좋다. 조건에 따라 맞춰 쓰기
}

//  Q9. compute student's average score
{
  console.clear();
  const result = student.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / student.length);
  // reduce는 배열의 값을 누적할때 사용
}

//  Q.10 make a string containing all the scores
//  result should be : {'45, 80, 90, 66, 88}
{
  console.clear();
  const result = student.map(student => student.score)
  .filter(score => score >= 50)
  .join();
  console.log(result);
}
// 묶어서 사용이 가능하다.

//  Bonus! do Q10 sorted in ascending order
// result should be : {45, 66, 80, 88 ,90}
{
  const result =student.map(stduent => stduent.score)
  .sort((a, b)=> a - b )
  .join();
  console.log(result);
}

console.log('array-api end');