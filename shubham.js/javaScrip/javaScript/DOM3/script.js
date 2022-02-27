

//  <h1>HeadOne</h1> // red
//  <p id = "paraOne">paraOne</p> // yelllow
//  <p id = "paraTwo">paraTwo</p> // purple
//  <button>Add me button</button> // action

// selecting the element

let paraTwo = document.querySelector('#paraTwo')
let paraOne = document.querySelector('#paraOne')
let h1 = document.querySelector('h1')
let buttonA = document.querySelector('button')

//console.log(paraTwo)


buttonA.addEventListener('click',function(){

    paraOne.style.color = "purple"
    paraTwo.style.color = "red"
    h1.style.color = "green"

})

