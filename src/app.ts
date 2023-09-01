class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  // public, private 축약형
  constructor(private readonly id: string, private name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    super(id, "IT");
  }
}

const accounting = new Department("d1", "Accounting");
const IT = new ITDepartment("d2", ["Max"]);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
// accounting.employees[2] = 'Anna';  // private 속성이기 때문에 접근 불가!!

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
