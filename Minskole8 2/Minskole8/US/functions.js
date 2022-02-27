

let person = {
    fullName:"chinmay deshpanbde",
    age:12,
    skills:["python","javascript","cpp"],
    parent:{
        mother:"kanchan",
        father:"shirish"
    }

}

// Retrive
console.log(person.skills[2])
console.log(person.parent.father)
// total skills 
console.log(person.skills.length)

//  update 
person.parent.father = "amol"
console.log(person)

// add 
person.parent.sibling = "gauri"
console.log(person)

// delete
delete person.age
console.log(person)


for(let key in person){
    console.log(key,person[key])
}

//--------------------------------------------------->
//function (declartion)

// function without parameter and without return 

function add(){
    console.log(9+9) //18
}
add()
add()
add()

// function with parameter and without return 

function sub(x,y){
    console.log(x-y) // 6
}
sub(12,6)
sub(20,15)

// 

function mul(x,y){
    console.log(x*y)
    //return x*y
}
let bnm = mul(12,12)
console.log(bnm)
// console.log(bnm + 10) // 154
// console.log(bnm * 0.10)


//---------------------------------_>

let arr = [1,3,4]
let k = arr.push(55) // [1,3,4,55]
console.log(k) //4


// action
// let o = console.log("hello")
// console.log(o)

//----------------------------------------->


// function declaration

// function addition(x,y){
//     return x+y
// }

// let sum = addition(12,13)
// console.log(sum)
// console.log(sum+23)

// function expression

// let addition = function (x,y){
//     return x+y
// }
// let sum = addition(12,13)
// console.log(sum)
// console.log(sum+23)

// arrow function

// let addition =  (x,y)=>{
    
//     console.log(x+y)
//     return x+y
// }
// let sum = addition(12,13)
// console.log(sum)
// console.log(sum+23)



// let addition = (x,y)=>x+y
// let sum = addition(12,13)
// console.log(sum)
// console.log(sum+23)



let numbers = [11,11,12] // 34

// arr as a parameter to another

function addition(arr){

    //let arr = [11,11,12]

    let sum = arr.reduce(function(acc,el){
        return el + acc
    },0)

    return sum


}
let total =addition(numbers)
console.log(total)
















