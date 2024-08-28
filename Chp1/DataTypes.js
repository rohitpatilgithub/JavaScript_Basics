// Understanding data types in JavaScript

let num = 8    // number 
let user = "Rohit"
let decimal = 7.69
console.log(typeof num) 
console.log(typeof user)
console.log(typeof decimal) // number

// We have two types of DataTypes 
// 1. Primitve - number , String , undefined , boolean , null
// 2. Objects 

let myName = "Sagar \nLonkar \"StarBoy\"" 
console.log(myName)
// escape char to include "" quotes in String
// '\n' new line escape char
// '\t' for tab space
// '\v' for vertical
// '\b' for single backspace

let boolean = 5 > 6
console.log(boolean)

let id
// this is undefined

let rollNo = null
console.log(rollNo)
// It is null but typeOf gives null