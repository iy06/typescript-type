abstract class Person {
  static species = 'Homo sapiens';
  static isAdult (age: number) {
    if (age > 17) return true;
    return false;
  };
  // プロパティ(※プロパティはconstractorの引数に記載することで省略できます。)
  // name: string;
  // public age: number;
  // コンストラクター(初期化)
  // readonlyは参照するだけを指定するもの、ただconstructor関数の中では、何回でも書き換えれます。
  // protectedは継承先であれば参照することができるオプション。
  constructor(public readonly name: string, protected age: number) {
    // this.name = initName;
    // this.age = initAge;
  };
  // メソッド
  incrementAge() {
    this.age += 1
  };
  greething(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    this.explainJob();
  };
  abstract explainJob(): void;
};
//クラス呼び出し、インスタンス
// const person = new Person('Quill', 26);
// インスタンスメソッド
// person.incrementAge();
// person.greething();
// オブジェクトリテラル
// const anotherQuill = {
//   name: 'anotherQuill',
//   greething: quill.greething
// }

// anotherQuill.greething();
// thisは呼び出し時に決まる。※アロー関数の場合は宣言時に決まる。

class Teacher extends Person {
  explainJob() {
    console.log(`I am teacher and I teach ${this.subject}.`)
  }
  // ゲッター
  get subject () {
    if (!this._subject) {
      throw new Error('There is no subject.');
    };
    return this._subject;
  };
  // セッター
  set subject (value) {
    if (!this._subject) {
      throw new Error('There is no subject.');
    };
    this._subject = value;
  };
  constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  };
  greething() {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}.`);
  };
};

const teacher = new Teacher('Quill', 38, 'Math');
// ゲッター
// teacher.subject;
// セッター
// teacher.subject = 'Music';
teacher.greething();
// インスタンスを作らずにクラスをつくるstatic
console.log(Person.species);
console.log(Person.isAdult(32));

console.log(Teacher.species);
console.log(Person.isAdult(32));

// abstractクラスは、インスタンスを生成できない。
// abstractクラスは、継承することを前提に作成するクラスである。
