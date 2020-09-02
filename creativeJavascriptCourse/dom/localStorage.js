//local storage
//can only pass strings into the storage
// localStorage.setItem("todo", "feed the cat");
// localStorage.setItem("user", "ed");
// localStorage.setItem("todo", "food myself");
//session storage
// sessionStorage.setItem("todoList", "session feeding the cat");

// localStorage.clear();

//getting stuff back
// const user = localStorage.getItem("user");
// console.log(typeof user);

// localStorage.clear();
const todoList = ["feed the cat", "wash", "listen to classical music"];

localStorage.setItem("todos", JSON.stringify(todoList));

const retrieved = JSON.parse(localStorage.getItem("todos"));

console.log(retrieved);
