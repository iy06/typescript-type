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
