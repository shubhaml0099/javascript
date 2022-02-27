
// function as a parameter to another function


// let add = function(x,y){
//     console.log(x+y)
// }

// function addition2(fn){
//     // let  fn = function(x,y){
//     //     console.log(x+y)
//     // }
//     let r = fn(12,13)
//     return r

// // }


// // let ra = addition2(add)
// console.log(ra)

//                0    1    2
let birthYear = [2000,1990,1989]
let ages = []
console.log(birthYear[0])
// [2021-2000,2021-1990,2021-1989]4
//[21,31,32]

for(let i = 0 ; i < birthYear.length ; i++){
    let ag = 2021-birthYear[i]
    ages.push(ag)
}
console.log(ages)

// //--------------------------------------------
// //map
let uu = birthYear.map(function(el,index,arr){
    return 2021 - el //2021-2000
})
console.log(uu)

let number2 = [1,2,3,4,5]
// [3,4,5,6,7]
let rrr = number2.map(function(el,index,arr){
    return el + 2
})
console.log(rrr)


// program 2 
let numbers = [12, 33, 44, 77, 33, 44, 55]
let above50 = []

for (let i = 0; i < numbers.length; i++) {
    //console.log(numbers[i])
    if (numbers[i] > 50) {
        above50.push(numbers[i])
    }
}
console.log(above50)

let iii = numbers.filter(function (el, index, arr) {
    return el > 50
})
console.log(iii)


// program3 

let num = [11, 22, 33]
let sum = 0

for (let i = 0; i < num.length; i++) {
    sum = sum + num[i]
   
}

console.log(sum)
let ppp = num.reduce(function (acc, el, index, arr) {
    return acc + el // 11

}, 4)

console.log(ppp)




















// let x = 10
// console.log(x)
// console.log(add)
//add(12,13)

// function(x,y){
//     console.log(x+y)
// }