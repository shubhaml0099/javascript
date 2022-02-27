// Array

let x = 10

let numbers = [11,22,33,44]

// Array stores the value by index

// 0  1  2  3
//[11,22,33,44]

console.log(numbers[0])
console.log(numbers[1])


// program 2 
//              0         1         2       3         4
let names = ["chinmay","sarika","poorva","pranali","mayuri"]
//console.log(names[0])


// loop 

for(let i = 0 ; i < 5 ; i++){
     //console.log(i)
    // 1st Loop  i = 0
    // 1st Loop  i = 1
    // 1st Loop  i = 2
    // 1st Loop  i = 3
    // 1st Loop  i = 4

    console.log(names[i])
     

}

// program 3 

//   Object ===>  Property and Method 

// Human  -- 
// Property and Method
// Property - Weight , Height , Color 
// Method - Talk() , Walk(), Sleep()

// Vehicle --
// Property - Color , RegistrationNo
// Method -- Start() Stop()

// BankAcc 
// Property and Method
// Property - Accno , AccName, Bal
// Method - Depoist(),Withdrawl()


// Every in js is object 
// So Array is also Object 
// If Array is object it will have property and method 

//              0       1        2       3
let fruits = ["Apple","Mango","Banan","Grapes"]

// property --
let no = fruits.length
console.log(no)

// method -
//function -- object connected ===> method

// user defined function 
// function addition(x,y){
//     console.log(x+y)
//     return "hello"
// }
// let a = addition(12,13)
// console.log(a)

fruits = ["Apple","Mango","Banan","Grapes"]

let b = fruits.length
console.log(b)

// Method --> workout
// action --------   weight lift
// return type ----  muscle


let city = ["pune","mumbai","nagpur","jaipur"]

// Method - push()
// action - add the element to the last 
// return  - new length of array

let aa = city.push("bhopal")
console.log(aa)
console.log(city)

// Method - unshift()
// action - add the element to start or array or at index 0
// return  - new length of array

//[ 'pune', 'mumbai', 'nagpur', 'jaipur', 'bhopal' ]

let bb = city.unshift('varasani')
console.log(bb)
console.log(city)


//[ 'varasani', 'pune', 'mumbai', 'nagpur', 'jaipur', 'bhopal' ]
// Method - pop()
// action - removes the element from the last
// return  - return the same element

let cc = city.pop()
console.log(cc)
console.log(city)

//[ 'varasani', 'pune', 'mumbai', 'nagpur', 'jaipur' ]
// Method - shift()
// action - removes the element from the first
// return  - return the same element

let dd = city.shift()
console.log(dd)
console.log(city)

//Revision - push() , pop() ,shift() ,unshift()
//[ 'pune', 'mumbai', 'nagpur', 'jaipur' ]

let country = ["India","USA","Japan","China"]

// Method - indexOf()
// action - search the for element
// return  - return the index if element ,else it will return -1

let ee = country.indexOf('India')
console.log(ee) // 0
console.log(country) //["India","USA","Japan","China"]

let ff = country.indexOf('india')
console.log(ff) // 0


// Method - includes()
// action - search the for element
// return  - if the element is found returns true else return false

let gg = country.includes('USA')
console.log(gg)

let hh = country.includes('Pakistan')
console.log(hh)

// Method - slice()
// action - divides the array based on index
// return  - array

//    0     1      2        3
//["India","USA","Japan","China"]
//  -4      -3    -2       -1

//arrName.slice(startPosition,Endposition(not inclusive))

let arrOne = country.slice(1)
console.log(arrOne)


let arrTwo = country.slice(-3)
console.log(arrTwo)


let arrThree = country.slice(1,3)
console.log(arrThree)

let arrFour = country.slice(0,3)
console.log(arrFour)


//    0     1      2        3
//["India","USA","Japan","China"]
//  -4      -3    -2       -1


let arrFive = country.slice(-4,3)
console.log(arrFive)


let arrSix = country.slice(-3,-1)
console.log(arrSix)


let arrSeven = country.slice(-1,-3)
console.log(arrSeven)

// push() pop() shift() unshift() indexOf() includes() slice()

// map() , filter() ,reeduce() , forEach() , some(), every(),find (),findex()

//                0      1    2   3
let birthYear = [2000, 1999,1998,1989]
//output//[22,23,24,33]

let calAge = [] // [22,23,24,33]

for(let i = 0 ; i < birthYear.length ;i++){
    //console.log(2022 - birthYear[i])
    let age =  2022 - birthYear[i]
    calAge.push(age)
}
console.log(calAge)

// Method - map()
// Action - works with every element of array
// Return- new Array

// el - currentElement
// index  - index 
// arr - [2000, 1999,1998,1989]


let zz = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2022 - el
})
console.log(zz)


let numbers2 = [11,22,33,44,55]
//[13,24,35,46,57]

let ccc = numbers2.map(function(el){
    return el + 2
})
console.log(ccc)

let fewAge = [44,56,66,77,88,44]
// [66,77,88]
let above60 = [] // [66]
for(let i = 0 ; i < 6; i++){
    //console.log(fewAge[i])
    if(fewAge[i]>60){
        above60.push(fewAge[i])
    }
}

console.log(above60)

// Method - filter 
// filter - filter out elements based on condition 
// return - new array

let ddd = fewAge.filter(function(el,index,arr){
    return el > 60
})
console.log(ddd)

let marks = [11,22,33] // 66
let sum = 0

for(let i = 0 ; i < marks.length ; i++){
    sum = sum + marks[i]
 //        0  +   11 //////    11
 //        11 +   22 /////     33
 //         33 +   33 /////    66
 }

 console.log(sum)

 // Method - Reduce 
 // Adds up every element 
 // Return single

 let eee = marks.reduce(function(acc,el,index,arr){
    return acc + el // 22

 },0)
 console.log(eee)

 // map() -- works with every element of array --- new array
 // filter() -- filter out element based on condition - new Array
 // reduce() -- add up every element of arry - single value
 // forEach() 

let namess = ["chinmay","abhisha","komal","mayuri","poorva"]
for(let i = 0 ; i < namess.length ; i++){
    console.log('welcome '+ namess[i])
}

// Method - forEach
// Works with every element of array 
// return - nothing 

namess.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})



let aaaa = [2,3,4]
let baaa = [3,4,5]

let eeeg = aaaa.map(function(el,index,arr){
    return el * baaa[index]
})
console.log(eeeg)


// prime number 
// even odd 
// factorial 
// palindrome
// reverse string