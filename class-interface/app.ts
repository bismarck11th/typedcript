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
    console.log(`Number of employees : ${this.employees.length}`);
    console.log(`Employee List : ${this.employees}`);
  }
}

class ITDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  public get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error('レポートが見つかりません。');
    }
  }

  public set mostRecentReport(text: string) {
    if (!text) {
      throw new Error('正しい値を設定してください。');
    }
    this.addReport(text);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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
accounting.mostRecentReport = '通期会計レポート';
accounting.addReport('Something');
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('John');
accounting.printEmployeeInformation();
