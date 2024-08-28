// Understanding the conversion and coercion of data types

let num = Number("6")

console.log(num , typeof num);

let x
x = 8
console.log(x , typeof x);
x = x + ""  // here string is joined up
console.log(x , typeof x)
x = x - 2; // covecion happens here : String to num due to operator
console.log(x , typeof x)
x = !x // converted to boolean
console.log(x , typeof x)
console.log(Boolean(7)) // all numbers are true , only 0 is false
// because when we try to convert falsey values ( null , 0 , undefined ) into boolean it gives us false
// and when we try to convert truthy values we get true after converting into boolean

let convo = parseInt("44 Roll") // parseInt forces to extract number from String
// only if we have no any character initially : n44 Roll --> error NaN
console.log(convo)