"use strict";
function copy(value) {
    return value;
}
console.log(copy("hello"));
// Genericsは型推論してくれる
console.log(copy({ name: "Quill" }));
// 型パラメータに制約をつける
function copy2(value) {
    return value;
}
console.log(copy2({ name: "hello" }));
// keyof演算子
function copy3(value, key) {
    value[key];
    return value;
}
console.log(copy3({ name: "hello", age: 35 }, "name"));
// クラスに対してGenericsを使う
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add("apple");
stringLightDatabase.add("grape");
stringLightDatabase.add("orange");
stringLightDatabase.remove("orange");
stringLightDatabase.get();
// type TmpDatabase<T> = {
//   id: T,
//   data: T[]
// }
const tmpDatabase = {
    id: 1,
    data: [1, 2, 3]
};
let tmp2;
