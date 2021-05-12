"use strict";
class Person {
    // コンストラクター(初期化)
    constructor(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    ;
    // メソッド
    incrementAge() {
        this.age += 1;
    }
    ;
    greething() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    }
    ;
}
;
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
