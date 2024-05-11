function cat() {
  let name = "Alok";

  function dog() {
    console.log(name);
  }

  return dog;
}
let closureFun = cat();
closureFun();

//A closure in JavaScript is a combination of a function and the lexical environment within which that function was declared.
//In simpler terms, a closure allows a function to retain access to variables from its outer (enclosing) scope even after that outer function has finished execution. This happens because the inner function "closes over" the variables it references, preventing them from being garbage collected.
