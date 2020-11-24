//sync code example
function otherFunction() {
  console.log('we are in another function');
  console.log('do some stuff');
}
console.log('start');
otherFunction();
console.log('end');

//Async code example
console.log('start');
setTimeout(() => {
  console.log('we are in the time out');
}, 2000);
console.log('end');
// when you use async code, the web api keeps track of when to run things
// this makes it so JS can continue its single thread operations
