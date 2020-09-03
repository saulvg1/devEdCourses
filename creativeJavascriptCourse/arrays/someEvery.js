// SOME AND EVERY
// will return a boolean value , not the value of the reference type
const games = [
  { title: "mass effect", rating: 9.5 },
  { title: "league of legends", rating: 5 },
  { title: "Last of Us", rating: 10 },
  { title: "God of War", rating: 10 },
  { title: "WWE 2K20", rating: 4 },
];
//EVERY
// every value must meet the conditional , then .every will
//return a boolean value
const checkRating = games.every(function (game) {
  return game.rating > 8;
});
console.log(checkRating);
// a great way to check for somthing within the array

//SOME
// only some of the values must meet the conditional,
// some will return a boolean value
const someRating = games.some(function (game) {
  return game.rating > 8;
});
console.log(someRating);
