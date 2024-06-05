var a = [10, 20, 30, 40]
console.log(a)
a[5] = 60
console.log(a)
delete a[1]
console.log(a)
console.log(Array.isArray(a))
var b = 1
console.log(Array.isArray(b));
console.log(a.join(","));
console.log(a.join("@"));
console.log(a.join("  "));
a.push(1);
a.push(5);
console.log(a);
a.pop();
console.log(a);
a.shift();
console.log(a);
a.unshift(80);
console.log(a);
var c = a.slice(1, 3)
console.log(c)
console.log(a)
var d= a.splice(1,4)
console.log(d)
console.log(a)
var z = [15, 20, 25, 30]
console.log(a.length)
console.log(z)
var x = [35, 40, 45, 50]
console.log(x)
console.log(x.length)
console.log(x.concat(z))
var m =a.reverse()
console.log(m)
var g =x.concat(z)
console.log(g)
console.log(g.length)




//constructor
// var a = new Array('10','20','30','40')
// for (i = 0; i < a.length; i++) {
//     console.log(a[i])
// }


