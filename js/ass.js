// 1.	Array Initialization and Manipulation:
// a.	Create an array of 5 numbers.
// b.	Add a number to the end of the array.
// c.	Remove the first number from the array.
// d.	Print the final array.

var arr1 = [1, 2, 3, 4, 5]
arr1.push(6)
arr1.shift()
console.log('1 Ans:', arr1);

// 2.	String Lengths in Array:
// a.	Write a function that takes an array of strings and returns an array of their lengths.

function strLengths(arr) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        var length = arr[i].length;
        ans.push(length)
    }
    return ans
}
var ans2 = strLengths(['abc', 'defg', 'h', 'ijklmnop'])
console.log('ans2:', ans2)


// 3.	Filter Even Numbers:
// a.	Write a function that takes an array of numbers and returns a new array containing only the even numbers.

function evenNumbers(arr) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            ans.push(arr[i])
        }
    }
    return ans
}
var ans3 = evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log('ans3:', ans3)

// 4.	Reverse Strings:
// a.	Write a function that takes an array of strings and returns a new array with each string reversed.

function reverseString(arr) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i]
        // console.log(x)
        let y = x.split("")
        // console.log(y)
        let z = y.reverse()
        // console.log(z)
        let m = z.join("")
        // console.log(m)
        ans.push(m)
        // console.log(ans)
    }
    return ans
}
var ans4 = reverseString(["moon", "sun", "t4rg3rtht4ryh", "vgsdhgewyud"])
console.log('ans4', ans4)

// 5.	Sum of Array Elements:
// a.	Write a function that takes an array of numbers and returns the sum of all the numbers.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let y = arr[i] // y = 1, 2,
        sum = sum + y // 1, 3, 6

    }
    return sum
}
var ans5 = sumArray([1, 2, 3])
console.log('ans5', ans5)


// 6.	Find Longest String:
// a.	Write a function that takes an array of strings and returns the longest string.

function longestString(arr) {
    let ans = ''
    for (let i = 0; i < arr.length; i++) {
        let h = arr[i]
        let r = h.length
        // console.log(r)
        if (h.length > ans.length) {
            ans = h
        }
    }
    return ans
}
var ans6 = longestString(["sree", "hijkl", "lmnopq"])
console.log('ans6', ans6)


// 7.String Contains Character:
// a.Write a function that takes an array of strings and a character, and returns an array of strings that contain that character.

function containcharacter(arr, bs) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        let f = arr[i]
        let h = f.indexOf(bs)
        // console.log(h)
        if (h >= 0) {
            ans.push(f)
        }
    }
    return ans

}
var ans7 = containcharacter(["123", "4567K", "890"], "K")
console.log('ans7', ans7)

// 8.	Concatenate Array of Strings:
// a.	Write a function that takes an array of strings and returns a single string that is the concatenation of all the strings.

function concatstrings(arr) {
    let s = ''
    for (let i = 0; i < arr.length; i++) {
        s = s + arr[i]
    }
    return s
}

var ans8 = concatstrings(['s', 'r', 'sadasda', 'dfsfds'])
console.log('ans8', ans8)

// 9.	Capitalize First Letter:
// a.	Write a function that takes an array of strings and returns a new array with the first letter of each string capitalized.

function capitalfirst(arr) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        let s = arr[i]
        let a = s.charAt(0)
        let y1 = s.split('')
        y1[0] = a.toUpperCase()
        ans.push(y1.join(''))
    }
    return ans
}
var ans9 = capitalfirst(['s', 'r', 'sadasda', 'dfsfds'])
console.log('ans9', ans9)

// 10.	Flatten Nested Arrays:
// a.	Write a function that takes a nested array (an array of arrays) and returns 

function flatArray(arr) {
    return arr.flat()
}
var ans10 = flatArray([[1, 2], [3, 4], [5, 6]])
console.log('ans10', ans10)

// 11.	Count Occurrences:
// a.	Write a function that takes an array of strings and returns an object where the keys are the strings and the values are the number of times each string appears in the array.

function countOccurrences(arr) {
    let ans = {}
    for (let i = 0; i < arr.length; i++) {
        let s = arr[i]
        if (ans.hasOwnProperty(s)) {
            ans[s]++
        } else {
            ans[s] = 1
        }
    }
    return ans
}
var ans11 = countOccurrences(['s', 'r', 'sadasda', 'dfsfds', 's'])
console.log('ans11', ans11)

// 12.	Remove Duplicates:
// a.	Write a function that takes an array of numbers and returns a new array with all duplicate elements removed.

function removeDuplicates(arr) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        let s = arr[i]
        if (ans.indexOf(s) < 0) {
            ans.push(s)
        }
    }
    return ans
}

var ans12 = removeDuplicates(['s', 'r', 'sadasda', 'dfsfds', 's'])
console.log('ans12', ans12)

// 13.	Find Index of String:
// a.	Write a function that takes an array of strings and a string, and returns the index of the string in the array. If the string is not found, return -1.

function findIndex(arr, str) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        let s = arr[i]
        let ind = s.indexOf(str)
        ans.push(ind)
    }
    return ans
}

var ans13 = findIndex(['s', 'r', 'sadasda', 'dfsfds', 's'], 's')
console.log('ans13', ans13)

// 14.	Sort Strings Alphabetically:
// a.	Write a function that takes an array of strings and returns a new array with the strings sorted alphabetically.

function sortStrings(arr) {
    return arr.sort()
}
var ans14 = sortStrings(['s', 'r', 'sadasda', 'dfsfds', 's'])
console.log('ans14', ans14)

// 15.	Sum of Square of Numbers:
// a.	Write a function that takes an array of numbers and returns the sum of the squares of those numbers.
function sumsquare(arr) {
    let ans = 0
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i]
        n = n * n;
        ans = ans + n
    }
    return ans
}
var ans15 = sumsquare([10, 20])
console.log('ans15', ans15)



// 16.	Convert Strings to Uppercase:
// a.	Write a function that takes an array of strings and returns a new array with all the strings converted to uppercase.

function uppercase(arr) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i]
        let x = n.toUpperCase()
        ans.push(x)
    }
    return ans
}
var ans16 = uppercase(['asda', 'sdfas', 'sdfjsfdf'])
console.log('ans16', ans16)


// 17.	Find Common Elements:
// a.	Write a function that takes two arrays of numbers and returns a new array containing the common elements from both arrays.
function commonElements(arr1, arr2) {
    let ans = []
    for (let i = 0; i < arr1.length; i++) {
        let n = arr1[i]
        if (arr2.indexOf(n) > -1) {
            ans.push(n)
        }
    }
    return ans
}
var ans17 = commonElements(['asda', 'sdfas', 'sdfjsfdf'], ['asda', 'sdfas', 'qweqw'])
console.log('ans17', ans17)


// 18.	Remove Falsy Values:
// a.	Write a function that takes an array and returns a new array with all falsy values (false, 0, "", null, undefined, NaN) removed.
function removeFalsy(arr1) {
    let ans = []
    for (let i = 0; i < arr1.length; i++) {
        let a = arr1[i]
        if (a) {
            ans.push(a)
        }
    }
    return ans
}
var ans18 = removeFalsy(['asda', 'sdfas', 'sdfjsfdf', NaN, undefined, null, 0, false, '', 'ds'])
console.log('ans18', ans18)

// 19.	Find Unique Characters:
// a.	Write a function that takes a string and returns an array of unique characters in the string.
function uniqueCharacters(str) {
    let ans = []
    let arr1 = str.split('')
    for (let i = 0; i < arr1.length; i++) {
        let a = arr1[i]
        if (ans.indexOf(a) < 0) {
            ans.push(a)
        }
    }
    return ans
}
var ans19 = uniqueCharacters('kjhdfjksdfkhjdjdkj')
console.log('ans19', ans19)

// 20.	Merge and Sort Arrays:
// a.	Write a function that takes two sorted arrays of numbers and returns a single sorted array that combines both arrays.
function mergeSort(arr1, arr2) {
    let arr = arr1.concat(arr2)

    return arr.sort()
}
var ans20 = mergeSort([1, 2, 3, 2, 1], [4, 1, 2, 8])
console.log('ans20', ans20)





