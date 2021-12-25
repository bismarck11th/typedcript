{
  type Admin1 = {
    name: string;
    privileges: string[];
  };

  type Employee1 = {
    name: string;
    startDate: Date;
  };

  // -----------------------------------------------
  // ------------------ 交差型 ----------------------
  // -----------------------------------------------
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

  function add1(a: Combinable, b: Combinable) {
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

  // -----------------------------------------------
  // -------------- 判別可能なunion型 ----------------
  // -----------------------------------------------
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

  // -----------------------------------------------
  // ------------------ 型キャスト -------------------
  // -----------------------------------------------
  const input1 = <HTMLInputElement>document.getElementById('input1');
  const input2 = document.getElementById('input2')! as HTMLInputElement;

  input1.value = 'こんにちは';
  input2.value = 'こんにちは';

  // nullでないことを保証できない時
  const input3 = document.getElementById('input2');
  if (input3) {
    (input3 as HTMLInputElement).value = 'こんにちは';
  }

  // -----------------------------------------------
  // ---------------- インデックス型 -----------------
  // -----------------------------------------------
  interface ErrorContainer {
    // objectのプロパティの正確な名前はわからない. 幾つのプロパティがあるかもわからない
    [prop: string]: string;
  }

  const errorBag: ErrorContainer = {
    email: '正しいメールアドレスではありません',
    username: 'ユーザー名に記号を含めることはできません'
  };

  // -----------------------------------------------
  // -------------- 関数オーバーロード ----------------
  // -----------------------------------------------
  function add2(a: number, b: number): number;
  function add2(a: string, b: string): string;
  function add2(a: string, b: number): string;
  function add2(a: number, b: string): string;
  function add2(a: Combinable, b: Combinable) {
    // プリミティブ型の型ガード
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
    }
    return a + b;
  }

  const res = add2('Hello ', 'World!');
  res.split(' ');

  // -----------------------------------------------
  // ------------- オプショナルチェイン ---------------
  // -----------------------------------------------
  const fetchedUserData = {
    id: 'ui',
    name: 'user1',
    job: {
      title: 'Developer',
      description: 'TypeScript'
    }
  };

  // console.log(fetchedUserData.job && fetchedUserData.job.title);
  console.log(fetchedUserData?.job?.title);

  // -----------------------------------------------
  // ------------- Null合体演算子 ---------------
  // -----------------------------------------------
  const userInput = null;

  // これだとuserInputが空文字列や0などの場合もDefaultになってしまう
  const storedData1 = userInput || 'Default';

  // null, undefinedのみ判定
  const storedData2 = userInput ?? 'Default';
}
