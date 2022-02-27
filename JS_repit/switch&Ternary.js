/* 
    continue, break 
    switch case 
    ternary operator

*/

for(let i=0; i<=10;i++){
    if(i==6,i==7){
        continue
    }
    if(i==8){
        break
    }
    console.log(i)
}

// //------------------------------->

let a = 300000
let b = 20000000000
let c = 150000000
if(a>b){
    if(a>c){
        console.log('A is greater ')
    }else{
        console.log('C is greater')
    }
}else if(b>c){
    console.log('B is greater')
}else{
    console.log('C is greater')
}

// //-----------------------------------

if(a > b  && a > c){
    console.log('A is greater')
}
else if(b > c){
    console.log('B is greater')
}
else {
    console.log('C is greater')
}

// //------------------------------------

// //tenary operator

//condition?pass:fail

let age = 16

if(age > 18){
    console.log('you can drive !')
}
else{
    console.log('you cannot drive')
}

age > 18 ? console.log('you can drive !'): console.log('you cannot drive')

// //condition?pass:fail
let result = age > 18?'you can drive':'you cannot drive'
console.log(result)

let uu = 100
let ii = 200
uu > ii?console.log('uu is greater'):console.log('ii is greater')

//------------- switch case --------------------

// Switch case without break statement

let city = 'mumbai'
switch(city){

    case 'pune':
        console.log('Maharastra')
    
    case 'jaipur':
        console.log('Rajasthan')
    
    case 'kanpur':
        console.log('Uttarpradesh')

    default:
        console.log('Enter the correct city')

}

let man = 'rani'
switch(man){
    case 'shubham':
        console.log('male ')
        break

    case 'rani':
        console.log('female')    
        break
}


// switch(city){

//     case 'pune':
//         console.log('Maharastra')
//         break;
    
//     case 'jaipur':
//         console.log('Rajasthan')
//         break;
    
//     case 'kanpur':
//         console.log('Uttarpradesh')
//         break;

//     default:
//         console.log('Enter the correct city')

// }

// switch(city){

//     case 'pune':
//     case 'mumbai':
//         console.log('Maharastra')
//         break;
    
//     case 'jaipur':
//         console.log('Rajasthan')
//         break;
    
//     case 'kanpur':
//     case 'lucknow':
//         console.log('Uttarpradesh')
//         break;

//     default:
//         console.log('Enter the correct city')

// }

//------------------------------------------->

console.log(Math.floor(23.8))
console.log(Math.ceil(22.1))
console.log(Math.round(12.5))
console.log(Math.round(12.3))

Math.random() // 0 to 0.99
// Dice -- 1 to 6
console.log('-------------------------')
let aaa =  Math.random() * 6// 0 to 5.99 
console.log(Math.floor(aaa)+1) // 0 , 1,2,3,4,5
console.log(Math.floor(Math.random()*6) + 1)


console.log(Math.floor(Math.random()*10)+1)

// //-----------------------------------------------
// // 0 1 2 3
// // p u n e 

let  city2 = 'pune' // == >  'enup'
let reversed = ''

for(let i = 0 ; i < city2.length ;i++){
   // console.log(city2[i])

   reversed = city2[i] + reversed

//                p  + ''   ===> p
//                u   + p   ====> up
//                n   + up =====> nup
//                e   + nup =====> enup

}
 
console.log(reversed)