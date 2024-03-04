// EXAMPLE 1 - Convert an Error Object to a String in JavaScript

const err = new Error('Something went wrong');

console.log(err.message); // 👉️ "Something went wrong"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if the object is an error before accessing `message`

// const err = null;

// if (
//   typeof err === 'object' &&
//   err !== null &&
//   'message' in err
// ) {
//   const message = err.message;
//   console.log(message);
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using `error.toString`

// const err = null;

// if (
//   typeof err === 'object' &&
//   err !== null &&
//   'toString' in err
// ) {
//   const message = err.toString();
//   console.log(message);
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the Stack Trace from an Error in JavaScript

// function outer() {
//   function inner() {
//     const err = new Error('👉️ Something went wrong');
//     console.log(err.stack);
//   }

//   inner();
// }

// outer();

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get the Stack Trace from an Error using `console.trace`

// function outer() {
//   function inner() {
//     console.trace();
//   }

//   inner();
// }

// outer();
