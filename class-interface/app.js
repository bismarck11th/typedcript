"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // privateだとDepartment class以外からアクセス不可(継承クラスも同等)
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(`Number of employees : ${this.employees.length}`);
        console.log(`Employee List : ${this.employees}`);
    }
}
// インスタンスからはアクセス不可
Department.fiscalYear = 2021;
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
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error('レポートが見つかりません。');
        }
    }
    set mostRecentReport(text) {
        if (!text) {
            throw new Error('正しい値を設定してください。');
        }
        this.addReport(text);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
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
