function copy<T>(value: T): T {
  return value;
}

console.log(copy<string>("hello"));
// Genericsは型推論してくれる
console.log(copy({ name: "Quill" }));

// 型パラメータに制約をつける
function copy2<T extends { name: string }>(value: T): T {
  return value;
}

console.log(copy2({ name: "hello" }));

// keyof演算子
function copy3<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  value[key];
  return value;
}

console.log(copy3({ name: "hello", age: 35 }, "name"));

// クラスに対してGenericsを使う
class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
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

// interfaceとtypeにもGenericsをつける
interface TmpDatabase<T> {
  id: T;
  data: T[];
}

// type TmpDatabase<T> = {
//   id: T,
//   data: T[]
// }

const tmpDatabase: TmpDatabase<number> = {
  id: 1,
  data: [1, 2, 3]
}
