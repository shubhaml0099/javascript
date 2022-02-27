// javascript -----> 71 %
// javascript --- cypress --->
// UI , API , Data 
// Js 
// let x = 10  // (Number) // +ve , -ve , 12.3
// console.log(typeof x)
// console.log(x)


let y = true
console.log(typeof y) // true or false
console.log(y)


let g = 100
g = 300
console.log(g)


// const ii = 100
// ii=200
// consle.log(ii)


// let const var


// --------------- String -----------------------
let fullName = "chinmay"
console.log(typeof fullName) // string
console.log(fullName) // "chinmay"

// Every thing in js is object 
// object  (property and methods)

// human ---

// property ---- age , height ,weight ,color , name
// method --- walk() talk()


// object -- vehicle --- property and method
// property color , type , regNo
// method -- start() , method()

let city = "pune"
console.log(city)
console.log(typeof city) // string 
console.log(typeof city[0])// string
//   0  1  2  3
//   p  u  n  e
console.log(typeof city[0])


// object -- property and method

let aaa = city.length
console.log(aaa)
console.log(typeof aaa) // number

// Return type --- number string

// Methods

let fruit = "Mango"
console.log(fruit.length)
//   0   1  2  3  4
//   M   A  N  G  O

console.log(fruit[0]) // M
console.log(fruit[4]) // 0
console.log(typeof "M")
// Length -1 will the lastid
console.log(fruit[fruit.length - 1])//O


// Method

// action ----->
// return 


let vegetable = "carrot"

let ccc = vegetable.toUpperCase()

// action ---> coverts every character into upperCase 
// return -- string

console.log(ccc)
console.log(typeof ccc)


// toLowerCase()
// action --->  converts every character into lowerCase()
// return ---> string

let animal = "Tiger"
let ddd = animal.toLowerCase()
console.log(ddd) // "tiger"
console.log(typeof ddd) // string

//------------------>
let d = animal.toLowerCase().toUpperCase().length
console.log(d)

//----------------->

// Minskole --- 6 month 26 ---> 6 lakh ----
// process ---> support ---> laptop
// 3 months

// 6 month

//js   - 4 projects

// ES6

// Typescript 

//cypress - projects 

//git

//Devops  - jenkins

//AWS -s3

//Jira (x- plugin)



// dec --- sql -  support ---> 
// string concatination 

// string

// javscript --->

// scripting 

// cypress automatio  ---> js 


//---------------- DAY-2---------------

let x = 10
x = 23
console.log(x)
console.log(typeof x)


x = "pune"
console.log(typeof x)


x = true
console.log(typeof x)


// object --->  property and methods

let city2 = "pune"
console.log(typeof city)
console.log(city2[0])

// String stores the value by index

//   0   1   2   3
//   p   u   n   e

console.log(city2[city.length - 1])
console.log(city2.length)

// objects --- property and method 
// string --- object (Every thing in js is object)


let country2 = "united states"

let aaaa = country2.length
console.log(typeof aaaa)
console.log(aaaa)


// methods 

// action  --> turns every chracter into uppercase
// return type --> strinf

let bbbb = country2.toUpperCase()
console.log(bbbb)
console.log(typeof bbbb)

// functions and methods

// object -- methods 
// functions 



// object -- property and method

// method -- action return 

let city3 = "pune"

// property

let rrrrr = city3.length
console.log(typeof rrrrr)
console.log(rrrrr)

// method

let reee = city3.toUpperCase()
//action - capital   ==> PUNE
//return  string 
console.log(reee)
console.log(typeof reee)



//--------------------------->


let fruit2 = "mango"

// 0 1 2 3 4
// m a n g o 

console.log(fruit2[0])
console.log(fruit2[fruit2.length - 1])
//length -1 is the last index


// for(intialization;conditionCheck;increment/Decrement){

    //statements 

// }
//   0 1 2 3 4 5 6
//   c h i n m a y

fruit2 = "pune"
//console.log(fruit2[1])

for (let i = 0; i < fruit2.length; i++) { //1 // 2 // 3
    //console.log(i) // 0 , 1 ,2
    console.log(fruit2[i])
}

console.log('-----reverse------')

// print the character in reverse
// 0 1 2 3
// p u n e

fruit2 = "pune"
for (let i = 3 ; i >= 0; i--) { //-1
    //console.log(i) //
    console.log(fruit2[i])
}

//------------------------------->


let fname = "chinmay"
//  0      1    2   3   4   5   6
//  c      h    i   n   m   a   y
//  -7    -6   -5  -4  -3  -2  -1

let jjjj = fname.slice(4,fname.length)
console.log(jjjj)

console.log(fname.slice(3))
console.log(fname.slice(4))
console.log(fname.slice(-4))
console.log(fname.slice(2,5))
console.log(fname.slice(-6,5))

// end position should be ahead of start position
console.log(fname.slice(-2,-6))
console.log(fname.slice(-2,6))
console.log(fname.slice(1,-1))




//fname.slice(startposition, endposition)





































