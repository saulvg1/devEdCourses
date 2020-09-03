//primative data type

//string
// let name = "ed";
// const name = "ed";

// const names = ["ed", "bubzy", "drake"];
// names[1] = "mac miller";
// names.push("mom");
// const creates a reference type
// you can change the contents of a reference type,
//but you cannot make the reference type === somthing else
//entirly.

let bank = 250;
let newBank = bank;
console.log(bank, newBank);

newBank = 500;

console.log(bank, newBank);
//primitives you can change the value after a variable
// has been declared

const names = ["ed", "bubzy", "drake"];
const newNames = names;

newNames.push("mom");
console.log(newNames);
console.log(names);
// in reference types, when you make changes to a variable referenceing
// a reference type , the reference type variable will also be changed.
// the original variable will also be changed.
