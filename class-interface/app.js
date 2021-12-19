"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // privateだとDepartment class以外からアクセス不可(継承クラスも同等)
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
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
