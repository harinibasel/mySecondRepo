let a = 10;
let b = 20;
console.log(`before swapping: a= ${a}`);
console.log(`before swapping: b= ${b}`);
 
a = a + b;
b = a - b;
a = a - b;
 
console.log(`after swapping a= ${a}`);
console.log(`after swapping b= ${b}`);

let x = 40;
let y = 20;

console.log(`before swapping: x= ${x}`);
console.log(`before swapping: y= ${y}`);
[y,x] = [x,y];

console.log(`after swapping x= ${x}`);
console.log(`after swapping y= ${y}`);
 

