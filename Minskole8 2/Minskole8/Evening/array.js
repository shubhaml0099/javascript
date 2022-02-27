
// Object ,, methods and properties 

// string 

let names = ["chinmay","deshpande",true,23,[12,33,44,55]]
let fruits = ["mango",'banana','grapes','chiku','papaya']

// array stores the value by index

console.log(fruits[0]) // "mango"
console.log(fruits[fruits.length-1]) //"papaya"

// for loop 

for(let i = 0 ; i < fruits.length ; i++){
    console.log(fruits[i])
}

console.log('---------------------------')

for(let i = fruits.length-1 ; i >= 0 ; i--){
    console.log(fruits[i])
}
// properties and methods

// 23 methods


//  method ------ methodName -----> action ------> return 
fruits = ["mango",'banana','grapes','chiku','papaya']

let qqq = fruits.push("berry")
console.log(qqq)
console.log(fruits )


fruits = ["mango",'banana','grapes','chiku','papaya']
let qqqa = fruits.pop()
console.log(qqqa)
console.log(fruits)


fruits = ["mango",'banana','grapes','chiku','papaya']
let qqqc = fruits.unshift("dragon fruit")
console.log(qqqc)
console.log(fruits)


fruits = ["mango",'banana','grapes','chiku','papaya']
let qqqd = fruits.shift()
console.log(qqqd)
console.log(fruits)

// includes 
// action to check whether the element is present or not 
// return boolean ---

fruits = ["mango",'banana','grapes','chiku','papaya']
let qqqe = fruits.includes('mango')
console.log(qqqe)

// indexOf

fruits = ["mango",'banana','grapes','chiku','papaya']
let qqqf = fruits.indexOf('grapes')
console.log(qqqf)

// reverse 
fruits = ["mango",'banana','grapes','chiku','papaya',"apple"]
let qqqg = fruits.reverse()
console.log(qqqg)

// sort 
fruits = ["mango",'banana','grapes','chiku','papaya',"apple"]
let qqqt = fruits.sort()
console.log(qqqt)

// slice 
//            0        1        2        3       4
fruits = ["mango",'banana','grapes','chiku','papaya']
//           -5      -4       -3       -2       -1

console.log(fruits.slice(2))
console.log(fruits.slice(-4))
console.log(fruits.slice(1,4))
console.log(fruits.slice(-5,2))
console.log(fruits.slice(-2,1))

let numbers = [[1,2,3],[4,5,6],[11,22,33]]

// [1,2,3,4,5,6,11,22,33]

console.log(numbers[0][0]) // [1,2,3] 
console.log(numbers[0][1])
console.log(numbers[2][1])
let arrA = numbers.flat()
console.log(arrA)

// concat 

let numA = [1,3,4]
let numB = [5,6,7]

let rra = numA.concat(numB)
console.log(rra)

let rrb = numB.concat(numA)
console.log(rrb)

// let info = ["chinmay","shirsh","deshpande"]
// let rrrr = info.join("-")
// let rrrb = rrrr.split('-')
// console.log(rrrb)
// "chinmay-deshpande-7709192441".split('-')  //["chinmay","deshapnde","7709192441"]
// ["chinmay","deshapnde","7709192441"].join('-') // "chinmay-deshpande-7709192441"






// array ---



// function findIndex(arr,el){

//     if(arr.includes(el)){
//         return "find"
//     }
//     else {
//         return -2
//     }

// }
// let r = findIndex(fruits ,"Mango")
// console.log(r)

// forEach ,filter,map,reduce,every,some

//                0     1    2    3
let birthYear = [2000,1998,1989,2007]
let ages = [] // [21,23,32,14]

// [21,23,32,14]
// [2021-2000,2021-1998,2021-1989,2021-2007]

for(let i = 0 ; i < birthYear.length ; i++){
    let age = 2021-birthYear[i]  // 2021- 2000
    ages.push(age)
}

console.log(ages)


let marks = [22,33,44,55,66,77,88,23,33,44]
// [55,66,77,88]
let above50 = []

for(let i = 0 ; i < marks.length ; i++){
    if(marks[i] > 50){
        above50.push(marks[i])

    }
}
console.log(above50)

// ------------------------>
let numberss = [11,22,33]  // 66
let sum = 0

for(let i = 0 ; i < numberss.length ; i++){
    sum = sum + numberss[i]
    //     0   +  11 //  ==> 11 
    //     11   + 22 //  ===> 33
    //     33   + 33 // ====> 66

}
console.log(sum)

let namess = ["chinmay","poorva","ram","mate","john"]
for(let i = 0 ; i < namess.length ;i++){
    console.log(`welcome ${namess[i]}`)
}


// "welcome chinmay !"
// "welcome poorva !"
// "welcome ram !"

//------------------------------------>

let birthYear2 = [2000,1998,1989,2007]
let ages2 = [] // [21,23,32,14]

// [21,23,32,14]
// [2021-2000,2021-1998,2021-1989,2021-2007]

for(let i = 0 ; i < birthYear2.length ; i++){
    let age = 2021-birthYear2[i]  // 2021- 2000
    ages2.push(age)
}

console.log(ages2)

// map 
// Method -- action -- works with every element of array
// return array

let eee = birthYear2.map(function(el){
    //console.log(el,index,arr)
    return 2021 - el // 2021-2000

})
console.log(eee)

let bbb = [11,22,33]
// [13,24,35]

let lll = bbb.map(function(el,index,arr){
    return el + 2
})
console.log(lll)


let marks2 = [22,33,44,55,66,77,88,23,33,44]
// [55,66,77,88]
let above502 = []

for(let i = 0 ; i < marks.length ; i++){
    if(marks2[i] > 50){
        above502.push(marks2[i])

    }
}
console.log(above502)

let qqqq = marks2.filter(function(el,index,arr){
    return el > 50
})
console.log(qqqq)
































