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

  // interfaceでも同等の実装が可能
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

  function add(a: Combinable, b: Combinable) {
    // プリミティブ型の型ガード
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
    }
    return a + b;
  }

  type UnknownEmployee = Employee1 | Admin1;

  function printEmployeeInformation(emp: UnknownEmployee) {
    console.log(emp.name);
    // object型の型ガード
    if ('privileges' in emp) {
      console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
      console.log('Privileges: ' + emp.startDate);
    }
  }

  class Car {
    drive() {
      console.log('運転中...');
    }
  }

  class Truck {
    drive() {
      console.log('トラックを運転中...');
    }

    loadCargo(amount: number) {
      console.log('荷物を乗せています...' + amount);
    }
  }

  type Vehicle = Car | Truck;

  const v1 = new Car();
  const v2 = new Truck();

  function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    // if ('loadCargo' in vehicle) {
    //   vehicle.loadCargo(1000)
    // }

    // classの型ガード
    if (vehicle instanceof Truck) {
      vehicle.loadCargo(1000);
    }
  }

  interface Bird {
    type: 'bird'; // リテラル型
    flyingSpeed: number;
  }

  interface Horse {
    type: 'horse';
    runningSpeed: number;
  }

  type Animal = Bird | Horse;

  function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
      case 'bird':
        speed = animal.flyingSpeed;
        break;
      case 'horse':
        speed = animal.runningSpeed;
    }
    console.log('移動速度: ' + speed);
  }

  moveAnimal({ type: 'bird', flyingSpeed: 10 });
}
