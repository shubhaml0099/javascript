
let parra = document.querySelector('p')
let buttonOne = document.querySelector('button') 
let headingOne = document.querySelector('h1')

//   tagName[attribute = values]

let input1 = document.querySelector('input[type = text]')

buttonOne.addEventListener('click',()=>{
    parra.style.color = input1.value
    headingOne.style.backgroundColor = input1.value
    input1.value =''

})


// let element;

// element = document.getElementsByTagName('h1').removeAttribute('class')
// console.log(element)