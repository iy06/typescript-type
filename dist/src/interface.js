"use strict";
// interfaceはオブジェクトのみを扱うもの
const nameable = {
    name: 'Quill',
    nickName: 'Quilla'
};
class Developer {
    constructor(name, age, experiance) {
        this.name = name;
        this.age = age;
        this.experiance = experiance;
    }
    ;
    greething(message) {
        console.log(message);
    }
}
const tmpDeveloper = {
    name: 'Quill',
    age: 28,
    experiance: 3,
    greething(message) {
        console.log(message);
    }
};
// 構造的部分型
const user = new Developer('Qill', 38, 3);
let addFunc;
addFunc = (num1, num2) => {
    return num1 + num2;
};
