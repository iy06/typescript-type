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