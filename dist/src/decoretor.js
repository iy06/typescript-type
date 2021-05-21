"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// デコレーターはインスタンスの生成時に実行される。
function Logging(constructor) {
    console.log("Logging...");
}
let User = class User {
    constructor() {
        this.name = "Quill";
        console.log("User was created!");
    }
};
User = __decorate([
    Logging
], User);
const user1 = new User();
//デコレーターで引数を取る
function LogginsUser(message) {
    return function (constructor) {
        console.log(message);
        console.log(constructor);
    };
}
let UserLog = class UserLog {
    constructor() {
        this.name = "Quill";
        console.log("User was created!");
    }
};
UserLog = __decorate([
    LogginsUser("Logging User...")
], UserLog);
