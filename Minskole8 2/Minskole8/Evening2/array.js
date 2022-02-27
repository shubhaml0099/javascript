

// let h = 10 
// console.log(h)
// console.log(typeof h)

// // Every object --- property and methods 
// // Methods -- action and return type ()

// //            0       1     2
// let names = ["amol","ram","sham"]
// let numbers = [1,3,4,5,5,6]
// let person = ["chinmay",34,true,[234,66,77]]
// //console.log(names[0])


// let fruits = ["apple","mango","banana"]
// console.log(fruits[0])

// // Object -- method and property 

// let aaa = fruits.length
// console.log(aaa)
// console.log(typeof aaa)

// //------------------------->


// // methods 


// // push() ---
// // action -- add the element at the last 
// // return new length of array 


// let flowers = ["lily","rose","sunflower"]
// let k = flowers.push("jasmine") //4
// console.log(k)// 4
// console.log(flowers) //["lily","rose","sunflower","jasmine"]

// // pop()
// //["lily","rose","sunflower","jasmine"]
// let b = flowers.pop()
// console.log(b) // jasmine
// console.log(flowers) //


// // shift()
// let vegetable = ["brinjal","tomato","potato"]
// // let t = vegetable.shif() //"brinjal"
// // console.log(vegetable) // ["tomato","potato"]


// // unshift()

// let r = vegetable.unshift("cabbage")
// console.log(r) // 4
// console.log(vegetable) // [""]


// // pop() -- removed element 
// // push() -- new length 
// // shift() -- Removed element 
// // Unshift() -- new length


// let numberss = [11,22,33,44]
// console.log(numberss[0]) // 11

// for(let i = 0 ; i < 4 ;i++){  // 1 ----- 4
//     //console.log(i) // 0  , 1, 2 ,3
//     console.log(numberss[i])
// }
//---------------------------------.>----------------------------->


let  arr = [11,22,33,44,55]
//   0 1 2 3 4
//  [1,2,3,4,5]

console.log(arr[0]) // 1
console.log(arr[4])

//--------------------
for(let i = 0 ; i < arr.length ;i++){
    console.log(arr[i])
    //console.log(i)
}
console.log('Reversed array ---------------')
for(let i = arr.length-1 ; i >=0 ; i--){
    console.log(arr[i])
}


//------------------------------>

//Methods

// action 
// return 

let fruits = ["apple","mango","banana"]
let aa = fruits.push("chiku")
console.log(aa) //4
//["apple","mango","banana", "chiku"]

let fruits2 = ["apple","mango","banana"]
let bb = fruits2.pop()
console.log(bb)
console.log(fruits2)

//["apple","mango"]


let fruits3 = ["apple","mango","banana"]
let cc = fruits3.shift()
console.log(cc)
console.log(fruits3)

let fruits4 = ["apple","mango","banana"]
let dd = fruits4.unshift("chiku")
console.log(dd)
console.log(fruits4)

//--------------------------->
         //  0      1      2     3  
let car = ["Audi","BMW","Ford","Skoda"] 
console.table(car)

let rr = car.indexOf("Audi")  // -1
console.log(rr)
console.log(typeof rr)

//----------------------------

let surname = ["deshpande","dani","deshmukh","deshkar"]
let qaq = surname.includes("deshpande")
console.log(typeof qaq)
console.log(qaq)


//pop() ,push(), shit() ,unshift(),includes(),indexOf(),slice()

//       0      1     2      3
car = ["Audi","BMW","Ford","Skoda"] 
//       -4      -3     -2     -1

//car.slice(startpoition,endposition)

let eee = car.slice(2)
console.log(typeof eee)
console.log(eee)

let ddd = car.slice(0)
console.log(ddd)

let hhh = car.slice(1,3)
console.log(hhh)

let lll = car.slice(-4,3)
console.log(lll)

let zzz = car.slice(-4,-2)
console.log(zzz)

let qqq = car.slice(-1,-4)
console.log(qqq)

//---------------------------------->
// 2021 - 1990  // 31


// program 1

let birthYear = [2003,2004,2007,2008]
// [18,17,14,13]

let currentAges = [] 
for(let i = 0 ; i < birthYear.length ; i++){
    let age = 2021 - birthYear[i]
    currentAges.push(age)
}
console.log(currentAges)



// program 2
currentAges = [23,24,55,66,12,34]
// [55,66,34]
let above25 = []

for(let i = 0 ; i < currentAges.length ;i++){
    if(currentAges[i] > 25){
        above25.push(currentAges[i])
    }
}

console.log(above25)

// program 3

let sum = [2,3,4]  // 9
let total = 0


for(let i = 0 ; i < sum.length ; i++){

    total = total + sum[i]

    //        0   +   2    =====> 2
    //        2   +   3    ======> 5
    //        5   +   4    =======>9
}
console.log(total)










// let arr22 = new Array(3)
// arr22[0] = 22
// arr22[1] = 223
// arr22[2] = 223
// arr22[3] = 344

// console.log(arr22[3])





// if(5==='5'){
//     console.log("hello")
// }
// else{
//     console.log("hello2")
// }




let by = [1990,1991,1989]
// [31,30,32]

let ags = []

for(let i = 0 ; i < by.length ;i++){
    let age = 2021 - by[i]
    ags.push(age)

}
console.log(ags)


// array -- map  ==> call back funnction

// map -- action   == > element work 

// return  ===> array

// let iii = by.map(function(currentElement,index,arr){
//     return 2021 - currentElement
// })

// console.log(iii)

// let gaa = [11,22,33] // [13,24,35]

// let qqqa = gaa.map(function(el,index,arr){
//     return el + 2
// })
// console.log(qqqa)

















































// ----------- ARRAY ----------------


// map filter forEach and reduce


let birthYearss = [2001,2003,2004]
let agy = []


for(let i = 0 ; i < birthYearss.length ;i++){
   let age = 2021 - birthYearss[i]
   agy.push(age)
}
console.log(agy)


// map 
let tttt = birthYearss.map(function(el,index,arr){
    return 2021 -el
})
console.log(tttt)


// program - 2 


let av = [23,44,55,66,77]
let grt60 = []
//[66,77]

for(let i = 0 ; i < av.length ; i++){
    if(av[i] > 60){
        grt60.push(av[i])
    }
}
console.log(grt60)

// filter --- array 

let kkk =  av.filter(function(el,index,arr){
    return el > 50 && el <= 60
})
console.log(kkk)


// program - 3


let marks = [11,22,33]
let totala = 0
for(let i = 0 ; i < marks.length ; i++){
    totala = totala + marks[i]  //66
}
console.log(totala)


let ooo = marks.reduce(function(acc,el,index,arr){
    return acc + el //  0 + 11 ===> 66
},0)

console.log(ooo)


// program -4 

let transactions = [500,-250,300,1000,-50,-500]


//  withdrawl addition 
// depoist addition

let depoist = transactions.filter(function(el){
    return el >0
})
let totalDeposit = depoist.reduce(function(acc,el){
    return acc + el

})
console.log(totalDeposit)

// 

let withDrawl = transactions.filter(function(el){
    return el < 0
}) 
// [-500,- 250,-50]
let totalwithDrawl = withDrawl.reduce(function(acc,el){
    return acc + el

})
console.log(totalwithDrawl)

let bills = [10000,5500,4000,3800]

//[9000,.............]


let discountedArray = bills.map(function(el){
    return el - (el* 0.10)  // 3600
})
console.log(discountedArray)



// map filter forEach and reduce

//push()  ---> new length
// pop()  --->  return same length 
// unshift() ---- new length 
// shift() ------ returns 
// indexOf() ----->   index else -1
// includes() ----> boolean
// map() -------> array 
// filter() -----> array 
// reduce() ----> combine
// slice(startposition, endposition ) -----> 
      //    0         1       2
//let rr = ["apple","banana","grapes"].indexOf("Grapes")


// forEach() ===>


let fullName = ["chinmay","ram","sham"]
// welcome chinmay
// welcome  ram 
// welcome sham

// for(let i = 0 ; i < fullName.length ;i++){
//     console.log("welcome "+fullName[i])
// }

// let rrrr = fullName.forEach(function(el,index,arr){
//     console.log("welcome "+el)

// })

// console.log(rrrr)

// let ttt = fullName.forEach(function(el,index,arr){
//     console.log("welcome "+el)
// })
// console.log(ttt)

//-------------------------->

//[22,33,44,55,66,77,88]
// [233,44,55,66,7788,788]

// every() , some()  // boolean (true / false)

// let dda = [9,22,33,44,55,66,77]

// let azaz = dda.every(function(el,index,arr){
//     return el > 10
// })
// console.log(azaz)


// let azaza = dda.some(function(el,index,arr){
//     return el < 8
// })
// console.log(azaza)

// map filter reduce , foreach ,every,some


//  reverse()

let numbers = [11,22,33,44]
let qwertyq = numbers.reverse()
console.log(qwertyq)

// concat()

let aqq = [11,22,33]
let bqq = [44,55,66]
let qaab = bqq.concat(aqq).concat([11,22,33,44])
console.log(qaab)

// join 
// // Method chaining
// let kl = [11,22,33,44,56].filter(function(el){
//     return el > 40
// }).reduce(function(acc,el){
//     return acc + el
// })


let zac = "chinmay-deshpande-7709192441"
console.log(typeof zac)

let cvb = zac.split('-') // ["chinmay", "deshpande" ,"7709192441"]
console.log(cvb)

let wer = zac.split('a')  //  ["chinmay-de" ,"hpande-7709192441"]
console.log(wer)

let zcc = cvb.join('-')
console.log(zcc)


// "chinmay".spilt('a') // ['chinm','y']
//['chinm','y'].join('a')// chinmay


// sort --> 
let names = ["banana","apple","chiku","apqlle"]
let avb = names.sort()
console.log(avb)
console.log([22,33,44,111,333,444,566,77].sort())

// flat  
       //    0        1      2
        //   0 1 2         // 0 1 2
let arry = [[1,2,3],[4,5,6],[7,8,9]]
console.log(arr[0][1]) // [1,2,3]
console.log(arr[2][2])
let qa = arry.flat()
console.log(qa)

// flatmap()


// find , findIndex
//        0  1  2  3  4  5
let nm = [33,44,55,77,88,99]

let rrr = nm.filter(function(el){
    return el > 40
})
//[44,55,77,88,99]

let rrry = nm.find(function(el){
    return el > 40
})
console.log(rrry)

// findIndex

let rrrye = nm.findIndex(function(el){
    return el > 40
})
console.log(rrrye)

// splice, fill 

     //  0   1  2 3  4  5   6  7  8
let arrj = [22,33,44,55,66,77,88,99,100]
let ghgh = arrj
.fill("chinmay",-3)
.fill('a',3,4) // endpoint not included
console.log(ghgh)

// splice

arrj = [22,33,44,55,66,77,88,99,100]
//Array.splice(startposition,numberOfele,re,re)
let zaq = arrj.splice(1,2,"mark","mark2")
console.log(zaq)
console.log(arrj)


//----------------------------------------->

// string , array , functions





























