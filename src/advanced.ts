interface Engineer {
  name: string;
  role: string;
}

interface Bloger {
  name: string;
  folower: number;
}

// type EnginnerBloger = Engineer & Bloger;
interface EnginnerBloger extends Engineer, Bloger {}

let yuuki: EnginnerBloger = {
  name: "yuuki",
  role: "frontend",
  folower: 100
}
// number & boolean => never型になる
type NumberBoolean = number | boolean
type StringNumber = string | number

//重なっている方が優先される => number
type Mix = NumberBoolean & StringNumber

// タイプガード
// typeof演算子
function toUpperCase(x: string | number) {
  if (typeof x === "string") {
    x.toUpperCase();
  }
  return '';
}
// in演算子
// interface NomadWorker extends Engineer, Bloger {}
type NomadWorker = Engineer | Bloger;

function describeProfile(nomadWorker: NomadWorker) {
  // EnginnerとBlogerはnameが共通しているから
  console.log(nomadWorker.name);

  if ("role" in nomadWorker) {
    console.log(nomadWorker.role);
  }

  if ("folower" in nomadWorker) {
    console.log(nomadWorker.folower);
  }
}
// instanceof
class Dog {
  kind: "dog" = "dog"
  speak() {
    console.log("gowgow");
  }
}

class Bird {
  kind: "bird" = "bird"
  speak() {
    console.log("tweet");
  }
  fly() {
    console.log("flutter");
  }
}

type Pet = Dog | Bird;

// function havePet(pet: Pet) {
//   pet.speak();
//   if (pet instanceof Bird) {
//     pet.fly();
//   }
// }

// タグ付きユニオン
function havePet(pet: Pet) {
  switch(pet.kind) {
    case "bird":
      pet.fly();
    case "dog":
      pet.speak();
  }
}
// 型アサーションを使って型の上書きを行う JSXを使用する場合はasを使う
const input = document.getElementById("input") as HTMLInputElement;
// const input = <HTMLInputElement>document.getElementById("input");
input.value = "initial input value";
// 一行で記述することも出来る()をつける
// (document.getElementById("input") as HTMLInputElement).value = "initial.value";

// !(Non-null assertion operator)nullじゃないと言い切る
const input2 = document.getElementById("input")!;

// インデックスシグネチャ
interface Designer {
  name: string;
  [index: string]: string;
}

let designer: Designer = {
  name: "Quill",
}

console.log(designer.name);
//インデックスシグネチャは何でも実行できるけれど、Designerのプロパティの方はすべてstringにする制約がある。
console.log(designer.fafafa);

// Optional Chaining
interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    }
  }
}

let downloadedData: DownloadedData = {
  id: 1
}

console.log(downloadedData.user?.name?.first);

// Nullish Coalescing
// 値がundifinedであればno-userを代入する。
const userData = downloadedData.user ?? "no-user"

// レストパラメーターに配列やタプルをしていする。
// function advancedFunc(...args: number[]) { };
// advancedFunc(1,1,1);

function advancedFunc(...args: [number, string, boolean, ...number[]]) { };
advancedFunc(1, "hello", true, 3, 3, 3, 3, 3);

// constアサーション
const milk = "milk" as const;
let dringk = milk;

const array = [10, 20] as const;