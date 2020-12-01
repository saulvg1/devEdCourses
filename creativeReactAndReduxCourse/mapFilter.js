const users = [
  { name: 'ed', age: 25 },
  { name: 'led zeppelin', age: 30 },
  { name: 'Black Sabath', age: 28 },
];
// map functions similar to the spread operator
const modifiedUser = users.map((user) => user);
console.log(modifiedUser);
// filter will return specific information that is used
const filteredUser = users.filter((user) => user.age === 30);
console.log(filteredUser);
