

//arrow function 
let ss=sum(10,2)
function sum(x,y){
    return x*y
}


console.log(ss)

// function expression 

let sum1 = function(){
    return x+y
}

// function decliration 

function sum2(){
    return x+y
}

// what is call back finction 
// ==> one function pass as argument or as parametar to another function call as cal back function 
// ==>> why call back function require ==>> 


function add2(){
    console.log('hello')
}
function add(x,y,fn){
    console.log(x+y)
    fn()
}
add(2,5,add2)