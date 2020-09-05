// Functions  = > special object
// Bind CAll APPLY
// these are 3 methods that are available to functions on their own

const person = {
  firstName: "ed",
  lastName: "developer",
  getName() {
    console.log(this.firstName + " " + this.lastName);
  },
};
person.getName();

function registerUser() {
  //additonal functionallity
  console.log(this);
}
// BIND -  allows you to use a method on a function and saves it

// const register = registerUser.bind(person);

//CALL  - invokes the function
//with call you the first argument is object that is being referenced
// then the following arguments are the parameters
registerUser.call(person);

//APPLY - does the same thing as CALL but uses arrays for the
//arguments
