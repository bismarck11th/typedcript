// abstract classはインスタンスを作成不可
abstract class Department {
  // インスタンスからはアクセス不可
  static fiscalYear = 2021;
  // privateだとDepartment class以外からアクセス不可(継承クラスも同等)
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name: name };
  }

  constructor(protected readonly id: string, public name: string) {}

  // abstract - classにもabstractをつける必要あり.
  abstract describe(this: Department): void;

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

  describe() {
    console.log(`IT部門 - ID : ${this.id}`);
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

  describe() {
    console.log(`会計部門 - ID : ${this.id}`);
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

const employee1 = Department.createEmployee('Max');
Department.fiscalYear = 2022;
console.log(employee1, Department.fiscalYear);

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
accounting.describe();
