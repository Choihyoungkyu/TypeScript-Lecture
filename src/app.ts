function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log("LOGGER FUNCTION");
    // console.log(logString);
    // console.log(constructor);
  };
}

function Damm() {
  console.log("Damm FACTORY");
  return function (_: Function) {
    console.log("Damm FUNCTION");
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function (_: Function) {
    console.log("TEMPLATE FUNCTION");
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

@Damm()
@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);
