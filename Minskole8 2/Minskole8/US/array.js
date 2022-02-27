// let arr = [1,2,3]
// let arr2 = ["chinmay","poorva","sarika"]
// let arr3 = ["chinmay",12,true]

// //-------------------------->

// // Everthing in js is object 
// // object have method and properties 
// // method -- action and returntype

// //              0        1        2
// let cities = ["pune","mumbai","banglore"]
// console.log(cities[0])

// // property 
// let aaa = cities.length
// console.log(typeof aaa) // number
// console.log(aaa) // 3


// //---- methods - 23 ------------

// // program One 

// //              0       1       2
// let fruits = ["apple","mango","banana"]
// console.log(fruits[fruits.length -1])// banana
// // length -1 will be the last index
// //console.log(fruits[0])

// // forward loop

// for(let i = 0 ; i  < 3 ;i++){ 
//     //console.log(i) // 0 , 1 ,2
//     console.log(fruits[i]) // 
// }

// console.log('-------------------------')

// // reverse loop 
// for(let i = fruits.length -1 ; i >= 0 ;i--){ 
//     //console.log(i) // 2,1,0
//     console.log(fruits[i]) // 
// }

// // program 2 


// let vegetables = ["tomato","potato","brinjal"]

// // push --  action add the element at last 
// // return type - return new length 

// let bbb = vegetables.push('cabbage')
// console.log(bbb) // 4
// console.log(vegetables)

// // pop()
// // action removes the element from last 
// // returns -

// vegetables = ["tomato","potato","brinjal"]
// let ccc = vegetables.pop()
// console.log(ccc) //"brinjal"
// console.log(vegetables) // ["tomato","potato"]

// // shift()

// vegetables = ["tomato","potato","brinjal"]
// // action - removes the element from the first 
// // return type - element 
// let ddd = vegetables.shift()
// console.log(ddd)
// console.log(vegetables)


// // unshift()
// // action - add the element at beginning 
// // return type - new length

// vegetables = ["tomato","potato","brinjal"]
// let eee = vegetables.unshift("ladyfinger")
// console.log(eee) // 4
// console.log(vegetables)






// // function add(x,y){
// //     console.log(x+y) // 25
// //     return x+y
// // }

// // let g = add(12,13)
// // console.log(g) // 25
// // console.log(g+20)
// // console.log(g * 0.10)


// // Array ----
// //         0         1        2        3

// let h = ["chinmay","poorva","sarika","abhisha"]

// // Everything in js is object 

// // Array is also object 

// // Array will have properties and method


// console.log(h[0]) // chinmay
// console.log(h[1])

// // length  (property)
// console.log(h.length)
// console.log(h[h.length-1])

// // ---------------------->

// // for(let i = 0 ; i < h.length ;i++){
// //     console.log(i)
// //     console(h[i])
// // }

// // for(let i = h.length -1 ; i >= 0 ; i--){
// //     console.log(h[i])
// // }



// // methods :- 

// let fruitss = ["apple","mango","banana"]

// // method --- action --- return 

// // gym -- weight ----- return we get muscle 

// // method action can be return type different 

// let aaaa = fruitss.push("chiku")
// console.log(aaaa)
// console.log(fruitss)

// // pop 
// //action  - removes the element from last and return type ---> return removed element

// fruitss = ["apple","mango","banana"]
// let rrrr = fruitss.pop()
// console.log(rrrr)
// console.log(fruitss)

// // -------------- 
// fruitss = ["apple","mango","banana"]
// let dddd  = fruitss.unshift("grapes")
// console.log(dddd)
// console.log(fruitss)

// // shift()
// fruitss = ["apple","mango","banana"]
// let dddde  = fruitss.shift()
// console.log(dddde)
// console.log(fruitss)

// //--------------------------

// //slice

// //            0       1        2       3       4       5 
// fruits = ["apple","mango","banana","grapes","banana","chiku"]
// //           -6      -5      -4       -3       -2      -1

// // set
// console.log(fruits.length)

// //fruits.slice(startposition,endposition)

// let asas = fruits.slice(1)
// console.log(asas)

// let asas2 = fruits.slice(-3)
// console.log(asas2)

// let asas3 = fruits.slice(1,5)
// console.log(asas3)

// let asas4 = fruits.slice(-5,-2)
// console.log(asas4)

// let asas5 = fruits.slice(-5,5)
// console.log(asas5)

// let asas6 = fruits.slice(-3,-5)
// console.log(asas6)


// // push pop shift unshift slice

// vegetable = ["tomato","banana","brinjal"]

// let hhja = vegetable.indexOf('Tomato')  // 0 , -1
// console.log(hhja) 
// console.log(typeof hhja)


// // includes  -- true / false 

// let jjk = vegetable.includes("Banana")
// console.log(jjk)
// console.log(typeof jjk)

// let vvvv = [22,33,44,55,66,77,88]
// let popa = vvvv.reverse()
// console.log(popa)
// console.log(typeof popa)

// // sort --->

// let namess = ["chinmay","abhisha","ram","gauri"]
// let ttya = namess.sort()
// console.log(ttya)

// //----------------------------

// //concat

// let aq = [1,2,4]
// let qa = [3,"chinmay",5]

// let oop = aq.concat(qa)
// console.log(oop)
// console.log(typeof oop)

// let oop2 = qa.concat(aq)
// console.log(oop2)
// console.log(typeof oop2)

// //--------------------

// //flat()

// let bny = [[1,2,3],[4,5,6],[6,7,8]]
// console.log(bny[0][1]) // [1,2,3]
// console.log(bny[2][2])
// let aqa = bny.flat()
// console.log(aqa)

//----------- 3 example------------->

//    1990 

// 2021 -1990 -- 31

//program 1

// let birthYears = [1990,1991,1994]
// let agesa = []
// //[31,30,27]

// for(let i = 0 ; i < birthYears.length ; i++){
//     //console.log(2021-birthYears[i])
//     let age = 2021-birthYears[i]
//     agesa.push(age)
//     //console.log(agesa) 
// }
//  console.log(agesa)

// program 2

// let lll = [11,22,33,45]
// let above30 = []
// // [33,45]

// for(let i = 0 ; i < lll.length ;i++){
//     if(lll[i] > 30){
//         above30.push(lll[i])

//     }
// }
// console.log(above30)

// function adda(x,y){
//     console.log(x+y)
//     return true
// }

// let qqq = adda(12,13)
// console.log(qqq)


// ------------------------------------------------------


// program 1

let birthYears = [2009, 2008, 2000, 1993, 1994]
let ages3 = []
// [12,13,21,28,27]
// 2021 - 2009  =====> age

for (let i = 0; i < birthYears.length; i++) {
    //console.log(i)
    let age = 2021 - birthYears[i]
    ages3.push(age)
}
console.log(ages3)

// map
// action - works with every element of array 
// return - array

// let qqq = birthYears.map(function(el,index,arr){
//         return 2021 - el
// })
// console.log(qqq)

// let ray = [3,4,5,6]  // [5,6,7,8]

// let ttt = ray.map(function(el,index,arr){
//     return el + 2

// })
// console.log(ttt)


// // program 2

let ages4 = [44,55,66,77,88,11,22,23,56]
//[44,55,66,77,88]

let obovee30 = [] // [44,55,66,77,88]
for(let i = 0 ; i < ages4.length ; i++){
    //console.log(ages4[i])
    if(ages4[i] > 30){
        obovee30.push(ages4[i] )
    }
}
console.log(obovee30)

let iii = ages4.filter(function(el,index, array){
    return el > 30
})
console.log(iii)


// let iiia = ages4.filter(el=> el > 30)
// console.log(iiia)



// 12 to 5.00 am





// // program 3

let  marks = [20,30,50] // 100

let sum = 0

for(let i = 0 ; i <  marks.length ;i++){
    sum = marks[i] + sum   // 100
}
console.log(sum)


// reduce ----> single
let yyyy = marks.reduce(function(acc,el,index,arr){
    return acc + el  // 50
},5)

console.log(yyyy)




// // program 4

// let names = ["nilam","shiwani","chinmay"]
// console.log(names[0])

// // welcome nilam 
// // welcome shiwani 
// // welcome chinmay

// for(let i = 0 ; i < names.length ;i++){
//     console.log("welcome"+" "+names[i])
// }



let arr = [22,33,44]

//[220,330,440]

// let qwerty = arr.map(function(el,index,arr){

//     return el * 10

// })
// console.log(qwerty)
let qwerty = arr.map((el,index,arr)=>el * 10)
console.log(qwerty)


let names = ["chinmay","ninad","amol"]
let j = names.filter((el)=> el.length > 4)
console.log(j)


// reduce
let n = [1,2,3,4]
let suma = n.reduce(function(acc,el){
    return el+acc
},0)
console.log(suma)

// forEach 

let ci = ["pune","mumbai","nagpur"]
for(let i = 0 ; i < ci.length ;i++){
    console.log("welcome "+ ci[i])
}

let g = ci.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})
console.log(g)

// map ==> array 
// filter ==> array 
// reduce ==> single 
// forEach === Not 

// find()  every()  some()  findIndex()


let number = [33,55,66,7,7,8,9] // 1 
 
// every()

// let u = number.every(function(el){
//     return el > 10
// })
// console.log(u)


// some()
// let uay = number.some(function(el){
//     return el > 100
// })
// console.log(uay)


// filter
let h = [22,33,44,55,77]

let jkl = h.filter(function(el){
    return el > 50
})
console.log(jkl)

// find

let jkla = h.find(function(el,index){
    return el > 50
})
console.log(jkla)


let jklaa = h.findIndex(function(el,index){
    return el > 50
})
console.log(jklaa)

// some -- boolean
// every -- boolean 
// find - element -- first occurence
// findIndex ---- number



// let add = (x,y)=> x+y
// let e = add(12,23)
// console.log(e) //

// let add = (x,y)=>{
//     let a = x+y
//     let b = x-y
//     let c = x*y
//     let d = x/y
//     //return [a,b,c,d]

//     return [x+y,x-y,x-y,x*y]
// }

// let r = add(100,15)
// console.log(r)// [25,-1,156]




// let s = add(12,13)
// console.log(s)
// console.log(s+10)


// array ----->

// push() , pop() , shift(), unshift() , some(), every(),reduce(),find(),findIndex()
// filter() , map(),forEach()


let fruits = ["mango","apple","banana","grapes"]
let bb = fruits.includes("mango")
console.log(bb)




let fruitsa = ["mango","apple","banana","grapes"]
let jj = fruitsa.reverse()
console.log(jj)



let fruitb = ["mango","apple","banana","grapes"]
let jja = fruitb.sort()
console.log(jja)


// slice
//          0       1        2        3
fruitb = ["mango","apple","banana","grapes"]
//           -4        -3      -2       -1

// fruitb.slice(startposition , endpoint(not included))
console.log(fruitb.slice(1))
console.log(fruitb.slice(1,4))
console.log(fruitb.slice(0,3))
console.log(fruitb.slice(-4,2))
console.log(fruitb.slice(-1,-4)) 


// concat

// let arrA = [1,3,4]
// let arrB = [22,33,44]

// let cccc = arrB.concat(arrA)
// console.log(cccc)


// let namei = "chinmay"
// console.log("My name is "+namei+" !")
// console.log(`My names is ${namei}`)


// let arrs = ["shiwani","nilam","payal"]

// arrs.forEach(function(el){
//     console.log(`Welcome ${9+9}!`)
// })


//-----------------------> 

// let fay = "chinmay-deshpande-7709192441"
// console.log(fay.split("-")) // ["chinmay","deshpande","7709192441"]
 


// let perso = ["chinmay","deshpande",7709192441]
// let bay = perso.join('-')
// console.log(bay)

// "chinmay-123".split('-')[1] // ["chinmay","123"]
// ["chinmay","deshpande"].join(' ') // "chinmay deshpande"



//---------------------------------------------->
//        0   1  2  3  4  5  6  7
let r = [100,100,99,77,88,99,00,22] // 'a'
let lll = r.fill('a',4)
console.log(lll)


// flatmap() // Array project --->

// splice         0        1        2          3
let countries = ["India","Japan","Australia","America"]
// splice(startpoitions,numberOfELementD,"repl",repl)
let haa = countries.splice(1,3,"uk","nepal")
console.log(countries)
























// '18'





