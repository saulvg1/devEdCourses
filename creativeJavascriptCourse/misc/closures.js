//closures

function user() {
  const name = 'Ed';
  const displayName = function (greeting) {
    console.log(greeting + ' ' + name);
  };
  return displayName;
}
const say = user();

say('hey! how are you ');

// closures are when functions within functions have access to variables
// of the parent function
