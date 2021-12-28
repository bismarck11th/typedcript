{
  // デコレータはクラスが定義された時に実行される
  // function Logger(constructor: Function) {
  //   console.log('ログ出力中...');
  //   console.log(constructor);
  // }

  // デコレータファクトリ
  function Logger(logString: string) {
    return function (constructor: Function) {
      console.log(logString);
      console.log(constructor);
    };
  }

  function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
      const hookEl = document.getElementById(hookId);
      const p = new constructor();
      if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector('h1')!.textContent = p.name;
      }
    };
  }

  // デコレータは作成は上から実行されえる. 実行は下から.
  @Logger('ログ出力中 - Person Class')
  @WithTemplate('<h1>Personオブジェクト</h1>', 'app')
  class Person {
    name = 'Max';

    constructor() {
      console.log('Personオブジェクトを作成中...');
    }
  }

  const pers = new Person();

  function Log(target: any, propertyName: string | symbol) {
    console.log('Propertyデコレータ');
    console.log(target);
    console.log(propertyName);
  }

  function Log2(target: any, name: string, descriptor: PropertyDecorator) {
    console.log('Accessor デコレータ');
    console.log(target);
    console.log(name);
    console.log(descriptor);
  }

  function Log3(
    target: any,
    name: string | symbol,
    descriptor: PropertyDecorator
  ) {
    console.log('Method デコレータ');
    console.log(target);
    console.log(name);
    console.log(descriptor);
  }

  function Log4(target: any, name: string | symbol, position: number) {
    console.log('Parameter デコレータ');
    console.log(target);
    console.log(name);
    console.log(position);
  }

  class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
      if (val > 0) {
        this._price = val;
      } else {
        throw new Error('不正な価格です。');
      }
    }

    constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
      return this._price * (1 + tax);
    }
  }
}
