

// function declaration
// function add(x,y){
//     return x + y 
// }

// let r = add(12,12)
// console.log(r) // 24
// console.log(r+r) // 48


// // function expression

// let add2 = function (x,y){
//     return x + y
// }
// let rr = add2(12,12)
// console.log(rr)
// console.log(rr + rr)

// // arrow function

// let add3 = (x,y) =>x + y
// let rrr = add3(12,12)
// console.log(rrr)
// console.log(rrr+ rrr)

// call by value 

let a = 10
let b = a
b = 400
a = 600

console.log(b) // 400
console.log(a) // 600


// call by reference

let arr = [11,22,33]
let arr2 = arr
arr2[2] = 55

console.log(arr) // [11,22,55]
console.log(arr2) // [11,22,55]


let obj = {
    fullName:"cd"
}
let ob2 = obj
ob2['fullName'] = "ct"
console.log(ob2)
console.log(obj)

// ------------------------------------------------------------

// program  1

let add = function(x,y){
    return x+y
}



function addition(fn,x,y){
    // let fn = function(x,y){
    //     return x+y
    // }
    let a = fn(x,y)
    return a

}

let uuu = addition(add,12,13)
console.log(uuu)


// array as parameter to another function 

let numbers = [11,22,33]


function arrAdd(ar){

    // let ar = [11,22,33]

    let sum = ar.reduce(function(acc,el){
        return acc + el
    })

    return sum



}

let iii = arrAdd(numbers)
console.log(iii)

// function as a  obj to another function 



let objj = {

    fullName:"chinmay",
    age:12


}


function printObj(o){

    for(let key in o){
        console.log(key,o[key])
    }


}

printObj(objj)












