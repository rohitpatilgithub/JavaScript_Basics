function sum(a,b){
    let result = a+b;
    console.log(result)
}
sum(10,20);

// Anonymous function can be stored in var and we can call it 
let func1 = function (a = 0 , b = 0) {
    let subs = a - b;
    return String(subs); // Js is smart here
}

let ans = func1(15,10);
console.log(ans)

// String 
let func2 = function(a = "" , b = 0) {
    console.log(`My name is ${a} , and my age is ${b}`);
}

let fun3 = function(a = []) {
    let sum = 0;
    for(let i = 0 ; i < a.length ; i++) {
        sum = a[i] + sum;
    }
    return sum;
}
let arr = [1,2,3,4,5];
console.log(fun3(arr));


// Scoping 
let b = 20;
{
    // var b = 30; ( var is wanna be global variable not local variable )
    let b = 30; // this is scoping ( like local variable )
}
console.log(b);