//TERNARY
const videos = [
  "pranking my sister, is she okay (gone wrong)",
  "how to javascript",
  "html tutorial",
  "learning the piano",
  "html basics",
  "css",
  "java",
  "programming",
  "ui/ux",
];

const newVideos = videos.map(function (video) {
  //   if (video.length > 10) {
  //     return video;
  //   } else {
  //     return "nope";
  //   }

  return video.length < 10 ? video : "nope";
});
console.log(newVideos);
