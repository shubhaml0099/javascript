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


let DDD=getDate()
console.log(DDD)