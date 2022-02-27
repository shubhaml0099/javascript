let namee = "chinmay"
console.log(typeof namee)
console.log(namee)

// String stores the value by index


let city = "Pune"

//     0  1  2  3
//     P  u  n  e

console.log(city[0])
console.log(city[city.length-1])

// for(let i = 0 ; i < 4 ;i++){ // 1 // 2 // 3 // 4
//     //console.log(i) // 0  , 1 , 2 , 3
//     console.log(city[i])
// }

// console.log('Rversed string')

// for(let i = city.length-1 ; i >= 0 ;i--){ // 1 // 2 // 3 // 4
//     //console.log(i) // 3,2,1,0
//     console.log(city[i])
// }


// p
// u 
// n 
// e

//e
//n
//u
//p


// printing the string in reversed order


city = "jaipur"

// "rupiaj"
// "jaipur"

let rev = ""

for(let i = 0 ; i < city.length ; i++){
    rev = city[i] + rev
 // 1st -->   j + " "   =====> j
 // 2nd ===>  a + j     ======> rupiaj  
}

console.log(rev)

// 2nd method

// rev = ""
// for(let i = city.length-1 ; i >= 0  ; i--){
//     rev =   city[i] + rev
//     rev =   rev + city[i]

// // 1st     "" +  r  ==> r  
// // 2nd     u + r   ===> jaipur

// }

// console.log(rev)

// every things in js object 
// objects have properties and method
// method -- actions and return type


// toLowerCase()
// toUpperCase()
// indexOf()
// Slice()

let fruit = "Mango"
let aaa = fruit.toUpperCase()
console.log(aaa)
console.log(typeof aaa)


fruit = "Mango"
let bbb = fruit.toLowerCase()
console.log(bbb)
console.log(typeof bbb)



fruit = "Mangoa"
let yyy = fruit.indexOf("m")
console.log(yyy)
let ggg = fruit.indexOf("M")
console.log(ggg)

let rrr = fruit.lastIndexOf('a')
console.log(rrr)


// slice 

//     0      1     2       3
//     A      m     o       l
//    -4     -3    -2      -1

// let ab = "amol"
// let rrrr = ab.slice(0)//
// let rrrrb = ab.slice(0,3)//
// let rrrrc = ab.slice(-3)//
// let rrrrd = ab.slice(-3,3)//
// let rrrre = ab.slice(-2,-3)//
// console.log(rrrre)


// includes 
// action - to search the substring 
// return type - boolean val


let fruitaa = "Mango Banana Grapes Potato Tamato Brinjal"
let qqqq = fruitaa.includes("mango")
console.log(qqqq)


// chatAt

// action - search the char by index
// return type ==> strinf

let veg = "tomato"
let iii = veg.charAt(4)
console.log(iii)

// action

// split the string as element of array 
// return type -- array

let tttt = veg.charCodeAt(3)
console.log(tttt)
let fulName = "chinmay deshpande"
let haaa = fulName.split("a")
console.log(haaa)
//["chinm", "y deshp" ,"nde"]


//   string + number ====>  string 
//   number + string ====>  string
//   number + number   ====> number 
//   string + string   ====> string


let a = 10 
let b = 20 
let c= "hello"
console.log(a+c+b) // 10 + "hello" ====>  "10hello" + 20 ===> "10hello20"
console.log(a+b+c)  //  30 + "hello"  ==> 30hello
console.log(c+a+b)  //  "hello10" + 20  ==> "hello1020"


































