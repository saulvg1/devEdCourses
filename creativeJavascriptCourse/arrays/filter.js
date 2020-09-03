//FILTER
const videos = [
  "pranking my sister, is she okay (gone wrong)",
  "how to javascript",
  "html tutorial",
  "html basics",
  "html",
  "learning the piano",
];

const shortSearch = videos.filter(function (video) {
  return video.length < 10;
});
// here you will return all values that meet the conditional
console.log(shortSearch);

const games = [
  { title: "mass effect", rating: 9.5 },
  { title: "league of legends", rating: 5 },
  { title: "Last of Us", rating: 10 },
  { title: "God of War", rating: 10 },
  { title: "WWE 2K20", rating: 4 },
];

const highRating = games.filter(function (game) {
  return game.rating > 9;
});
console.log(highRating);
// here you can filter out based off of the criteria set in the callback ,
// this is an example where you can use the values of the object
//within the array
