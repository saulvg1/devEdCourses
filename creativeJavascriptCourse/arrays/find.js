//FIND
const videos = [
  "pranking my sister, is she okay (gone wrong)",
  "how to javascript",
  "html tutorial",
  "html basics",
  "learning the piano",
];

const searchTutorial = videos.find(function (v) {
  return v.includes("html basics");
});
// will only return of a conditional
// will return 1 value, or first value
console.log(searchTutorial);
