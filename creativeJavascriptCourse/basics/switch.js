// const text = "banana";

// switch (text) {
//   case "banana":
//     console.log("wow i love bananas");
//     break;
//   case "apple":
//     console.log("wow I hate apples!");
//     break;
// }

let userInput = prompt("Tell me a fruit");
let convertedValue = userInput.toLowerCase();

switch (convertedValue) {
  case "kiwi":
    alert("kiwi is the first food invented by the ocean boys");
    break;
  case "banana":
    alert("my girl bought 12 bananas for no reason");
    break;
  case "apple":
    alert("depending on what apple you buy,");
    break;
  default:
    alert("this fruit is unknown to me!");
}
