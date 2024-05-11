//immediately invoke function expression

(function voke() {
  console.log("this is Imm.. invoke function");
})();
//named IIFE

(() => {
  console.log(`work in bracket scopes`);
})();
//unnamed IIFE

((country) => {
  console.log(`work in bracket scopes ${country}`);
})("INDIA");
//parameter IIFE
//commas required for strict the scope
//help from pollutions of global variables or declarations
