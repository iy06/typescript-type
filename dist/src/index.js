"use strict";
// typescriptの型レッスン
// boolean型
let hasValue = true;
// number型
let count = 10;
let float = 3.14;
let negative = -1;
// string型
let single = '';
let double = "";
let back = ``;
// 基本的には型推論を使用する
// boolean型
// let hasValue = true;
// number型
// let count = 10;
// let float = 3.14;
// let negative = -1;
// string型
// let single = '';
// let double = "";
// let back = ``;
// オブジェクト型の型定義
// objectや{}はごく一般的なオブジェクトの意味なのであまり使用しない。
const persong = {
    name: {
        first: 'yuuki',
        last: 'tuuki'
    },
    age: 26,
};
// 型推論
// const persong　= {
//   name: {
//     first: 'yuuki',
//     last: 'tuuki'
//   },
//   age: 26,
// }
// 配列の型定義
// 文字列の配列
const fruits = ['apple', 'orange', 'pinapple'];
// タプル型の型定義
const book = ['bussiness', 1500, false];
//型定義したあとにpushできるが、出力の際にしっかり怒られる
// book.push(200);
// console.log(book[3]);
// enum型（列挙型）
// 特定のまとまったグループのみを受け取るようにenumを使用する。
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
// enumは文字列でなく、数値型でもOK
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
// coffee.size = 'aaaaa';
// 上記のような代入を防ぐことが出来ます。
coffee.size = CoffeeSize.SHORT;
// any型
// any型は何でも入る。
let anything = 'hello';
anything = {};
anything = ['hello', 40, true];
let banana = 'banana';
// anyはstring型のbananaにも代入できてしまう。
banana = anything;
// なので極力any型は使わずに記述する。
// Union型
let unionType = 10;
// unionType.toUpperCase();
unionType = 'hello';
// unionType.toUpperCase();
// union型は代入時のタイミングでしっかりと使えないメソッドはエラーを吐いてくれます。
// Union型の配列は（）で囲む必要があります。
let unionTypes = [21, 'hello'];
// リテラル型
// リテラル型は決まった値しか代入でき内容にする型
const apple = 'apple';
let clothSize = 'large';
const close2 = {
    color: 'white',
    size: clothSize
};
// 関数に型をつける
// 関数に型をつける場合はパラメータ（引数）と戻り値になる。
function add(num1, num2) {
    return num1 + num2;
}
// 戻り地はパラメータの後ろに記述する。
add(2, 3);
// 関数の型推論は戻り値のみ！
// パラメータの型定義は記述しなければ、any方になります。
// 戻り値のない関数の型定義時の型定義
function sayHello() {
    console.log('hello');
}
console.log(sayHello());
// 実際にはsayHallo関数は戻り値としてundifinedを返すため、
// function sayHello(): undefined {
//   console.log('hello');
//   return;
// }
// 上記のようにreturnを記述すればundifinedを使えますが、基本的にvoidを使用します。
// undefined型、null型
// nullも代入できる
let undefinedType = undefined;
// undefinedType = null;
// undefinedも代入できる。
let nullType = null;
// nullType = undefined;
// 関数を保持する変数に型をつける。(関数の型注釈)
const anotherAdd = add;
// 関数
// ・宣言時
//   function say (str: string): void {
//     console.log('sayhello');
//   };
//   // アロー関数
//   const say = (str: string): void => {
//     console.log('sayhello');
//   };
// ・関数を保持する変数
//   let sayFunction: (str: string) => void = say;
//   型推論は片方に型定義があればOK
// アロー関数の場合引数が一つであれば()を省略できる。return文を省略できる
// const doubleNumber = (num: number): number => {
//   return num * 2
// };
// const doubleNumber = number => number *2;
// 型注釈を左辺に記述する場合は省略できる。
// const doubleNumber:(num: number) => number = num => num * 2;
// コールバック関数の型定義
function doubleAndHandler(num, cb) {
    const doubelNumber = cb(num * 2);
    return num * 2;
}
;
doubleAndHandler(21, doubleNum => {
    return doubleNum;
});
// unknown型とany型
// any型は何でも代入できる。
let anyVariable;
anyVariable = 'hello';
anyVariable = 21;
anyVariable = true;
// unknown型は使う時だけ厳しくなる。
// 基本anyと同じくなんでも代入できる。
let unknownVariable;
// string型の変数textにanyVariableは代入できるが、unkownVariableは代入できない。
let text;
text = anyVariable;
// text = unknownVariable;
// unknown型を使用する場合は、typeofを使って条件分岐させます。
if (typeof unknownVariable == 'string') {
    text = unknownVariable;
}
// never型
// never型は消して何も返さない型です。
// void型では明示的にあ戻り値がないことを記述していましたが、実際にはundifinedが返ってきていました。
// ただし、never型はundifinedも返さない型になります。
// Typescriptのversion3からリリースされたため非常に新しい型になっています。
