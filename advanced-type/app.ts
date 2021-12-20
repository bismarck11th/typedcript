{
  type Admin1 = {
    name: string;
    privileges: string[];
  };

  type Employee1 = {
    name: string;
    startDate: Date;
  };

  // 交差型
  type ElevatedEmployee1 = Admin1 & Employee1;

  const e1: ElevatedEmployee1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
  };

  interface Admin2 {
    name: string;
    privileges: string[];
  }

  interface Employee2 {
    name: string;
    startDate: Date;
  }

  // interfaceでも同じ実装が可能
  interface ElevatedEmployee2 extends Admin2, Employee2 {}

  const e2: ElevatedEmployee1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
  };

  type Combinable = string | number;
  type Numeric = number | boolean;

  // Union型は共通部分が型になる. Object型は結合された型になる.
  type Universal = Combinable & Numeric; // number型
}
