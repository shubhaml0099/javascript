// let city = "pune"
// let citi = 'pune'

// // In javscript everything is object 


// //every object has 

// // human ------>
// // property :- height , weight , color ,age
// // method : - walk(),talk() eating()


// // vehicle ------->
// // property : - regNo , color , suv
// // method : start() stop()

// city = "pune"
// console.log(typeof city)

// // object   ----> property , method
// let x = city.length
// console.log(x)

// let fruit = "Mango"
// // String stores the value by index

// //   0  1  2  3  4
// //   M  a  n  g  o

// let aa = fruit.length
// console.log(aa)
// console.log(typeof aa)

// // More about string

// let vegetable = "tomato"

// //    0   1   2   3   4  5
// //    t   o   m   a   t  o

// console.log(vegetable[0])
// console.log(vegetable[vegetable.length-1])
// // length-1 is last index

// let fullName2 = "amol"

// // 0   1   2   3
// // a   m   o   l
// // console.log(fullName2[0])
// // console.log(fullName2.length)


// // for(let i = 0 ; i < 4 ;i++){ // 1 2 3 4

// //     console.log(i)// 0 , 1 ,2 ,3

// // }


// // for(intialization;conditionCheck;increment/decrement){
// //     //statements
// // }



// // for(let i = 2 ; i < 5 ; i++){ // 3 , 4 ,5

// //     console.log(i) // 2  , 3 , 4

// // }


// let rrrr = "amit"
// //    0   1   2  3
// //    a   m   i  t

// // console.log(rrr.length)
// //console.log(rrrr[0])

// for(let i = 0 ; i < 4 ; i++ ){
//     //console.log(i) 0 , 1 , 2 ,3
//     console.log(rrrr[i])
// }

// console.log('reversed --------')

// for(let i = 3 ; i >= 0  ; i-- ){ //2 //1 // 0 // -1
//     //console.log(i)  // 3  , 2  , 1 ,0
//     console.log(rrrr[i])
// }


let city = "pune"
console.log(typeof city)
console.log(city)



// string object ---

// property and method
// string stores the value by index


let fruit = "Mango"

//  0  1  2  3  4
//  M  a  n  g  o

console.log(fruit[0])

// object -- property and method
// human --- weigth , heigh , age 
// method -- talk walk()

// vehicle -- object
// property -- color , regNo 
// method -- start(), stop()

fruit = "Mango"
let aaa = fruit.length
console.log(aaa)
console.log(typeof aaa)

// loop

console.log(fruit[0]) // M
console.log(fruit[fruit.length - 1]) //o
// length -1 will be the last index


let fullName = "amol"

//   0  1  2  3
//   a  m  o  l  

//console.log(fullName[0])

for (let x = 0; x < 4; x++) { //1,2,3,4
    //console.log(x) //  0 , 1 ,2 ,3
    console.log(fullName[x])

}
// reverse 

for (let x = 3; x >= 0; x--) { // 2 1 0 -1
    //console.log(x)  //  3 ,2 ,1 , 0
    console.log(fullName[x])

}


// Every in js is object 

// object has property and method

// method has action and return type

fullName = "amol"
console.log(fullName.length)

// Methods

// Method -- action (gym -- weight lift ----> muscles)


let vegetable = "tomato"

//    0   1  2  3  4   5
//    t   o  m  a  t   o

let bbb = vegetable.toUpperCase()
// action -- converts every character of string into Uppercase
// return type string
console.log(bbb)
console.log(typeof bbb)

// toLowerCase()
// action -- convert every character lower 
// return -- string

let flower = "Lily"
let ccc = flower.toLowerCase()
console.log(ccc) // lily
console.log(typeof ccc)

// Method

let fullN = "Chinmay"
let fff = fullN.toLowerCase().toUpperCase().length
console.log(fff)

// toUppercase() , toLowerCase(0)

let citie = "pune"

// 0 1 2 3
// P u n e

let iii = citie.indexOf("E")
// action --- find index of passed parameter 
// return type --  number 
// return index number if character is found else return -1
console.log(iii)


// includes()

// action - search the substring 
// if found returns true else value 
// return type - Boolean

let ddd = citie.includes("puN")
console.log(ddd)







