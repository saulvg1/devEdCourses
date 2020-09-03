// ARROW FUNCTIONS

const sayHello = function () {
  console.log("hello");
};
// has been replaced by arrow functions
const sayHello = () => {
  console.log("helllo");
};

//anther example 

const newVideos = videos.map(functions(video) {
    return video.length < 10 ? video : "nope"
})

const arrowVideos = videos.map((video)=>{
    return video.length < 10 ? video : "nope"
})
