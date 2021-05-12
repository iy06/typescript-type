class Person {
  // プロパティ(※プロパティはconstractorの引数に記載することで省略できます。)
  // name: string;
  // public age: number;
  // コンストラクター(初期化)
  constructor(public name: string, private age: number) {
    // this.name = initName;
    // this.age = initAge;
  };
  // メソッド
  incrementAge() {
    this.age += 1
  };
  greething(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
  };
};
//クラス呼び出し、インスタンス
const quill = new Person('Quill', 26);
// インスタンスメソッド
quill.incrementAge();
quill.greething();
// オブジェクトリテラル
// const anotherQuill = {
//   name: 'anotherQuill',
//   greething: quill.greething
// }

// anotherQuill.greething();
// thisは呼び出し時に決まる。※アロー関数の場合は宣言時に決まる。


