type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving with speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")
// );
const userInputElement = document.getElementById(
  "user-input"
) as HTMLInputElement;

const btn = <HTMLButtonElement>document.getElementById("btn");
btn.innerText = "Click Me";
btn.addEventListener("click", () => {
  userInputElement.value = "Hi there!";
});

interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start ' }
  [prop: string]: string;
}

type Combinable = string | number;

function addFn(a: number, b: number): number;
function addFn(a: string, b: string): string;
function addFn(a: string, b: number): string;
function addFn(a: number, b: string): string;
function addFn(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addFn("Max", " Schwarz");
result.split(" ");
