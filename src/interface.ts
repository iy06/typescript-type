// interfaceはオブジェクトのみを扱うもの
interface Human {
  readonly name: string;
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