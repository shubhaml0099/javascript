
// functions --

//--------  1  i/p   ==> multiple outcome 

// 5 ===> 10 %
// 10 >   =====> 30 %

// condition ?? ---- either true or false

// if(true){
//     //statement
// }
// else{

//     // statement

// }


// AND 

// data--->  string array objects functions DOM , userdefined (oops)
//javascript --- combination or old  .... ajax
// projects 
// program One

let numberOfTickets = 5
// if(numberOfTickets > 1 && numberOfTickets <= 5){
//     console.log(`Discount 10 %`)
// }
// else{
//     console.log(`Discount 20 %`)
// }

// Program two

// <= 5 -----> 10 %
// >5 && <= 10 ---- 20 %
// > 10 ------------30

numberOfTickets = 5

// if(numberOfTickets >=1 && numberOfTickets <=5){
//     console.log(`10 % discount`)
// }
// else if(numberOfTickets > 5 && numberOfTickets <= 10){
//     console.log(`20 percent discount`)
// }
// else if(numberOfTickets > 10){
//     console.log(`30 percent discount`)
// }
// else{
//     console.log('Incorrect input')
// }

// program  three
 
// if(numberOfTickets >=1 && numberOfTickets <=5){
//     console.log(`10 % discount`)
// }
// if(numberOfTickets > 5 && numberOfTickets <= 10){
//     console.log(`20 percent discount`)
// }
// if(numberOfTickets > 10){
//     console.log(`30 percent discount`)
// }
// else{
//     console.log('Incorrect input')
// }


// Nested  ----> "chiku" "banana"

// program 4

// let fruits = ["apple","banana","grapes"]
// let userInputOne = "apple"
// let userInputTwo = "chiku"

// if(fruits.includes(userInputOne)){

//     if(fruits.includes(userInputTwo)){
//         console.log('I will bring fruits')
//     }
//     else{
//         console.log('only one fruit is available')
//     }
  
// }
// else {
//     console.log('Fruits not available')
// }

// Loops -----

//for while

// finite number --> 5

// for while same  ===> task 


// 1 to 10 


//program 5


// for(let i = 1 ; i <= 10; i++){
//     console.log(i)
// }

// let i = 1
// for( ; i <= 10; ){
//     console.log(i)
//     i++
// }


// program 6


// while 

// while(true){
//     // statments
// }


// let i = 1 

// while(i <= 10){

//     console.log(i) //1

//     //i++
//     //i = i + 1

//     // short hand
//     i += 1

//     // increment or decrement

// }

// let i = 10
// while(i >= 1){
//     console.log(i)

//     i--
// }


// break and continue 

// break statement ===>  loop exist
// continue =====>  from current position loop continues


for(let i = 1 ; i <= 10; i++){
    console.log(i) //1 ,2 , 3 ,4 , 5
    if(i === 5){
        break;
    }
}

//program  7

for(let i = 1 ; i <= 10; i++){

    if(i === 5){
       continue;
    }
    console.log(i) // 1,2,3,4,6,7,8,9,10
}

for(let i = 1 ; i <= 10; i++){
    //1 ,2 , 3 ,4 , 5
    if(i === 5){
        break;
    }
    console.log(i)
}


// for(let i = 1 ; i <= 10; i++){
//     if(i === 5){
//        continue;
//     }

//     console.log(i)
//      // 1,2,3,4,6,7,8,9,10
// }

let i = 10

while(i >= 0){

    console.log(i) // 10,9,8,7,6,5

    if(i == 5){
        break
    }

    i--
}



let ie = 10

while(ie >= 0){

    // 10,9,8,7,6,5

    if(ie == 5){
        continue
    }

    console.log(ie) 

    ie--
}





