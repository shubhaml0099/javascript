

// function declaration
function add(){
    console.log(7+7)
}
add()
add()
add()
add()

// parameter 
function sub(x,y){
    console.log(x-y)
}
sub(100,50)
sub(1000,50)

// function with parameter and return 

function mul(x,y){
    return x * y  // 12*12
}
let a = mul(12,12)
console.log(a)
console.log(a+a)
console.log(a*0.10)

// ---------------------------------------------> 


// 1) Function declaration 



// 3) Arrow function  


// function addA(x,y){
//     return x + y
// }
// let aa = addA(12,13)
// console.log(aa)


// 2) Function expression 

//let x = 10

let addB  = function (x,y){
    return x + y
}
let aaa = addB(12,13)
console.log(aaa)
console.log(addB)

// arrow function

// let addC =  (x,y)=>{
//     return x + y
// }
// let aaaa = addC(12,13)
// console.log(aaaa)

// Same as above

// let addC =  (x,y)=>x + y
// let aaaa = addC(12,13)
// console.log(aaaa)

//---------------------------------------------<



// function subA(x,y){
//     return x - y
// }

// let subA = function(x,y){
//     return x - y
// }

// let x = 10
//console.log(x)
//console.log(subA)


// function subtraction(x,y,fn){

//     //let x = 5
//     //let y = 10
//     //let fn = function(x,y){
// //     return 10 - 5
// // }

//     let r = fn(x,y)    // 5
//     return r   // 5

// }

// let rr = subtraction(10,5,subA) 
// console.log(rr) 











// let d = subA(100,20)
// console.log(d)
























