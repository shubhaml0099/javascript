// Destructuring
//Destructuring

let shu = [12, 13, 43, 4]

let p = shu[0]
let q = shu[1]
let r = shu[2]
let s = shu[3]

console.log(p)
console.log(q)
console.log(r)
console.log(s)

let [a, b, c, d] = shu

console.log(a)
console.log(b)
console.log(c)
console.log(d)



//-------------------------->>---------------->> boject <<<-----------
// object  --- 
let Person = {

    FullName: "shubham",
    Age: 25,
    RollNo: 23
}

let { FullName: fn, Age: ag, RollNo: rn } = Person

console.log(fn)
console.log(ag)
console.log(rn)


// Program 1

let students = [
    {
        FullName: "shubham",
        Age: 25,
        RollNo: 23
    },
    {
        FullName: "yogi",
        Age: 35,
        RollNo: 83

    }
]

let [{ FullName: ff, Age: agg, RollNo: rnn }, { FullName: ff1, Age: agg1, RollNo: rnn1 }] = students

console.log(ff)
console.log(ff1)
console.log(agg)
console.log(agg1)
console.log(rnn)
console.log(rnn1)


// program 2

let Family = {
    parent: {
        mother: "kanchan",
        father: "shishis",
        child: ['raj', 'ram', 'rani']
    },
    brother: ['rahul', 'shubham']
}

let { parent: { mother: mom, father: dad, child: [chi1, chi2, chi3] }, brother: [bro1, bro2] } = Family

console.log(bro2)
console.log(bro1)
//console.log(child)
console.log(dad)
console.log(mom)
console.log(chi2)



/// rest operator

function addition(...ass) {
    console.log(ass)
    let sum = ass.reduce(function (acc, el, index) {
        return acc + el
    })
    return sum
}
let total = addition(12, 23, 60, 58, 43, 13)
console.log(total)

// rest operator 

function addition(...xx) {
    console.log(xx)
    let sum = xx.reduce(function (acc, el, index) {
        return acc + el
    })
    return sum
}
let total1 = addition(12, 13, 13, 16, 14)
console.log(total1)


// spread operation 

let sum = [10, 20, 30, 40, 50]

function add(a, b, c, d) {
    return (a + b + c + d)
}

let addi = add(sum[0], sum[1], sum[2], sum[3])
console.log(addi)

// ------------------->>>-------------------

let age = [24, 14, 25, 13, 52, 23, 45, 23]
function above(a, ...rr) {
    let above1 = rr.filter((el, index) => {
        return el > a
    })
    return above1
}
let shu5 = above(24, 14, 25, 13, 52, 23, 45, 23)
console.log(shu5)

// let numbers = [11,22,33,44]


// let f = numbers[0]
// let g = numbers[1]
// let h = numbers[2]
// let i = numbers[3]

// console.log(f)
// console.log(g)
// console.log(h)
// console.log(i)

// let [a,b,c,d] = numbers
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// //------------------------------>
// //object

// let person = {

//     fullName:"chinmay",
//     age:23,
//     rn:34

// }

// let {fullName:fn,age:ag,rn:roll} = person
// // console.log(fullName)
// // console.log(age)
// // console.log(rn)
// console.log(fn)
// console.log(ag)
// console.log(roll)

// //-------------------------------------------->


// //rutuja

// // program1

// let person3 = {

//     fullName:"chinmay",
//     rollNumber:12,
//     skills:["python","javascript"]
// }

// let { fullName:kn,rollNumber:gh,skills:[qwerty,qwerty2]} = person3
// console.log(qwerty)
// console.log(qwerty2)
// // shunbham


// let students = [

//     {
//         fullName:"chinmay",
//         age:23,

//     },
//     {
//         fullName:"amol",
//         age:40
//     }


// ]
// let [{fullName:aaa,age:ggg},{fullName:bbb,age:lll}] = students
// console.log(aaa)
// console.log(ggg)
// console.log(bbb)
// console.log(lll)

// //shraddha



// let family = {

//     parent:{

//             mother:"kanchan",
//             father:"shirish"
//     }


// }

// //[]
// // {}

// let { parent:{mother:ssss,father:vvvv}} = family

// console.log(ssss)
// console.log(vvvv)


// let vehicle = {
//     color:"red",
//     type:["sedane","suv"],
//     startType:{
//         one:"automatic",
//         two:"manual"
//     }
// }
// let {color:cl,type:[iii,ooo],startType:{one:hhj,two:hhk}} = vehicle
// console.log(hhj)
// console.log(hhk)

// // rest

// function addition(...aaa){  //
//     console.log(aaa)     //
//     let sum = aaa.reduce(function(acc,el){
//         return acc + el
//     },0)

//     return sum
// }
// let total = addition(12,13,14,33,44,55,66,77,88,99,00)
// console.log(total)

// // spread

// let numberss = [11,22,33,44,55,66]

// function addition2(a,b,c){
//     console.log(a+b+c)

// }
// addition2(...numberss)
// // spread


//              0          1        2
// let  names = ["chinmay","sarika","poorva"]

// let aaa = names[0]
// let bbb = names[1]
// let ccc = names[2]
// console.log(aaa,bbb,ccc)

// // Destructuring

// let [aa,bb,cc] = names
// console.log(aa)
// console.log(bb)
// console.log(cc)

// //----------------->

// let person = {
//     fullName:"chinmay",
//     age:23,
//     rollNumber:34
// }

// let {fullName:fn,age:ag,rollNumber:rt} = person
// console.log(fn)
// console.log(ag)
// console.log(rt)

// // program one


// let person4 = {

//     fullName:"chinmay deshpande",
//     age:23,
//     skills:["python","javascript"]

// }

// let {fullName,age,skills:[aaaa,bbbb]} = person4
// console.log(aaaa,bbbb)

// let person5 = [

//     {
//         rollNumber:34,skills:['html','css']
//     }
//     ,
//     {
//         rollNumber:32,skills:['javascript','css3']
//     }

// ]

// let [{rollNumber:nnnnnn,skills:[yyyyy,ooooo]},{rollNumber:nrrr,skills:[yttttt,ooyyyooo]}] = person5


// // program

// let parent = {

//     family:{

//         mother:"kanachan",
//         father:"shirish"
//     }

// }

// let {family:{mother:mmm,father:fff}} = parent
// console.log(mmm)
// console.log(fff)

// //----------------------------------------------->
// // spread and rest operator



// // function addition55(a,b,c){
// //     console.log(a+b+c)
// // }
// // addition55(12,13,14,33,44,55,66,77,88,99,55)



// function addition55(...r){
//     console.log(r)
//     let sum = r.reduce(function(acc,el){
//         return acc + el
//     },0)
//     return sum
// }
// let total = addition55(12,13,14,33,44,55,66,77,88,99,55)
// console.log(total)


// //let ages = [18,12,33,22,44,22,26,32,41,22,66,88,99,11]

// function above(a,...arr){
//     let jkl=  arr.filter(function(el){
//         return el > a
//     })
//     return jkl
// }

// let rrr = above(18,12,33,22,44,22,26,32,41,22,66,88,99,11)
// console.log(rrr)

// let rrra = above(40,12,33,22,44,22,26,32,41,22,66,88,99,11)
// console.log(rrra)
// // ---------------------------------------------


// //spread

// let ages = [18,12,33,22,44,22,26,32,41,22,66,88,99,11]
// function add(a,b,c){

//     console.log(a+b+c)


// }
// add(ages[0],ages[1],ages[2])


// function add(a,b,c){

//     console.log(a+b+c)


// }
// add(...ages)


// // 11,22,33 ----> [11,22,33]--- // rest
// // [11,22,33]---> 11,23,44 --- // spread

// //----------------------------------->


//  let ages = [11,22,33,44,11,22,33,44]



// function printArr(arr,fn){
//     let newArray = []
//     for(let i = 0 ; i < arr.length ;i++){
//         newArray.push(fn(arr[i]))
//     }
//     return newArray
// }

//  let above18 = function(el){
//     return el > 18
//  }

//  let addTwo = function(el){
//     return el + 2
//  }

//  let mulBy3 = function(el){
//      return  el * 3
//  }

//  let dg= printArr(ages,above18)
//  let sp =printArr(ages,addTwo)
//  let rp = printArr(ages,mulBy3)

//  console.log(dg)
//  console.log(sp)
//  console.log(rp)