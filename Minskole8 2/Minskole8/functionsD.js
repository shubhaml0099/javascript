
// // // data ----> string ,object , array 


// // let x = 10

// // let y = x 

// // console.log(x) // 10
// // console.log(y) // 10

// // y = 100

// // console.log(x) // 10
// // console.log(y) // 100

// // // --------------------->

// // let r = [11,22,33,44]
// // let ra = r

// // ra[0] = 500

// // console.log(ra) //
// // console.log(r)//

// // //------------------------>

// // let hum = {

// //     fullName:"chinmay",
// //     age:23
// // }

// // let per = hum

// // per['language'] = "hindi"
// // console.log(per)
// // console.log(hum)

// //------------------------------------>

// let x = 10
// let y = 20


// console.log(x + y)
// console.log(x - y)
// console.log(x / y)
// console.log(x * y)
// console.log(x / y)


// let r = 10
// let t = 20

// console.log(r + t)
// console.log(r - t)
// console.log(r / t)
// console.log(r * t)
// console.log(r % t)


// function calculator(a, b) {
//     console.log(a + b)
//     console.log(a - b)
//     console.log(a / b)
//     console.log(a * b)
//     console.log(a % b)
// }

// calculator(12, 13)
// console.log('---------')
// calculator(35, 35)


// //------------------------------->


// // without parameter and without return type 

// // function add(){
// //     console.log(8+9)
// // }
// // add()
// // add()

// // // with parameter and  without return type

// // function sub(x,y){
// //     console.log(x-y)
// // }
// // sub(200,50)
// // sub(300,20)

// // // with parameter and with return type 

// // function mul(x,y){
// //     return x*y
// // }
// // let rrr = mul(12,13)
// // console.log(rrr)
// // console.log(rrr+100)

// //----------------------------->

// //function declartion
// // function expression 
// // arrow function


// //  1) function declartion

// // function add(x,y){
// //     return x+y

// // }
// // let aaaa = add(100,50)
// // console.log(aaaa)

// // 2 function expression

// // let add = function(x,y){
// //     return x+y

// // }
// // let aaaa = add(100,50)
// // console.log(aaaa)


// // arrow function

// // let add = (x,y) => {
// //     return x+y

// // }
// // let aaaa = add(100,50)
// // console.log(aaaa)

// // let add = (x,y) => x+y
// // let aaaa = add(100,50)
// // console.log(aaaa)


// // let add = function (x, y) {
// //     console.log(x + y)
// // }
// // console.log(add) // printing funcion body
// // add(10,20) // calling






// let add = function(x,y){
//     return x+y
// }


// // let x = 10
// //console.log(x) // 10


// // value of add

// // function(x,y){
// //     return x+y
// // }


// // let fn = function(x,y){
// //     return x+y
// // }


// function addition(fn){
//     let a = fn(12,13)
//     return a
// }

// let iii = addition(add)
// console.log(iii)

//console.log(add)


// function array 

// function obj 

// function string 

// function boolena zs

// let x = 10
// let y = x 
// x = 30
// console.log(x)  // 30
// console.log(y) // 10

//--------------------------->

// object does not store duplicate value


let person = {

    fullName:"chinmay deshpande",
    age:31,
    fullName:"chinmay shirish deshpande"

}

console.log(person.fullName) // "chinmay shirish deshpande"

let personA = person
person.age = 33
person.fullName = "chinmay shirish manoharao deshpande"

console.log(person.fullName) //  "chinmay shirish manoharao deshpande"
console.log(personA.fullName)// "chinmay shirish manoharao deshpande"
console.log(person.age) // 33
console.log(personA.age)// 33


// funtion as parameter 


let add = function(x,y){
    return x+y
}
// let r = add(12,14)
// console.log(r)

//console.log(add)

// let fn = function(x,y){
//     return x+y
// }

function addition(fn){
    let dd = fn(12,13)
    return  dd
}

let ddd = addition(add)
console.log(ddd) // 25

//------------------------------>
//arr as  parameter to function

let numbersA = [11,22,33]
let numbersB = [22,33,44]

function sumAllElement(arr){
    let sum = arr.reduce(function(acc,el){
        return acc + el
    })
    return sum
}
let sum = sumAllElement(numbersA)
console.log(sum)

let sumtwo = sumAllElement(numbersB)
console.log(sumtwo)

// object as  parameter to function 


let info = {
    fullName:"chinmay deshpande",
    age:12,
    skills:["python",'c++','java']
}


function printAllInfo(obj){
    // print every property value --
    // return skills length

    for(let key in obj){
        console.log(`${key}:${obj[key]}`)
    }
    return obj.skills.length

}
let noSkills = printAllInfo(info)
console.log(noSkills)

// js ---- property and method.. array object ---- length , push pop

// utility and code refactor


function greet(name){
    return `welcome ${name}` 
}

let ffffa = greet("chinmay")
console.log(ffffa)







let birthYear = [2001,2002,2003,2004]
let discount = [100,200,188,198] 
let ageCurr = [11,22,33,44,55]
//[90,180,.....]
function printArray(arr,fn){
    let arrNew = []
    for(let i = 0 ; i < arr.length;i++){
        let val = fn(arr[i])
        arrNew.push(val)
    }
    return arrNew

}

function calAge(el){
    return 2021 -el
}

function addFive(el){
    return el + 5
}

function calTenPer(el){
    return el - el * 0.10

}

let ages = printArray(birthYear,calAge)
console.log(ages)

let discounted = printArray(discount,calTenPer)
console.log(discounted)


let furAge = printArray(ageCurr,addFive)
console.log(furAge)







