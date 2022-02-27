// True and False value in js 

//True  1, -1 ,'C',"Chinmay",' ' ,[], {}
// False - 0 ,undefined,null ,''

if(0){
    console.log('Hello')
}
else{
    console.log('Bye')

}

if(1){
    console.log('Hello')
}
else{
    console.log('Bye')

}

if(-1){
    console.log('Hello')
}
else{
    console.log('Bye')

}
if('A'){
    console.log('Hello')
}
else{
    console.log('Bye')

}

if('New'){
    console.log('Hello')
}
else{
    console.log('Bye')

}

if(undefined){
    console.log('Hello')
}
else{
    console.log('Bye')

}

if(null){
    console.log('Hello')
}
else{
    console.log('Bye')

}

if(""){
    console.log('Hello')
}
else{
    console.log('Bye')

}

if(' '){
    console.log('Hello')
}
else{
    console.log('Bye')

}
if([]){
    console.log('Hello')
}
else{
    console.log('Bye')

}
if({}){
    console.log('Hello')
}
else{
    console.log('Bye')

}

// 0 - Try Again 
// 1 - Score More
// 2 - pass

let mark = 0

if(mark == 0){
    console.log('Try again !')
}
else if(mark == 1){
    console.log('Score more !')
}
else {
    console.log('pass')
}

let a = Boolean(null)
console.log(a)

let b = Boolean(1)
console.log(b)

let c = Boolean(undefined)
console.log(c)











// let a ; 
// console.log(a)

 Prompt

let age = prompt('Enter you age!') // string
console.log(typeof age)
age = Number(age) //       Number('18') ===> 18
if(age === 18){
    console.log('you can drive !')
}
else {
    console.log('you cannot drive')
}