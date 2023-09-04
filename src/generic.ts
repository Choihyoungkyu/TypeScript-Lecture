// const names: Array<string> = []; // string[] 이랑 같음

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   console.log(data);
// });

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// interface Lengthy {
//   length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T): [Lengthy, string] {
//   let descriptionText = "Got no value.";
//   if (element.length === 1) {
//     descriptionText = "Got 1 element.";
//   } else if (element.length > 1) {
//     descriptionText = "Got " + element.length + " elements.";
//   }
//   return [element, descriptionText];
// }

// console.log(countAndDescribe("Hi There!")); // ['Hi There!', 'Got 9 elements.']
// console.log(countAndDescribe(["Sports", "Cooking"])); // [Array(2), 'Got 2 elements.']

// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return "Value: " + obj[key];
// }

// console.log(extractAndConvert({ name: "Max" }, "name"));

// class DataStorage<T> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   removeItem(item: T) {
//     this.data.splice(this.data.indexOf(item), 1);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem("Max");
// textStorage.addItem("Manu");
// textStorage.removeItem("Max");
// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>();

// // 제네릭 타입으로 참조 타입을 사용할 경우 문제가 생김 -> 최대한 기본 타입만 사용
// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Max" });
// objStorage.addItem({ name: "Manu" });
// // ...
// objStorage.removeItem({ name: "Max" });
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Anna"];
