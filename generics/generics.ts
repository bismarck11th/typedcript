{
  // ジェネリック型とは、他の特定の型と結合された型。柔軟性と同時に型の安全性を提供
  // -----------------------------------------------
  // -------------------- 関数 ----------------------
  // -----------------------------------------------
  const names: Array<string> = []; // === string[]

  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }
  const mergedObj = merge({ name: 'Max' }, { age: 30 });
  mergedObj.name;

  interface Lengthy {
    length: number;
  }
  function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = '値がありません。';
    if (element.length > 0) {
      descriptionText = `値は${element.length}個です。`;
    }
    return [element, descriptionText];
  }

  console.log(countAndDescribe('お疲れ様です！'));

  function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
  ) {
    return 'Value: ' + obj[key];
  }

  // -----------------------------------------------
  // ------------------- クラス ---------------------
  // -----------------------------------------------
  // 引数の柔軟性
  class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
      this.data.push(item);
    }

    removeItem(item: T) {
      // indexOfは要素が見つからない時−１（配列の最後の要素）を返す
      this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
      return [...this.data];
    }
  }

  const textStorage = new DataStorage<string>();
  textStorage.addItem('Data1');
  textStorage.addItem('Data2');
  textStorage.removeItem('Data1');
  console.log(textStorage.getItems());

  const numberStorage = new DataStorage<number>();
}
