const videos = [
  "pranking my sister, is she okay (gone wrong)",
  "how to javascript",
  "html tutorial",
  "learning the piano",
];

//MAP
// MAP is a higher order function

const newVideos = videos.map(function (video) {
  return video.toUpperCase();
});

console.log(newVideos);

// map will return a value
// when you use MAP it will create a copy of the original,
// so changes made will not affect the referenced type
