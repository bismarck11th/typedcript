// abstract class と interface の違いは, 実装を持つかどうか.
// interfaceは実装を持たない
{
  // type AddFn = (a: number, b: number) => number;
  interface AddFn {
    (a: number, b: number): number;
  }
  let add: AddFn;

  add = (n1: number, n2: number) => {
    return n1 + n2;
  };
  interface Named {
    // public private はinterfaceでは使えない
    // readonly 初期化のみ
    readonly name?: string;
    outputName?: string;
  }

  interface Greetable {
    greet(phrase: string): void;
  }
  // interface Greetable extends Named {
  //   greet(phrase: string): void;
  // }

  class Person implements Greetable, Named {
    name?: string;
    age = 30;

    constructor(n?: string) {
      if (n) {
        this.name = n;
      }
    }

    greet(phrase: string): void {
      if (this.name) {
        console.log(phrase + ' ' + this.name);
      } else {
        console.log('Hi!');
      }
    }
  }

  let user1: Greetable;

  user1 = new Person();
  user1.greet('Hello');
}
