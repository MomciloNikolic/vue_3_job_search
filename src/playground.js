const numbers = [1, 2, 3, 4, 5];

// const names = ["Ana", "Milos", "Joca", "Moca"];

// console.log(numbers);
// an array of sqares
// [1,4,9,16,25]

// below we can see one line arrow function, use in speciffic case if we have one line code, simple task. IMPOTRANT: IN any other case we must define RETURN, by default is undefine
const squares = numbers.map((number) => number * number);
console.log(squares);

// console.log(names);

// const lowercaseNames = names.map((name) => {
//   return name.toUpperCase();
// });

// console.log(lowercaseNames);
