// // string array boolean objects 

// // three ways to write function in js 


// //function declaration
// // function expression 
// // arrow function 


// //function declaration

// // function add(x,y){
// //     return x+y
// // }
// // let qwerty = add(12,13) // arguments
// // console.log(qwerty)


// // Expression

// // let add2 = function (x,y){
// //     return x+y
// // }
// // let qwerty = add2(12,14)//#endregion(12,13) // arguments
// // console.log(qwerty)


// // Arrow function 


// // let add2 =  (x,y)=>{
// //     return x+y
// // }
// // let qwerty = add2(12,14)
// // console.log(qwerty)


// // let add2 =(x,y)=>x+y
// // let qwerty = add2(12,14)//#endregion(12,13) // arguments
// // console.log(qwerty)


// // greet 

// // let greet = grt => grt
// // let g = greet("hello")
// // console.log(g)


// // let add =(x,y)=> x+y
// // add(22,33)


// // let x = 10 
// // console.log('x')//
// // console.log(x) // 10


// // let add = function(x,y){
// //     return x+y
// // }

// //add(12,13)
// // console.log(add)
// // let r = add(12,34)
// // console.log(r)
// //----------------------------------->


// // function as a parameter to another function 

// // let add = function(x,y){
// //     return x+y
// // }

// //console.log(add)
// // let fn = function(x,y){
// //     return x+y
// // }

// // let x = 10

// // function addition(x){
// //     let x = fn(12,34)
// //     return x
// // }

// // let r = addition(10)
// // console.log(r) 




// // function add (x,y){
// //     //let x = 1
// //     //let y = 2

// //     x= 30
// //     y =40
// //     console.log(x+y)
// // }
// // add(1,2)


// let add = function(x,y){
//     return x+ y
// }

// //console.log(add)
// function addition(fn){

//     let sq = fn(12,13) // 25
//     return sq
// }
// let ry = addition(add)
// console.log(ry) // 25

// // array as parameter to function 

// let numberss = [11,22,33,44,55]

// function arrayAddition(arr){
//     //let arr = [11,22,33,44,55]
//     let sum = arr.reduce(function(acc,el){
//         return acc + el
//     },0)
//     return sum
// }
// let cccc = arrayAddition(numberss)
// console.log(cccc)



let x = 10 
let y = x
x = 400
console.log(x)
console.log(y)

// array
let arr = [11,33,44]
let arr2 = arr

arr[0] = 0000

console.log(arr)
console.log(arr2)

// obj 
let human = {
    fullName:"chinmay deshpabde",
    age:23,
    rollNo:23
}

let human2 = human

human2['age'] = 444
human['age'] = 222

console.log(human)
console.log(human2)


//----------------------------->

// arr as parameter to another function

// let rr = [11,22,33]

// function Arr(ar){

//     //let ar = rr
//     ar[0] = 344
//     return ar

// }

// let q = Arr(rr)

// console.log(q)
// console.log(rr)


//----------------------------------------
let rr = [11,22,33,44,55]
function Arr(ar){
    //let ar = rr
    ar[0] = 600
    return ar
}

console.log(rr)  // [11,22,33,44,55]
let q = Arr(rr)
console.log(q) // [600,22,33,44,55]
console.log(rr) //[600,22,33,44,55]

//----------------------------------


let amol = {

    age:300,
    rollNu:45

}


function UpdateAge(obj){
    //let obj = amol
    obj.age = 300
    return obj
}

let e = UpdateAge(amol)
console.log(e)
console.log(amol)

// let a = [1,5,6,7]
// let b = [55,66,77]
// let c = [4,5,6]

// let y = c













