// // // program ----------->>--------
// // let person = {
// //     firstName:'shubham',
// //     lastName:'langote',
// //     rollNo:32,
// //     age : 25,
// //     city:'pandharpur',
// //    // skill:['c++','javascript','paython','cypress','cellenium']

// // }
// // console.log(person)
// // //console.log ('shubham')

// // person.friend = 'yogi'
// // console.log(person)
// // person.firstName='ram'
// // console.log(person)
// // delete person.age
// // console.log(person)


// let employs = [
//     {

//         firstName: 'shubham',
//         lastName: 'langote',
//         rollNo: 32,
//         age: 25,
//         city: 'pandharpur',
//         skill: ['c++', 'javascript', 'paython', 'cypress', 'cellenium']
//     },
//     {

//         firstName: 'ram',
//         lastName: 'mane',
//         rollNo: 31,
//         age: 20,
//         city: 'indapur',
//         skill: ['c++', '', 'paython', 'cypress', 'cellenium']
//     },
//     {

//         firstName: 'yogi',
//         lastName: 'yelpale',
//         rollNo: 36,
//         age: 28,
//         city: 'pandharpur',
//         skill: ['c++', 'javascript', 'paython', 'cypress',]
//     },
//     {

//         firstName: 'onkar',
//         lastName: 'deshmukh',
//         rollNo: 29,
//         age: 24,
//         city: 'kusmud',
//         skill: ['c++', 'javascript', 'cypress', 'cellenium']
//     },
//     {

//         firstName: 'rahul',
//         lastName: 'patil',
//         rollNo: 37,
//         age: 27,
//         city: 'pune',
//         skill: ['c++', 'javascript', 'paython', 'cellenium']
//     },
//     {

//         firstName: 'anand',
//         lastName: 'more',
//         rollNo: 12,
//         age: 28,
//         city: 'pune',
//         skill: ['c++', 'javascript', 'paython', 'cypress', 'cellenium']
//     },
//     {

//         firstName: 'sanjay',
//         lastName: 'rede',
//         rollNo: 40,
//         age: 32,
//         city: 'temburni',
//         skill: ['c++', 'javascript', 'paython', 'cypress', 'cellenium']
//     },
//     {
//         firstName: 'amol',
//         lastName: 'randive',
//         rollNo: 72,
//         age: 30,
//         city: 'penur',
//         skill: '_'
//     }

// ]

// // Program 1

// //skill of person who name start with a
// let E1 = employs.filter(function (el, index) {
//     //return el.firstName[0]==='s'||  el.firstName[0]==='S'
//     return el.firstName[0] === 'a' || el.firstName[0] === 'A'
//     //return el.firstName[0]==='y'||  el.firstName[0]==='Y'

// }).forEach(function (el, index) {
//     console.log(`${el.firstName}  ${el.lastName} :     ${el.skill}:${'      No of skill  = ' + el.skill.length}`)

// })

// // Program 2 ------------------------->>---------------------------------------

// let E2 = employs.filter(function (el, index) {
//     return el.firstName.startsWith('a') || el.firstName.startsWith('A')
// })
// //console.log(E1)
// E2.forEach(function (el) {
//     return console.log(`${el.firstName}:${el.skill.length}`)
// })


// // Program 3
// // add user name for all element

// employs.forEach(function (el, index) {
//     return el.userName = el.firstName[0][0] + el.lastName[0][0]
// })
// console.log(employs)

// //--------------------------------------->> add clg name for all
// employs.forEach(function (el) {
//     return el.clgName = 'SKN korti pandharpur'
//  })
// console.log(employs)



// // Program 4
// //finding average age of employs

// let averageAge = employs.reduce(function (acc, el, index, arry) {
 //     return acc + el.age
// }, 0) / employs.length                     //--------------->>   0 is set as acc=0
// console.log(averageAge)

// //------------------------------------->>---------------------------------
// //Program 5
// // first user more than 3 skill
 
// let moreSkill = employs.filter(function (el, index) {
//     return el.skill.length >= 5
//     })
// moreSkill.forEach(function (el) {
//      return console.log(`${el.firstName} ${el.lastName}.`)
//  })
// console.log(moreSkill.length)

// //-------------------------------------->>---------------------------------

// // Program 6
// // similler city and paython skill same employs
// employs.filter(function (el, index,) {
//     return el.city === 'pune' && el.skill.includes('c++')
// }).forEach(function (el) {
//     console.log(`${el.firstName}  ${el.lastName }`)
// })


// //---------------------------------->>--------------------------------
// // Program 7
// // finding duplicate no by using for loop

// let shub=[24,22,21,23,24,22]
// let notDuplicate=[]
// let duplicated=[]
// for (i=0;i<shub.length;i++){
//     if (notDuplicate.indexOf(shub[i])< 0){
//         notDuplicate.push(shub[i])
//     }else{
//         duplicated.push(shub[i])
//     }
// } 
// console.log(notDuplicate)
// console.log(duplicated)


// //------------------------------->>------------------------------------
// //Program 8
// // finding duplicate no by using object method

// let numbers =[27,45,27,11,12,67,27,11,30,12,30]
//  let ssd1=numbers.filter(function(el,index,arr){
//   // return arr.indexOf(el)===index     // [27, 45, 11, 12, 67, 30 ]
//     return arr.indexOf(el)!=index       // [ 27, 27, 11, 12, 30 ]

// })
// console.log(ssd1)

// // console.log(typeof employs)

// let x=[]
// for(let i=0;i<numbers.length;i++){
    
//     if(!x.includes(numbers[i])){       
//         x.push(numbers[i])   //27,45
//     }
// }
// console.log(x)




// finding duplicate no

// let shub=[24,22,21,23,24,22]
// let without_duplicate=[]
// let dd1 = shub.filter(function (el,index,arry){
//     return arry.indexOf(el)===index
// })
// without_duplicate.push(dd1)
// console.log(without_duplicate)


// finding duplicate by using loop

 raj = [10,20,10,4,5,6,4,5,]
let duplicate=[]
let nonduplicate=[]
for(i=0;i<raj.length;i++){
    if(nonduplicate.indexOf(raj[i])<0){
        nonduplicate.push(raj[i])
    }
    else{
        duplicate.push(raj[i])
    }
}

console.log(duplicate)

console.log(nonduplicate)