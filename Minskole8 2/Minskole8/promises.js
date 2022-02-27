// // synchronus 
// // asynchronus 


// // function add(x,y){
// //     console.log(x+y)
// //     return x + y
// // }
// // add(12,13)


// // function sub(x,y){
// //     console.log(x-y)
// // }

// // add(12,13)
// // sub(12,4)


// // //-------------------------------------------------------

// // // function addition(x,y){

// // //     setTimeout(function(){

// // //         console.log(x+y)

// // //     },2000)


// // // }
// // // addition(12,13)
// // // console.log("hello")

// // // ------- Es6 ----------------------------------------

// // // There is a new to handle asyn code  promises

// // // cy.get('hello--------').

// // let pro = new Promise(function(resolve,rejected){
// //     let a = 10
// //     let b = 10

// //     if(a == b ){

// //         resolve([11,22,33])

// //     }
// //     else {
// //         rejected("rejected")
// //     }

// // })

// // pro.then(function(arr){
// //     console.log(arr)
// //     return arr[0]

// // })
// // .then((a)=>{
// //     console.log(a)
// //     return "hello"
// // })
// // .then(function(richa){
// //     console.log(r)

// // })

// // .catch(function(str){
// //     console.log(str)
// // })


// //------------------------------------>

// let pro = new Promise(function (reject, resolve) {
//     let a = 10
//     let b = 20
//     if (a == b) {
//         resolve("I am resolved")
//     }
//     else {
//         reject("I am rejected")
//     }

// })
// pro.then(function (str) {
//     console.log(str)
//     let a = str.toUpperCase()
//     return a
// })
//     .then((str) => {
//         console.log(str)
//     })

//     .catch(function (str) {
//         console.log(str)
// })







function addition(x, y) {
    console.log('hello')
    console.log('I  am learning javascriot')
    console.log(x + y)

}
function addition2(x, y) {
    console.log('hello2')
    console.log('I  am learning javascript2')
    console.log(x + y)

}

addition2(11, 33)
addition(12, 13)

//A ---- B ------- C ------ D  synchronus
//A -----B ------- C(Aysn)---D  Asynchronus


// function subtraction(){

//     setTimeout(function(){
//         console.log('Hello')
//     },2000)

//     console.log("Hello ----- i am first")

// }

// subtraction()

// API -----


//// post ---- createUser  // ---- id

//// getuser/id

// call back ---->  promises




// function newCall() {



// // china -- eye --

//     setTimeout(function () {

//         console.log('I will first......')

//         setTimeout(function () {

//             console.log('I will run second  ')

//             setTimeout(function(){

//                 console.log(' i will run third .....')

//             }, 1000)

//         }, 1000)

//     }, 1000)


// }
// newCall()


// promises 


let pro = new Promise(function(resolve,reject){
    let a = 10
    let b = 20
    if(a == b){
        resolve("hello")
    }
    else{
        reject("message")

    }

})

pro.then(function(){
    console.log('Helllo i am from resolved')
},function(){
    console.log('I am rejected.....')
})

let pro2 = new Promise(function(resolve,reject){
    let a = 10
    let b = 20
    if(a == b){
        resolve("hello")
    }
    else{
        reject("message")

    }

})

pro2.then(function(){
    console.log('Helllo i am from resolved')
})
.catch(function(){
    console.log('I am rejected  2')
})





