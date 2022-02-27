

//----------------->>------------
// ----function as parameter to another function 
let rahul = function (a, b) {
    return a + b
}

function sum(fn, x, y) {
    z = fn(x, y)
    return z
}
let ss =sum(rahul,12,10)
console.log(ss)


// ----------arry as a parameter to another function 

let rahul1 = [12,46,73,47,90,56,87,96,87,71,34,]

function addition(arry){
    let total = arry.reduce(function(acc,el){
        return acc + el
    })
    return total
}
let ss2 = addition(rahul1)
console.log(ss2)

function greter50(arry){
    let substraction = arry.filter(function(el,index){
        return el>50
    })
    return substraction
}
let sub = greter50(rahul1)
console.log(sub)

// string as parameter to anothe function

let ss3 = 'alwes happy '
let ss5 = 'same age'

function name(string){
    return `we are all boys are  ${string}`

}
ss4 = name(ss5)
console.log(ss4)

// object as parameter in function 

let shubham ={
    firstName:'shubham langote',
    rollNo: 32,
    class: '12th',
    age:25,
    skill: 'coading'
}

function printObj(obj){
    return obj
}
let dd = printObj(shubham)
console.log(dd)

// now we want to add somting in obj 
shubham.hight=6.8
console.log(dd)

delete shubham.age
console.log(dd)

