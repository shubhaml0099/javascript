// let pro = new Promise(function(resolve,reject){

//     let a = 10
//     let b = 20
//     if(a == b){

//         resolve("I am solved")

//     }
//     else {
//         reject("I am rejected")
//     }

// })

// pro.then(function(str){
//     console.log(str)

// },function(str){
//     console.log(str)
// })
// .catch(function(){
//     console.log('I am rejected 2')
// })


let pro = new Promise(function(resolve,reject){

    let a = 10
    let b = 10
    if(a == b){

        resolve("I am solved")

    }
    else {
        reject("I am rejected")
    }

})

pro.then(function(str){
    console.log(str)
    return ["pranali","sanchita","komal"]

})
.then(function(a){
    console.log(a)
    return a[0]
})
.then(function(aa){
    console.log(aa)
})
.catch(function(){
    console.log('I am rejected 2')
})