// let x = 10 
// console.log(x)
// x = 40
// console.log(40)

//--------------------

// const y = 23
// y = 45
// console.log(y)


// let x = 10
// let y = 40
// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)
// console.log(x%y)


// function ??

// 1) Function declaration 

// 2) Expression 

// 3)Arrow function 


function add(x,y){
    console.log(x+y)
}
add(12,13)


// function add(x,y){
//     console.log(x+y)
// }
// let i = add(12,13)
// console.log(i)


// function add(x,y){
//     console.log(x+y)
//     return x+y
// }
// let i = add(12,13)
// console.log(i)
// console.log(i + 23)
// console.log(i*0.20)

// function 

// let add = function(x,y){
//     console.log(x+y)
//     return x+y
// }
// let i = add(12,13)
// console.log(i)
// console.log(i + 23)
// console.log(i*0.20)


// arrow

// let add = (x,y)=>{
//     console.log(x+y)
//     return x+y
// }
// let i = add(12,13)
// console.log(i)
// console.log(i + 23)
// console.log(i*0.20)


// String

let city = "pune"

// 0  1  2  3
// P  u  n  e

//Object - property and method
// method -- action and return type


//-------------------------------------->

city = "pune"
console.log(city[0])
console.log(city[city.length-1])

// loop 

// for(let i = 0 ; i < city.length ;i++){
//     //console.log(i)
//     console.log(city[i])
// }


// for(let i = 0 ; i < city.length ;i++){
//     //console.log(i)
//     console.log(city[i])
// }




//---->

"Chinmay".toLowerCase()
"Chinmay".toUpperCase()
"Chinmay".indexOf("h")
"Chinmay".indexOf("H")
console.log("Chinmay".startsWith("chi"))
console.log("Chinmay".endsWith("May"))
console.log("fruits grapes banana mango".includes("mango"))

let bny = "worldbank" 
//   0    1   2   3   4    5   6   7  8
//    w   o   r   l   d    b   a   n  k
//   -9   -8  -7   -6  -5   -4  -3  -2 -1

console.log(bny.slice(1))
console.log(bny.slice(-5))
console.log(bny.slice(1,-5))
console.log(bny.slice(0,6))
console.log(bny.slice(-8,-5))
console.log(bny.slice(-3,-5))
console.log("chinmay-shirish-deshpande-7709192441".split('-'))
//["chinmay" ,"shirish" ,"deshpande" ,"7709192441"]
console.log("chinmay".charAt(0))//c
console.log("chinmay".charCodeAt(2))// a ASCII - 97

//---------------------------------------------------->

// && || !

// AND

// True  True  - T
 
// True  False  - F

// False  True  - F

// False  False  - F


// OR 


// True  True  - T
 
// True  False  - T

// False  True  - T

// False  False  - F


// ! True  False
// ! False True


//---------- 

// < , > , <= , >=  

//=== == !== !=

console.log(5 === 5)
console.log(5 !== 5)
console.log(5 != '5')
console.log(5 == '5')
console.log(5 === '5')

//   type --- abosolute 

console.log("5" ==  5) // true 
console.log(5 === '5') // false
console.log(7 !== '7') // true

//----------------------------->

// for while


// for(let i = 0 ; i <= 10 ;i++){
//     console.log(i)
// }

// let y = 1 
// while(y <= 10){
//     console.log(y)
//     y++
// }


// for(let i = 0 ; i< 10;i++){

//     if(i === 5){
//         break
//     }
//     console.log(i)


// }

// for(let i = 0 ; i< 10;i++){

//     if(i === 5){
//         continue
//     }
//     console.log(i)


// }


// conditional 


// if(9==9){
//     console.log("hello ")
// }
// else if(8 == 8){
//     console.log("hello 2")
// }
// else{
//     console.log('new to js')
// }


// if(9==9){
//     console.log("hello ")
// }
// if(8 == 7){
//     console.log("hello 2")
// }
// else{
//     console.log('new to js')
// }

// objects 


//let person = ["amol","rao",12,13]

// let person = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23,
//     rollNumber:23 
// }

// // retrive

// console.log(person.firstName)
// console.log(person['firstName'])

// // update 

// person.firstName = "amol"

// // add 
// person.language = "hindi"

// //del

// delete person['age']

// person = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23,
//     rollNumber:23 
// }


// for(let key in person){
//     console.log(key,person[key])
// }


// array 

let numbers = [1,3,4,5,6]
// array stores the value 
console.log(numbers[0])
// object - property and method
// property 
console.log(numbers.length)
console.log(numbers[numbers.length-1])

//---------------------------------------->

let fruits = ['apple',"banana","grapes"]
let userInput = "APple"
userInput = "APple".toLowerCase()
//  3 ways 

// indexOf , forloop , includes ,filter , find
// forEach

for(let i = 0 ; i < fruits.length ;i++){
    if(userInput == fruits[i]){
        console.log(`Fruit available`)
    }
    else {
        console.log(`Fruit not availabe`)
    }
}

// program 2
if(fruits.includes(userInput)){
    console.log(`Fruit available`)
}
else {
    console.log('Fruit not available')
}
// program3

let isAvailable = false
fruits.forEach(function(el){
    if(el == userInput){ 
        isAvailable = true
    }
    
})
if(isAvailable){
    console.log(`Fruit availabe`)
}
else{
    console.log(`Not available`)
}

// Indexof

fruits = ['apple',"banana","grapes"]
userInput = "APple".toLowerCase()

if(fruits.indexOf(userInput) >= 0){
    console.log(`Fruit availabe`)
}
else{
    console.log(`Not available`)
}

// filter , find

// fruits = ['apple',"banana","grapes"]
// userInput = "APpl".toLowerCase()
// let i = fruits.find(function(el){
//     return el == userInput
// })

// if(i){
//     console.log('fruit available')
// }
// else{
//     console.log('fruit not available')
// }


fruits = ['apple',"banana","grapes"]
userInput = "APpl".toLowerCase()
let i = fruits.findIndex(function(el){
    return el == userInput
})

if(i >= 0){
    console.log('fruit available')
}
else{
    console.log('fruit not available')
}


fruits = ['apple',"banana","grapes"]
userInput = "APpl".toLowerCase()


let g = fruits.filter(function(el){
    return el === userInput
})
//console.log(g.length)

if(g.length > 0){
    console.log(`Fruit available`)
}
else {
    console.log('not available')
}


// let username = ["chinmay deshpande","sanchita dhole","gauri kanhe"]

// // ['cd','sd','gk']

// let hh = username.map((el)=> el.split(' ')[0][0]+el.split(' ')[1][0])
// console.log(hh)

// let ooo = username.map(function(el){
//     return el.split(' ')[0][0]+el.split(' ')[1][0]
// })
// console.log(ooo)

let transac = [11,22,33,-44,55,-66,77,88,-99,-100]

let depoist =transac.filter(function(el){
    return el > 0                      //[11,22,33,55,77,88]
}).reduce(function(acc,el){
    return acc + el
},0)
console.log(depoist)


let withdrawl =transac.filter(function(el){
    return el < 0                     //[11,22,33,55,77,88]
}).reduce(function(acc,el){
    return acc + Math.abs(el)       // Math.abs(-10) // 10
},0)
console.log(withdrawl)



let names = [["chinmay","deshpande"],["poorva","vyas"],["abhisha","burande"]]
// "chinmay deshpande"

let ggg = names.map(function(el){
    return el.join(' ')
})

console.log(ggg)






// transac.reduce(function(acc,el){

// })






























































