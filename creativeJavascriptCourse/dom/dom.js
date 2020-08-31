// const collectionItems = document.getElementsByClassName("item");
// // const nodeItems = document.querySelector("#todo-list");
// const nodeItems = document.querySelectorAll(".item");
// // console.log(collectionItems, nodeItems);

// for (item of nodeItems) {
//   console.log(item);
// }
// //for loops can be used on
// //node lists and html collections

// // for(item )
// // console.log(nodeItems.childNodes);

// nodeItems.forEach(function (item) {
//   console.log(item);
// });

//adding to the dom with a collection
// const collectionItems = document.getElementsByClassName("item");
// const todoList = document.getElementById("todo-list");
// const todoNr = document.getElementsByClassName("todo-nr")[0];

// const newItem = document.createElement("li");
// newItem.classList.add("item");
// newItem.innerText = "item3";
// todoList.appendChild(newItem);

// const anotherItem = document.createElement("li");
// anotherItem.classList.add("item");
// anotherItem.innerText = "item3";
// todoList.appendChild(anotherItem);

// //update the amount of items we have
// todoNr.innerText = collectionItems.length;
// // console.log(collectionItems);

//with querySelector will not recognize that there are new elements in the dom
//querySelector is "STATIC"
const nodeItems = document.querySelectorAll(".item");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr");

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "item3";

todoList.appendChild(newItem);

const anotherItem = document.createElement("li");
anotherItem.classList.add("item");
anotherItem.innerText = "item3";
todoList.appendChild(anotherItem);

//update the amount of items we have
todoNr.innerText = nodeItems.length;
// console.log(nodeItems);
console.log(nodeItems);
