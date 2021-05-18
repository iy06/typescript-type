// interfaceはオブジェクトのみを扱うもの

interface Nameble {
  name?: string;
  nickName: string;
}

const nameable: Nameble = {
  name: 'Quill',
  nickName: 'Quilla'
}
interface Human extends Nameble {
  age: number;
  // メソッドのみ適用できる書き方
  greething(message: string): void;
  // greething: (message: string) => void;
}

class Developer implements Human {
  constructor(public name: string, public age: number, public experiance: number) {};
  greething(message: string) {
    console.log(message);
  }
}

const tmpDeveloper = {
  name: 'Quill',
  age: 28,
  experiance: 3,
  greething(message: string) {
    console.log(message);
  }
}

// 構造的部分型
const user: Human = new Developer('Qill', 38, 3);
// interfaceで関数の型をつける
interface addFunc {
  (num1: number, num2: number): number;
}

let addFunc: addFunc;

addFunc = (num1: number, num2: number): number => {
  return num1 + num2;
}