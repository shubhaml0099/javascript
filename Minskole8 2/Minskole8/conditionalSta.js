// string abject array  , class set map
// conditional , loops (for and while)
// switch operator , ternary 


// use

//  =====> i/p  multiple outcome
// numberTicket -- 10  ====> 10 %
// numberTicket ---20  ====>  20%

// let numberOftickets = 10

// if(numberOftickets > 1 && numberOftickets <=10){
//     console.log(`Available discount 5%`)
// }
// else if(numberOftickets > 10){
//     console.log(`Available discount 10%`)

// }
// else {
//     console.log('Incorrect input')
// }


// let numberOftickets = 11

// if(numberOftickets > 1 && numberOftickets <=10){
//     console.log(`Available discount 5%`)
// }
// if(numberOftickets > 10){
//     console.log(`Available discount 10%`)

// }
// else {
//     console.log('Incorrect input')
// }


//  syntax

// truthy -- numbers except true, character, specials

// falsy value ==>  0 , undenfined , null , NaN



// if(true){
//     console.log('hello')
// }
// else {
//     console.log('hello2')
// }


// if(-1){
//     console.log('true')
// }
// else {
//     console.log('false ----value')
// }


// if(0){
//     console.log('true')
// }
// else {
//     console.log('false ----value')
// }


// if('A'){
//     console.log('true')
// }
// else {
//     console.log('false ----value')
// }

// if('@'){
//     console.log('true')
// }
// else {
//     console.log('false ----value')
// }


// let a ;
// console.log(a)


// if(a){
//     console.log('true')
// }
// else {
//     console.log('false ----value')
// }


// if(null){
//     console.log('true')
// }
// else {
//     console.log('false ----value')
// }


// if(NaN){
//     console.log('true')
// }
// else {
//     console.log('false ----value')
// }

//false 0 null undefined NaN  false , 8 > 9
// truthy -  numbers , special , character , expression value //


//-------->  Loops----------------------->

//for 
//while

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// let i = 1
// for (;i <= 10;) {
//     console.log(i)
//     i++
// }


let i = 1

while (i <= 10) {
    console.log(i) // 1
    i = i + 1  // 2
    //i++   
    //i += 1 // shorthand

}

console.log(Math.random()) // 0 ----1
console.log(Math.floor(9.9)) //9
console.log(Math.ceil(9.2)) //10
console.log(Math.round(9.6)) //9  


//-------------------------------------->


//conditional statement


//if else --- same input ---- multiple output


// if(condition){
//     // staement
// }
// else {
//     // statemenr
// }

// if(condition){
//     // statement
// }
// else if(condition){
//     //statement
// }
// else{
//     // condition
// }


// if(condition){
//     // statement
// }
// if(condition){
//     //statement
// }
// else{
//     // condition
// }

// Loops


//for while
// for loop -- definite 
// while -- until the condition is true 


// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(`Number is even ${i}`)
//     }
//     else {
//         console.log(`Number is odd ${i}`)
//     }
// }

// while 


let ia = 0
while (ia <= 10) {
    if (ia % 2 == 0) {
        console.log(`Number is even ${ia}`)
    }
    else {
        console.log(`Number is odd ${ia}`)
    }
    ia = ia + 1
}

// break statement ------ (to exist out of loop)


// for (let i = 0; i <= 10; i++) { // 5
//     console.log(i)  // 0 , 1 ,2 ,3 ,4 ,5
//     if (i === 5) {
//         break;
//     }
// }

// let y = 0
// while (y <= 10) {
//     console.log(y)  // 0 , 1 ,2 ,3 ,4 ,5
//     if (y === 5) {
//         break;
//     }

//     y++

// }


// continue statement ---->

// program One


// for(let i = 0 ; i <= 5 ; i++){  //1 // 2 // 3 // 4

//     if(i === 3){
//         continue;
//     }
//     console.log(i)  // 0 , 1  , 2 , 4 , 5


// }


// for(let i = 0 ; i <= 5 ; i++){  //1 // 2 // 3 // 4

//     if(i === 3 || i == 5){
//         continue;
//     }
//     console.log(i)  


// }

// flag --- true

let fruits  = ['apple','mango','banana','grapes']
let userInput = "banana".toLowerCase()
let isAvailable =  false

for(let i = 0 ; i < fruits.length ; i++){
    if(fruits[i] == userInput){
        isAvailable = true
        break
    }
    
}
if(isAvailable){
    console.log('Fruit is available')
}
else {
    console.log('fruit not available')
}

// -------- Revision session -------------->


//string  --- array --- objects ,-- functions, for while ----> 
// random number




































function add(x,y){
    return x + y 
    //console.log(x+y) // 25

}

let r = add(12,13)
console.log(r) // undefined
console.log(20+r)


let a = [1,3,4].reduce(function(acc,el){
    return acc + el
},0)




// javascript ---- testauotmation -- cypress

// selenium 

//js   -- javscript , FE , node js 

// .pdf , doc , .txt , .py 

//.js


// node   -- open ---->

// visual studio code --- ope




























