const user = {
  name: 'ed',
  lastName: 'dev',
  age: 20,
};
const { name, lastName, age } = user;

console.log(name);
const numbers = [1, 2, 3, 4, 5];
const [one, two, ...rest] = numbers;
console.log(one, two, rest);
