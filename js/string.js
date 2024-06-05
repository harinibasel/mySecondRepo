let text = "Hello World";  // String written inside quotes
console.log(text)
let carName1 = "Volvo XC60"; // Double quotes
let carName2 = 'Volvo XC60'; // Single quotes
let carName3 = "glanga";
console.log(carName1)
console.log(carName2)
console.log(text.length) // length
let x = "prathwin";
let y = new String ("mother is Harini");
console.log(typeof(x)); //string /object
console.log(typeof(y)); //string/object
console.log(x===y)
let z= "ganga";
let w= new String("ganga")
console.log(z==w) //true/false
console.log(z===w) //true/false
let m=new String ("eashu");
let s=new String ("eashu");
console.log(m==s) // true/false
console.log(m===s) //true//false
let char= text.charAt(0);//print the character  from the text 
console.log(char);
for(let i=0;i<text.length;i++){ //print all the characters
    console.log(text.charAt(i))
}
console.log(text.charCodeAt(1))
let letter = carName1.at(2)//print the letter 2 from carname1
console.log(letter)
text[0] = "A";  // Does not work
console.log(text.slice(5,9)) //print the letter from given index numebr to end index number
console.log(text.slice(-4)) // the number is counted from the end string 
console.log(text.slice(-4,-2)) // the numebr for - counted from end of string and next - will be from the frst(from 1st neg)
console.log(text.substring(7,5)) //same as slice
console.log(text.substr(6,5)) //print fromt the start and index number given at end point 
console.log(text.toUpperCase())
console.log(text.toLowerCase())
let carName4 = carName1.concat(" " ,carName3); // combines the 1 and 2
console.log(carName4)
let g= "      puppy   "
let k=g.trim();// eliminates the space 
console.log(k)
console.log(g.trimStart())
console.log(g.trimEnd())
console.log(g.padStart( 30,"."))// provides the space with ../-//
console.log(z.padEnd(6,","))
console.log(z.repeat(5))
console.log(text.replace("World","Harini"))
console.log(text)
let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
console.log( str );

