
console.log('day4th Function type')



console.log('function with parameter,without ritun')

function calculator(x, y) {
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
}
calculator(2, 4)

calculator(30, 10)
calculator(20, 30)

console.log("function with parra with retun")

function call(x, y) {
    console.log(x + y)
    return (x, y)
}

let phone = call(2, 8)
console.log(phone)
console.log(phone + 8)
console.log(phone - 2)
console.log(phone * 8)
console.log(phone % 2)
console.log(phone / 2)

function shub(a, b) {
    console.log(a + b)
    console.log(a - b)
    console.log(a * b)
    return (a, b)

}
let raj = shub(10, 20)
console.log(raj + 2)


// function decliration 

function add(x,y){
    return (x+y)

}
let ww = add(10,20)
console.log(ww)


//("Expretion  function")//

let rams = function(x,y){
    return x+y
}
let ram=rams(20,30)
console.log(ram)
console.log(ram + 10) 


//("arrow function")//


let om = (n, p)=> {
    return (n + p)
}
let ox = om(10, 2)
console.log(ox)
console.log(ox + 5)


// practice on above function//

//decliration function code//

function shub(x, y) {
    return x + y
}
let raj = shub(10, 20)
console.log(raj)
console.log(raj + 300)

//function experation code//

let shu = function(x,y){
    x=10
    y=20
    return (x+y)
}

console.log(shu)

//function arrow code//

let shubham = (a, b) => {
    return (a + b)

}
let ram = shubham(10, 20)
console.log(ram)


console.log("shubham langote")


//decliration //

function rr(x, p) {
    return x + p
}
let pp = rr(10, 20)
console.log(pp)

console.log("hello")
//experation//
let xx = 10 + 200
let ww = (xx)
console.log(xx + 10)
console.log(xx)

console.log('shubham langote')

//arrow //

let ss = (n, p) => {
    return (n + p)
}
let dd = ss(2, 3)
console.log(dd)


console.log("shubham langote")
