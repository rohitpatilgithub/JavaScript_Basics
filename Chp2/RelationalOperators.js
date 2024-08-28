// Understanding relational operators
let num1 = 2
let num2 = 3
let compare = num1 > num2
console.log(compare);

let name1 = "Zayn"
let name2 = "Aakash"
console.log(name1 < name2) // As per ASCII values & it compares it as per first value

let name3 = "Pen"
let name4 = "Pencil"
console.log(name3 < name4) // Here it gives majority to total characters in String

let unkn = "3"
let unkn1 = 3
console.log(unkn == unkn1) // coercion into number then comaprison
console.log(unkn === unkn1) // coercion doesn't take place & comaprison is made
// '===' is Strict Equality Operator which compares actual data without any coercion
