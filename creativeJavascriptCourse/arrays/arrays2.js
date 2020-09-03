const videos = [
  "Pranking my sister, is she ok(gone wrong)",
  "how to javascript",
  "html tutorial",
  "learning the piano",
];

videos.forEach(function (video) {
  console.log("run");
  console.log(video);
});

// .forEach is a HOF, Higher Order Function
// a HOF is a function that takes a function as parameter

function repeater(fn) {
  fn();
  fn();
  fn();
  fn();
}

function sayHello() {
  console.log("hello");
}

repeater(sayHello);

//Call backs are functions that are ran within an HOF
