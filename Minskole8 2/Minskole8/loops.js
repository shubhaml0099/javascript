

// loops 

// string array , objects, userdefined data ,oops, basic DOM   -- datatypes


// conditional statement 


///  ---->  conditional statement 


// input -------->  outcome multiple astil 

// 10 ------ 5 
// 15 ------- 10

let numberOfTickets  = 10

if(numberOfTickets > 1 && numberOfTickets <= 10){
    console.log('5 percent discount ')
}
else if(numberOfTickets > 10){
    console.log('10 percent discount')
}
// else {
//     console.log('Incoorect input')

// }

if(numberOfTickets > 1 && numberOfTickets <= 10){
    console.log('5 percent discount ')
}
if(numberOfTickets > 10){
    console.log('10 percent discount')
}
// else {
//     console.log('Incorrect input')

// }

//----------------------------------------->


//  for , while , do while   
// break , continue



//for  while

// ----->  while 

//----->  5 

// 1 to 10 



// for(let i = 1 ; i <=10 ;i++){
//     console.log(i)

// }

// let i = 1

// for(; i <=10 ;){
//     console.log(i)
//     i++

// }



// while 

// let i = 1
// while(i <= 10){
//     console.log(i) //1
//     i++
// }



// continue and break statement

// dhanashri -- while "chinmay"

let fullName = "chinmay"

let ii = 0

while(ii <= 6){
    console.log(fullName[ii])    
    //ii ++
    //ii = ii + 1
    ii += 1

}



for(let i = 0 ; i < 10; i++){
    console.log(i)             // 0,1,2,3,4,5
    if(i === 5){
        break;
    }
}

// continue
console.log('----------')

for(let i = 0 ; i < 10; i++){
    
    if(i === 5){
        continue;
    }
    console.log(i)  //  0 ,1,2,3,4,6,7,8,9
}






















