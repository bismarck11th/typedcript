"use strict";
{
    // ジェネリック型とは、他の特定の型と結合された型。柔軟性と同時に型の安全性を提供
    // -----------------------------------------------
    // -------------------- 関数 ----------------------
    // -----------------------------------------------
    const names = []; // === string[]
    function merge(objA, objB) {
        return Object.assign(objA, objB);
    }
    const mergedObj = merge({ name: 'Max' }, { age: 30 });
    mergedObj.name;
    function countAndDescribe(element) {
        let descriptionText = '値がありません。';
        if (element.length > 0) {
            descriptionText = `値は${element.length}個です。`;
        }
        return [element, descriptionText];
    }
    console.log(countAndDescribe('お疲れ様です！'));
    function extractAndConvert(obj, key) {
        return 'Value: ' + obj[key];
    }
    // -----------------------------------------------
    // ------------------- クラス ---------------------
    // -----------------------------------------------
    // 引数の柔軟性
    class DataStorage {
        constructor() {
            this.data = [];
        }
        addItem(item) {
            this.data.push(item);
        }
        removeItem(item) {
            // indexOfは要素が見つからない時−１（配列の最後の要素）を返す
            this.data.splice(this.data.indexOf(item), 1);
        }
        getItems() {
            return [...this.data];
        }
    }
    const textStorage = new DataStorage();
    textStorage.addItem('Data1');
    textStorage.addItem('Data2');
    textStorage.removeItem('Data1');
    console.log(textStorage.getItems());
    const numberStorage = new DataStorage();
}
