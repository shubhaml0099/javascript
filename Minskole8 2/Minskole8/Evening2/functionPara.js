
let a = 10
console.log(a) // 10


// function as a parameter to another function
// function expression

let addition = function(x,y){
    return x+y
}

// function additionFinal(fn,x,y){

//     // let fn = function(x,y){
//     //     return x+y
//     // }
//     // let  x = 11
//     // let y = 22

//     let i = fn(x,y)
//     return i // 33
// }
// let ii = additionFinal(addition,11,22)
// console.log(ii) //33


//------------------------------>


// Array as a parameter to another function

// program

// let numbers = [11,22,33,44,55,66]

// function addArrayElements(arr){

//     //let arr = [11,22,33,44,55,66]

//     let total = arr.reduce(function(acc,el){
//         return acc + el
//     })

//     return total

// }

// let sum = addArrayElements(numbers)
// console.log(sum)


//--------------------------------> 
// string as a parameter to another function



let greeting = "Good Morning!"

function greet(str){
    // let str = "Good Morning!"

    return `welcome  ${str}`
}

let g = greet(greeting)
console.log(g)

// function as a parameter to another function 
// arr as a paramter to another function 
// obj as a parameter to another function 
// variable which stores one value as a parameter to another function

let obj = {
    fullName:"chinmay deshpande",
    age:24,
    rollNo:23
}



function printObj(o){

    // let o = {
    //     fullName:"chinmay deshpande",
    //     age:24,
    //     rollNo:23
    // }

    for(let key in o){
        console.log(key,o[key])
    }




}

printObj(obj)














// addition(12,13)
// let r = addition(12,13)
// console.log(r)

