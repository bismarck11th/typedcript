class Department {
  // privateだとDepartment class以外からアクセス不可(継承クラスも同等)
  protected employees: string[] = [];

  constructor(readonly id: string, public name: string) {}

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
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }
}

const it = new ITDepartment('D1', ['Max']);
it.describe();
it.addEmployee('Max');
it.addEmployee('John');
it.printEmployeeInformation();

const accounting = new AccountingDepartment('D2', []);
accounting.addReport('Something');
accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('John');
accounting.printEmployeeInformation();
