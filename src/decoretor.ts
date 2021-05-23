// デコレーターはインスタンスの生成時に実行される。
function Logging(constructor: Function) {
  console.log("Logging...");
}

// デコレーターで簡易的なフレームワークを作る
function Component(template: string, selector: string) {
  return function(constructor: { new(...args: any[]): {name: string} }) {
    const mountedElement = document.querySelector(selector);
    const userInstance = new constructor();

    if (mountedElement) {
      mountedElement.innerHTML = template;
      mountedElement.querySelector("h1")!.textContent = userInstance.name;
    }
  }
}

@Component("<h1>{{ name }}</h1>", "#app")
@Logging
class User {
  name = "Quill";
  constructor() {
    console.log("User was created!");
  }
}

const user1 = new User();

//デコレーターで引数を取る
// function LogginsUser(message: string) {
//   return function(constructor: Function) {
//     console.log(message);
//     console.log(constructor);
//   }
// }

// @LogginsUser("Logging User...")
// class UserLog {
//   name = "Quill";
//   constructor() {
//     console.log("User was created!");
//   }
// }



