console.log(Math.round(4.6))
console.log(Math.ceil(7.8))
console.log(Math.floor(7.8))
console.log(Math.trunc(4.8))
console.log(Math.sign(4,1))
console.log(Math.pow(5,6))
console.log(Math.sqrt(16))
console.log(Math.abs(-4.5))
console.log (Math.sin(90 * Math.PI / 180))
console.log (Math.cos(0 * Math.PI / 180))
console.log (Math.min(0, 150, 30, 20, -8, -200))
console.log (Math.max(0, 150, 30, 20, -8, -200))
console.log(Math.log(1));

// Write a function named findMax that takes an array of numbers as 
// input and returns the largest number in the array


function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  var ans= findMax([1, 2, 3])
console.log(ans)