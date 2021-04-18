// typescriptの型レッスン

// boolean型
let hasValue: boolean = true;
// number型
let count: number = 10;
let float: number = 3.14;
let negative: number = -1;
// string型
let single: string = '';
let double: string = "";
let back: string = ``;

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
const persong: {
  name: {
    first: string;
    last: string;
  };
  age: number;
} = {
  name: {
    first: 'yuuki',
    last: 'tuuki'
  },
  age: 26,
}
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
const fruits: string[] = ['apple', 'orange', 'pinapple'];
// タプル型の型定義
const book: [string, number, boolean] = ['bussiness', 1500, false];
//型定義したあとにpushできるが、出力の際にしっかり怒られる
// book.push(200);
// console.log(book[3]);








