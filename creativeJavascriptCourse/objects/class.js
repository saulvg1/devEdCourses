//CLASS

// old way of doing things with constuctor functions
// function Enemy(life, name, level) {
//   this.life = life;
//   this.name = name;
//   this.level = level;
// }
// Enemy.prototype.getInfo = function () {
//   console.log(this.life, this.name, this.level);
// };

// this is how the same thing is done with using class
class Enemy {
  constructor(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;
  }
  // this is how you would add to the prototype using class
  getInfo() {
    console.log(this.life, this.name, this.level);
  }
}

const turtle = new Enemy(25, "Squigil", 10);
const bug = new Enemy(20, "Buggle", 10);
console.log(turtle, bug);

//using extends word , allows you to take the properties from the second
//class in the call. Here it is Enemy.
// bug, EXTENDS enemy contents
class Bug extends Enemy {
  constructor(life, name, level, legs, dmg) {
    super(life, name, level);

    this.legs = legs;
    this.dmg = dmg;
  }
}

const john = new Bug(10, "buggi", 1, 5, 6);

console.log(john);
john.getInfo();
