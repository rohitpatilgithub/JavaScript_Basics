let arr = [2,3,4,5];
console.log(arr);

let arr2 = ["Shy" , 1, 2, [4,5]];
console.log(arr2);

let arr3 = new Array(4);
console.log(arr3);

let exp = [1,2,3];
exp.push(3); // adds up at last
console.log("Push : " + exp);

exp.pop();  // removes last
console.log("Pop : " + exp);

exp.shift(); // removes first index
console.log("Shift : " + exp);

exp.unshift(1); // adds up at first index
console.log("Unshift : " + exp);

let huge = [1,2,3,4,5,6,7,8,9,10];

huge.splice(3,2) // from index position : total consecutive number
console.log(huge);

huge.reverse(); // reversing the array
console.log(huge);

let arr4 = [1,2,3,4,5,6,7,8,9,10];
let newarr = arr4.slice(3,6); // from index position : index position save the elements
console.log(newarr);
console.log(newarr.includes(4)); // checks whether element is present or not

let arr5 = [];
for(let i = 0 ; i < 100 ; i++) {
    arr5[i] = i+1
}
console.log(arr5)

const arr6 = [];

arr6.push(20);
arr6.push(20);
arr6.push(20);
// arr6 = [123]; // we can add things up in const but cannot change it
console.log(arr6) 

const Obj1 = { // literally there's no any difference between arrays and objs
    name : "Rohit" ,
    surname : "Patil"
}

Obj1.age = 69; // adding up data in Objects

console.log(Obj1)
console.log(Obj1.name) // accessing the elements from Objects