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
  const result = array.splice(0, 2);
  console.log(result);
  console.log(array);
}

console.log("array-api test");
