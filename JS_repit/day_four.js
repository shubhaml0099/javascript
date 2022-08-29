// // program 1
// let randomNumber = Math.floor(Math.random()* 6) + 1 //  1 - 6// 0 to 5  // 0 to 5.99
// console.log(randomNumber)
// let userInput = Number(prompt('Please Guess the Number from 1 to 6'))
// if(userInput ==  randomNumber){
//     console.log('You Guess the number right !')
// }
// else {
//     console.log('Your Guess is incorrect ')
// }


// program 2

let randomNumber1 = Math.floor(Math.random()* 6) + 1
console.log(randomNumber)
let userInput1
let count = 3

for(let i = 0 ; i < 3 ; i++){
    count = count - 1
    userInput = Number(prompt('Please Guess the Number from 1 to 6'))
    if(userInput == randomNumber){
        console.log('You Guess the number right ')
        break
    }
    else {
        console.log('Incorrect Guess .. Try Gain ! '+ count + ' attempt left')
    }

}

// program 3

// let randomNumber = Math.floor(Math.random()* 6) + 1 // 4
// console.log(randomNumber)
// let count = 0
// let userInput ; // undefined
// while(userInput !== randomNumber){
//     count = count + 1
//     userInput = Number(prompt('Please Guess the number between one to six')) // 2 // 4
// }
// console.log('You Guess it correct'+ ' in ' + count + ' attempt ')



// Program 4 

// Guess the number  twice with out using loop ...

let randomNumber = Math.floor(Math.random()* 6) + 1
console.log(randomNumber)
let userInput = Number(prompt('Please Guess the number between one to six'))

let userGuess = false

if(randomNumber == userInput){
    userGuess = true
}
else {
    userInput = Number(prompt('Please Guess the number between one to six'))
    if(randomNumber == userInput){
        userGuess = true
    }
   
}
if(userGuess == true){
    console.log('Your Guess is correct !')
}
else {
    console.log('You Guess is incorrect')
}

//userGuess == true ?console.log('Your Guess is correct !'):console.log('You Guess is incorrect')