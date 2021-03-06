"use strict";
var _a;
{
    const e1 = {
        name: 'Max',
        privileges: ['create-server'],
        startDate: new Date()
    };
    const e2 = {
        name: 'Max',
        privileges: ['create-server'],
        startDate: new Date()
    };
    // -----------------------------------------------
    // ----------------- 型ガード ---------------------
    // -----------------------------------------------
    function add1(a, b) {
        // プリミティブ型の型ガード
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        return a + b;
    }
    function printEmployeeInformation(emp) {
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
        loadCargo(amount) {
            console.log('荷物を乗せています...' + amount);
        }
    }
    const v1 = new Car();
    const v2 = new Truck();
    function useVehicle(vehicle) {
        vehicle.drive();
        // if ('loadCargo' in vehicle) {
        //   vehicle.loadCargo(1000)
        // }
        // classの型ガード
        if (vehicle instanceof Truck) {
            vehicle.loadCargo(1000);
        }
    }
    function moveAnimal(animal) {
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
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    input1.value = 'こんにちは';
    input2.value = 'こんにちは';
    // nullでないことを保証できない時
    const input3 = document.getElementById('input2');
    if (input3) {
        input3.value = 'こんにちは';
    }
    const errorBag = {
        email: '正しいメールアドレスではありません',
        username: 'ユーザー名に記号を含めることはできません'
    };
    function add2(a, b) {
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
    console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
    // -----------------------------------------------
    // ------------- Null合体演算子 ---------------
    // -----------------------------------------------
    const userInput = null;
    // これだとuserInputが空文字列や0などの場合もDefaultになってしまう
    const storedData1 = userInput || 'Default';
    // null, undefinedのみ判定
    const storedData2 = userInput !== null && userInput !== void 0 ? userInput : 'Default';
}
