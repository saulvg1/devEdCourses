console.log('start');
function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('now we have the data');
      resolve({ userEmail: email });
    }, 2000);
  });
}
function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['video1', 'video2', 'video3']);
    }, 2000);
  });
}
function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('title goes here');
    }, 2000);
  });
}

// const user = loginUser('devedf@goomail.com', 123456, (user) => {
//   console.log(user);
//   getUserVideos(user.userEmail, (videos) => {
//     console.log(videos);
//     videoDetails(videos[0], (title) => {
//       console.log(title);
//     });
//   });
// });

// loginUser('ed@edmail.com', 'bumba')
//   .then((user) => getUserVideos(user.email))
//   .then((videos) => videoDetails(videos[0]))
//   .then((detail) => console.log(detail));

//sync
async function displayUser() {
  try {
    const loggedUser = await loginUser('user', 12354);
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
  } catch (err) {
    console.log('WE CANNOT GET THE USER');
  }
}

displayUser();

// console.log('end');
