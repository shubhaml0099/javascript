


// program 1
// finding duplicate no by using indexOf method 

let number = [12,13,14,15,12,14,2,4,2]
let duplicate = []

for(let i=0; i<number.length;i++){
    if(duplicate.indexOf(number[i])<0){
        duplicate.push(number[i])
    }
}
console.log(duplicate)

// program 2

// finding duplicate by using filter 

number = [12,13,14,15,12,14,2,4,2]
 duplicate = []

let dup = number.filter(function(el,index){
    return number.indexOf(el)==index
})
console.log(dup)


// program 3 finding duplicate by using includes

let arr = [12,22,12,33,44,22,55,66,44]
let arr2 = [] // [12,22]

for(let i=0; i<arr.length; i++){
    if(!arr2.includes(arr[i])){
        arr2.push(arr[i])
    }
}
console.log(arr2)



// program 4   remove negative number

let cash = [10,20,30,40,-20,40,5,-30,-10]

amount=cash.filter((el,index)=>{
     return el>=0
}).reduce((acc,el)=>{
    return acc+el
},0)
console.log(amount)

withdrol=cash.filter((el,index)=>{
    return el<0
}).reduce((acc,el)=>{
   return acc+el
},0)
console.log(withdrol)


// let h = arr.filter(function(el,index){
//     return arr.indexOf(el) == index
// })

// console.log(h)


// program 2
// for(let i = 0 ; i < arr.length ;i++){

//     if(arr2.indexOf(arr[i])<0){
//         arr2.push(arr[i])
//     }

// }
// console.log(arr2)

// console.log(arr.indexOf(123)) // -1
// console.log(arr.indexOf(12))


// program1 

// console.log(arr.includes(122))
// for(let i = 0 ; i < arr.length ; i++){
//     if(!arr2.includes(arr[i])){
//         arr2.push(arr[i])
//     }
// }

// console.log(arr2)



// // program 4

// let array2 = [12,14,5,-56,22,12,-23]
// let array3 = []


// for(let i = 0 ; i < array2.length ; i++){
//     if(array2[i] > 0){
//         array3.push(array2[i])
//     }
// }
// console.log(array3 )
// let array4 = array2.filter(function(el){
//     return el > 0
// })
// console.log(array4)

// // program 5 
// let y = [11,22,-33,55,66,77,-44,66,-22]

// let ra =  y.filter(function(el){
//     return el > 0
// }).reduce(function(acc,el){
//     return acc + el
// },0)

// console.log(ra)

// let ray =  y.filter(function(el){
//     return el < 0
// }).reduce(function(acc,el){
//     return acc + el
// },0)

// console.log(ray)