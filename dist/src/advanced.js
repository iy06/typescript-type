"use strict";
var _a, _b, _c;
let yuuki = {
    name: "yuuki",
    role: "frontend",
    folower: 100
};
// タイプガード
// typeof演算子
function toUpperCase(x) {
    if (typeof x === "string") {
        x.toUpperCase();
    }
    return '';
}
function describeProfile(nomadWorker) {
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
    constructor() {
        this.kind = "dog";
    }
    speak() {
        console.log("gowgow");
    }
}
class Bird {
    constructor() {
        this.kind = "bird";
    }
    speak() {
        console.log("tweet");
    }
    fly() {
        console.log("flutter");
    }
}
// function havePet(pet: Pet) {
//   pet.speak();
//   if (pet instanceof Bird) {
//     pet.fly();
//   }
// }
// タグ付きユニオン
function havePet(pet) {
    switch (pet.kind) {
        case "bird":
            pet.fly();
        case "dog":
            pet.speak();
    }
}
// 型アサーションを使って型の上書きを行う JSXを使用する場合はasを使う
const input = document.getElementById("input");
// const input = <HTMLInputElement>document.getElementById("input");
input.value = "initial input value";
// 一行で記述することも出来る()をつける
// (document.getElementById("input") as HTMLInputElement).value = "initial.value";
// !(Non-null assertion operator)nullじゃないと言い切る
const input2 = document.getElementById("input");
let designer = {
    name: "Quill",
};
console.log(designer.name);
//インデックスシグネチャは何でも実行できるけれど、Designerのプロパティの方はすべてstringにする制約がある。
console.log(designer.fafafa);
let downloadedData = {
    id: 1
};
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
// Nullish Coalescing
// 値がundifinedであればno-userを代入する。
const userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : "no-user";
// レストパラメーターに配列やタプルをしていする。
// function advancedFunc(...args: number[]) { };
// advancedFunc(1,1,1);
function advancedFunc(...args) { }
;
advancedFunc(1, "hello", true, 3, 3, 3, 3, 3);
// constアサーション
const milk = "milk";
let dringk = milk;
const array = [10, 20];
// typeofを型の中で使う
const peter = {
    name: "peter",
    age: 38
};
