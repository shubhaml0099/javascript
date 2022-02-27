
let headingOne = document.querySelector('p')
headingOne.addEventListener('dblclick',function(){
    headingOne.style.backgroundColor= 'green'
})
let buttonOne = document.querySelector('button')
buttonOne.addEventListener('click',function(){
    headingOne.style.backgroundColor = 'red'
    headingOne.style.Color = 'white'

})
//console.log(buttonOne)
console.log(headingOne)

let list = document.querySelector('li')
console.log(list)