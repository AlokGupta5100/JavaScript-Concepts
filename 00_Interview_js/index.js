//Q2
var name = "Gupta";

const obj = {
  name: "alok",
  a: function () {
    console.log("Q2//", this.name);
  },
  b: () => {
    console.log("Q2//", this.name);
  },
};

obj.a(); //alok- refers to the parent object.
obj.b(); //Gupta-refers to the window object.

// Q3
const abc = {
  e: "foo",
  bc: function () {
    console.log(this.e);
  },
};

const c = abc.bc;

abc.bc(); //foo
c(); //undefined

//Q4
const object = {
  message: "Hello, World!",
  logMessage() {
    console.log(this.message);
  },
};
setTimeout(object.logMessage, 1000); //undefined
// In this code snippet, the setTimeout function is used to schedule the logMessage method 
// of the object to be executed after a delay of 1000 milliseconds (1 second). However, when 
// passing object.logMessage as the callback to setTimeout, the context (this) of the method is not 
// preserved. As a result, when logMessage is invoked inside setTimeout, this will refer to the global 
// object (or undefined in strict mode) instead of object.
// By using bind(object), we ensure that the logMessage method is always called with object as its context.so output is Hello, World!
// this refers to the global object (window in the browser, global in Node.js) or undefined in strict mode.

//Q5
const object2 = {
    message: "Hello Javascript",
};
function logMessage(){ 
    console.log(this.message);
}
logMessage.call(object2);
