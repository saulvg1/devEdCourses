//Constructor Function

function Todo(name, completed) {
  this.name = name;
  this.completed = completed;
}

const todo = new Todo("buy eggs", false);

//NEW -creates a new empty object

const todo2 = new Todo("finish homework", false);
console.log(todo, todo2);

function Somefunction(params1, params2) {
  //some stuff some stuff , and some more stuff
  this.params1 = params1;
  this.parmas2 = params2;
}
