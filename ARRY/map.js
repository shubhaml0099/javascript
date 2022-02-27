//arry --->map concept 
function add(){
    console.log (2+3)
}
add()


// function decliration//

function shub(x,y){
    return(x*y)
}
let ss = shub(4,3)
console.log(ss)

// function expretion //
let shub1 = function(x,y){
    return(x*y)
}
let ss1 = shub(3,2) 
console.log(ss1)

// arrow function//
let shub2 = (x,y) =>{
    return(x+y)
}
let ss2 = shub2(3,2)
console.log(ss2)

//-------------------------->-------------->

//function substraction  //

// function substraction(x,y,fn){
//    r=fn(x,y)
//    return r
//             }
//    let ss1=substraction(argument ,argument,sub function)
//      console.log(ss1)


function substraction(x,y,fn){
let r = fn(x,y)
 return r
}
let ss3 = substraction(4,6,shub2)
console.log(ss3)  //  10 ans is comes

let ss4 = substraction(3,6,shub1)
console.log(ss4)
                                        ///why need to use substractionfunction 
//---------------------------------------->>----------->

// arry ===> map ===> call back function

let yogi = [24,55,65,73,30,78,98,99,90,79]
let y = yogi.map(function(CurrentElement,index,Arry){
    return CurrentElement + 2
})
console.log(y)

let cars = ['hundai','creata','alto','nissan','xuv',143]
let car1 = cars.map(function(el,index,arry){
    return el+2

})
console.log(car1)


//---------------->>----------------------------------------------->>

let birthyear = [2003,2005,2007,2009,2000]
let currentages = []
for (let i=0;i<birthyear.length;i++){
    let age=2021-birthyear[i]
currentages.push(age)
}
console.log(currentages)

let xx=birthyear.map(function(el,index,arry){
    return 2021-el
})
console.log(xx)

//---------------------------------------------->>
let raj=[29,2,32,67,86,77,89,90,55,43]
let rr=raj.map(function(ei,index,arry){
    return ei+2
})
console.log(rr)


//----------------------------->>----function substraction

// function substraction(x,y,fn){
//    r=fn(x,y)
//    return r
//             }
//    let ss1=substraction(argument ,argument,sub function)
//      console.log(ss1)


let qq=function(x,y){
    return x**y
}

function dd1(x,y,fn){
    ww=fn(x,y)
    return ww
}
let ww1=dd1(2,3,qq)
console.log(ww1)

