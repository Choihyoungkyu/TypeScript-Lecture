console.log("Hi...!");
let cnt = 0;

// Click Button
document.getElementById("btn")?.addEventListener("click", () => {
  document.getElementById("number")!.innerText = (++cnt).toString();
});

// spread 연산자를 사용한 더하기 함수
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// 배열 구조 분해 할당
const hobbies = ["sports", "cooking"];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

// 객체 구조 분해 할당
const person = {
  firstName: "choi",
  age: 30,
};
// const { firstName, age } = person;
const { firstName: userName, age } = person;
console.log(person, userName, age);
