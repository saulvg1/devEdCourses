const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const items = todoList.children;
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");
const nameInput = document.querySelector(".name-input");
//an event is a Click , scroll, resizing  the browser, etc.

//attach an event listener
// you can use anonymous functions or use named funcitons declared outside of the function
button.addEventListener("click", (event) => {
  event.preventDefault();
  //creating element
  const newItem = document.createElement("li");
  //adding the class here
  newItem.classList.add("item");
  //adding the text here
  newItem.innerText = nameInput.value;
  todoList.appendChild(newItem);
  todoNr.innerText = items.length;
  nameInput.value = "";
  //create the element and attach the element to it inside.
  newItem.addEventListener("click", deleteItem);

  console.log("nameInput");
});

//the below example does not work with JS created elements
// for (item of items) {
//   item.addEventListener("click", deleteItem);
// }

//using stopPropagation method stops bubbling

function deleteItem(event) {
  event.stopPropagation();
  event.target.remove();
}
todoList.addEventListener("click", () => {
  todoList.classList.toggle("fade");
});
