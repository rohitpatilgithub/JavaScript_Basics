let num1 = true
let num2 = true // truthy value is 1 and falsey is 0
let result = num1 + num2
console.log(result); // output will be 2

let num3 = 4
num3 += 2
console.log(num3)

let num4 = 4
let x = num4++ // post increment ( first assigne to x later increment )
console.log(x , num4)

let num5 = 10
let y = ++num5 // pre increment ( first increment then it assigns to the variable )
console.log(y , num5)

// To find power wise values
let num6 = 2
let result1 = Math.pow(num6,3) // 3 times ( cube ) of num6
let result2 = num6 ** 3 // 3 times ( cube )
console.log(result1)
console.log(result2)