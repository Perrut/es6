var sayHello = name => `Hello ${name}`;
var printHello = (name) => {
  console.log(`Hello ${name}`);
};
var getSiblings = n => ({ previous: n - 1, next: n + 1 });

console.log(sayHello);
console.log(sayHello('Perrut'));
printHello('Perrut');
console.log(getSiblings(10));
