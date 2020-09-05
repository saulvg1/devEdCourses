//PROTOTYPE
// it is a reference to other objects
// and has similar properties

// function Todo(name, completed) {
//   this.name = name;
//   this.completed = completed;
// }

// Todo.prototype.getTodoName = function () {
//   console.log(this.name);
// };

// const todo = new Todo("Buy Eggs", false);
// const todo2 = new Todo("Do my homework", false);
// console.log(todo, todo2);

// const arr = new Array(1, 2, 3, 4, 5);
// console.log(arr);
// arr.pop();
// console.log(arr);

const name = "deved";
name.toUpperCase();

//Prototypal Inheritance
function Enemy(life, name, level) {
  this.life = life;
  this.name = name;
  this.level = level;
}
Enemy.prototype.getInfo = function () {
  console.log(this.life, this.name, this.level);
};
Enemy.prototype.attack = function () {
  console.log(`${this.name} has attacked!`);
};
Enemy.prototype.block = function () {
  console.log(`${this.name} has blocked`);
};

function Dragon(life, name, level, color, spell) {
  //keyword this is going to reference the Dragon object
  Enemy.call(this, life, name, level);
  //define it as normal
  this.color = color;
  this.spell = spell;
}

// below is how you add a prototype to the function
Dragon.prototype.fireBreath = function () {
  console.log("FIRE BREATH");
};

const newDragon = new Dragon(100, "Drogon", 30, "blue", "spireta");

console.log(newDragon);
