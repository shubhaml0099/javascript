

// // synchronous 

// function addition(x, y) {
//     console.log(x + y)
//     alert('hello india')
// }
// function add(x, y) {
//     console.log(x - y)

// }
// addition(2, 4)
// add(10, 5)


// function add(x, y) {
//     console.log(x + y)
//     //alert("hello world ................!")
// }
// function sub(x, y) {
//     console.log(x - y)
//     console.log('Hello new world ......!')
//     alert('hello.......')
// }

// sub(100, 13)
// add(100, 300)



// asynchronus -------------------->>>---------------

// function add1(x,y){
//     console.log(x+y)
//    // alert('click hear to next ')
// }
// function sub(x,y){
//     
//     setTimeout(function(){
//        console.log(x-y)
//        console.log('hello world')
//         alert('wet for decond to next ')
//     },5000)
// }

// //add1(10,15)
// sub(40,20)
// add1(10,15)


// sir problem 

// function add(x,y){
//         console.log(x+y) //3
//         //alert("hello world ................!")
//     }
//     function sub(x,y){ 
//         console.log(x-y)// 1
//         console.log('Hello new world ......!') //2
//         setTimeout(function(){
//             alert('hello.......') // 4
//         },5000)

//     }
//     sub(12,10)
//     add(1000,2000)



// synchronus 

function add(x, y) {
    console.log(x + y)
    console.log('hello india')
    //alert('you want to go ahed  theh ok')
}

function sub(x, y) {

    setTimeout(function () {
        console.log(x - y)
        alert('now end')
    }, 4000)
    console.log('shubham')
}

sub(12, 10)
add(12, 13)

