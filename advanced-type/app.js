"use strict";
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
    function add(a, b) {
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
}
