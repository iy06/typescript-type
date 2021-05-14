"use strict";
class Person {
    // プロパティ(※プロパティはconstractorの引数に記載することで省略できます。)
    // name: string;
    // public age: number;
    // コンストラクター(初期化)
    // readonlyは参照するだけを指定するもの、ただconstructor関数の中では、何回でも書き換えれます。
    // protectedは継承先であれば参照することができるオプション。
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.name = initName;
        // this.age = initAge;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    ;
    ;
    // メソッド
    incrementAge() {
        this.age += 1;
    }
    ;
    greething() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }
    ;
}
Person.species = 'Homo sapiens';
;
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
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`I am teacher and I teach ${this.subject}.`);
    }
    // ゲッター
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        ;
        return this._subject;
    }
    ;
    // セッター
    set subject(value) {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        ;
        this._subject = value;
    }
    ;
    ;
    greething() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}.`);
    }
    ;
}
;
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
