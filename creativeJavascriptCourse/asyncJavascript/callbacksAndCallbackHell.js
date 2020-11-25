console.log('start');
function loginUser(email, password, callback) {
  setTimeout(() => {
    callback({ userEmail: email });
  }, 1500);
}
function getUserVideos(email, callBack) {
  setTimeout(() => {
    callBack(['video1', 'video2', 'video3']);
  }, 1000);
}
function videoDetails(video, callback) {
  setTimeout(() => {
    callback('title goes here');
  }, 2000);
}

const user = loginUser('devedf@goomail.com', 123456, (user) => {
  console.log(user);
  getUserVideos(user.userEmail, (videos) => {
    console.log(videos);
    videoDetails(videos[0], (title) => {
      console.log(title);
    });
  });
});
console.log(user);

console.log('end');
