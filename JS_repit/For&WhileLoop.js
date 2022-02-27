

//loops in javascript


// for loop

// for(intialization ; conditionCheck ;increment/decrement){
//     // statements
// }
for (let i = 0; i < 3; i++) {  // 1 //2 //3

    console.log(i)  //0 // 1 // 2

}

// let y = 0

// for (; y < 3;) {  // 1 //2 //3

//     console.log(y)  //0 // 1 // 2
//     y++

// }

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

for (let i = 2; i <= 20; i = i + 2) {  // 4
    console.log(i) // 2 , 4
}

for(let i=20;i>=0;i-=2){
    console.log(i)
}

// even 
// odd
console.log(14 % 2 != 0)
console.log(14 % 2 == 0)

for(let i=0; i<=20;i++){
    if(i%2==0){
        console.log('Even Number  '+i)
    }
    else{console.log('Odd Number '+ i)}
}


// // Loops in javascript 


// // for(intilization ; conditionCheck; increment/decrement){

// //     //staments

// // }

// // program 1
// // 1 to 3

for (let i = 1; i <= 3; i++) { // 2 // 3 //4

    console.log(i) // 1 , 2 , 3

}


// while(condition){

//     // statement

// }
// while loop used for 

// // 

let p = 1 // intilizatio 

while (p <= 3) {
    console.log(p) //1 // 2 // 3
    p++ // 2 //3 // 4

}

// // program 2 (Table of 2)
// console.log('--------- Table of 2x-----------')

let q = 2
while (q <= 20) {
    console.log(q)
    q = q + 2
}


 console.log('--------- Table of 4x-----------')

// let a=4
// while(a<=40){
//     console.log(a)
//     a+=4
// }


// // program 3 
// // Even or odd from 1 to 50

let z = 1

while(z <= 50){
    if(z% 2 == 0){
        console.log('Even number',z)
    }
    else{
        console.log('Odd number ',z)
    }
    z ++
}



// // program 4

// // break statement 


for(let q=1; q<=20; q++){
     if(q==12){
         continue
     }
     else{
         console.log('odd no ',q)
     }
}

for (let i = 10; i >= 0; i--) {  // 9 // 8 // 7 // 6

    if (i == 6) {
        break
    }
    console.log(i)  // 10 // 9 // 8 // 7

}

// continue statement 
for (let i = 0; i <= 3; i++) { // 1 // 2 // 3
    if (i == 1) {
        continue
    }
    console.log(i)  // 0 ,2 ,3
}

// // continue and break with while statement 

console.log('----------------')

let a = 1 

while(a <= 3){
    if(a ==2){
        break;
    }
    console.log(a)
    a++
}


// let aa = 0

//  //Incorrect and infinite loop
// while(aa <= 3){
//     if(aa ==2){
//         continue
//     }
//     console.log(a) // 0 , 1
//     a++
// }

// // Incorrect

// let aa = 0
// while(aa <= 3){
//     console.log(a)  // 0 // 1 //2
//     a++    // 1 // 2
//     if(aa ==2){
//         continue
//     }
  
// }

let aa = -1
while(aa <= 3){  
    aa ++     // 0 //1 //2 //3 //3
    if(aa ==2){
        continue
    }
    console.log(a) // 0  1 ,3 ,4
  
}

// //--------------------------------
let y = 0

while(y <= 3){  

    if(y == 2){
        y++ // 3
        continue
    }
    console.log(y) // 0 , 1 ,3
    y++  //1 // 2 //4

}

// // continue statement

let two = []

let qa = 2
while(qa <= 20){
    two.push(qa)
    qa = qa + 2
}
console.log(two)
// [7:59 AM, 2/14/2022] Chinmay Sir: //loops in javascript

